import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, organization, phone, message }: ContactFormData = await req.json();

    console.log("Received contact form submission:", { name, email, organization, phone });

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format");
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to Kingdom Options
    const notificationEmail = await resend.emails.send({
      from: "Kingdom Options Website <onboarding@resend.dev>",
      to: ["kingdomoptions1@gmail.com"],
      subject: `New Consultation Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #B8860B; border-bottom: 2px solid #B8860B; padding-bottom: 10px;">
            New Consultation Request
          </h1>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #333;">Contact Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="margin-top: 0; color: #333;">Message</h2>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This message was sent from the Kingdom Options Consulting website contact form.
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: "Kingdom Options Consulting <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Kingdom Options Consulting",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #B8860B;">Thank You, ${name}!</h1>
          
          <p>We have received your consultation request and appreciate your interest in Kingdom Options Consulting.</p>
          
          <p>Our team will review your message and get back to you within 24 hours during business days.</p>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message:</h3>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>
          
          <p>If you have any urgent inquiries, please feel free to reach us directly:</p>
          <ul>
            <li>Email: <a href="mailto:kingdomoptions1@gmail.com">kingdomoptions1@gmail.com</a></li>
            <li>Phone/WhatsApp: +256 702 038 450</li>
          </ul>
          
          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>Kingdom Options Consulting Team</strong>
          </p>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
            Kingdom Options Consulting Ltd<br>
            Kampala, Uganda
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
