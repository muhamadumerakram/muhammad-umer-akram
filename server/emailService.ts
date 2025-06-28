import type { Contact } from "@shared/schema";

// Simple email service using EmailJS or similar approach
export async function sendContactNotification(contact: Contact): Promise<boolean> {
  try {
    // For now, we'll use a simple approach with mailto or a webhook service
    // This can be expanded to use other email services like Resend, EmailJS, etc.
    
    const emailContent = {
      to: "umerchaudhary2831@gmail.com",
      subject: `New Contact Form Submission: ${contact.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message}</p>
        <p><strong>Submitted:</strong> ${contact.createdAt}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${contact.name}
        Email: ${contact.email}
        Subject: ${contact.subject}
        Message: ${contact.message}
        Submitted: ${contact.createdAt}
      `
    };

    // Using Web3Forms as a simple email service alternative
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'demo-key',
        name: contact.name,
        email: contact.email,
        subject: `Portfolio Contact: ${contact.subject}`,
        message: `
From: ${contact.name} (${contact.email})
Subject: ${contact.subject}

Message:
${contact.message}

Submitted: ${contact.createdAt}
        `,
        to: "umerchaudhary2831@gmail.com"
      })
    });

    if (response.ok) {
      console.log('Email notification sent successfully');
      return true;
    } else {
      console.error('Failed to send email notification:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Email service error:', error);
    return false;
  }
}

// Alternative approach using EmailJS for client-side email sending
export function generateEmailJSTemplate(contact: Contact) {
  return {
    service_id: 'service_portfolio',
    template_id: 'template_contact',
    user_id: 'your_emailjs_user_id',
    template_params: {
      to_email: 'umerchaudhary2831@gmail.com',
      from_name: contact.name,
      from_email: contact.email,
      subject: contact.subject,
      message: contact.message,
      reply_to: contact.email
    }
  };
}