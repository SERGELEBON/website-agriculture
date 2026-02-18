import emailjs from 'emailjs-com';

// EmailJS configuration
// Note: In production, these should be environment variables
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_default', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_default', // Replace with your EmailJS template ID
  USER_ID: 'user_default', // Replace with your EmailJS user ID
};

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Send contact form email using EmailJS
 * Falls back to mailto: link if EmailJS is not configured
 */
export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  // Check if EmailJS is properly configured
  const isConfigured = 
    EMAILJS_CONFIG.SERVICE_ID !== 'service_default' &&
    EMAILJS_CONFIG.TEMPLATE_ID !== 'template_default' &&
    EMAILJS_CONFIG.USER_ID !== 'user_default';

  if (!isConfigured) {
    // Fallback: Open mailto link
    const subject = encodeURIComponent(`Contact Form: ${data.firstName} ${data.lastName}`);
    const body = encodeURIComponent(
      `Name: ${data.firstName} ${data.lastName}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n\n` +
      `Message:\n${data.message}`
    );
    
    window.open(
      `mailto:westafricaagrocommoltd@gmail.com?subject=${subject}&body=${body}`,
      '_blank'
    );
    
    return {
      success: true,
      message: 'Opening your email client...',
    };
  }

  try {
    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      to_email: 'westafricaagrocommoltd@gmail.com',
    };

    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.USER_ID
    );

    return {
      success: true,
      message: 'Message sent successfully!',
    };
  } catch (error) {
    console.error('Email send failed:', error);
    
    // Fallback to mailto on error
    const subject = encodeURIComponent(`Contact Form: ${data.firstName} ${data.lastName}`);
    const body = encodeURIComponent(
      `Name: ${data.firstName} ${data.lastName}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n\n` +
      `Message:\n${data.message}`
    );
    
    window.open(
      `mailto:westafricaagrocommoltd@gmail.com?subject=${subject}&body=${body}`,
      '_blank'
    );

    return {
      success: true,
      message: 'Opening your email client...',
    };
  }
}

/**
 * Generate WhatsApp link for direct chat
 */
export function getWhatsAppLink(message?: string): string {
  const phone = '233538361679'; // International format without +
  const defaultMessage = encodeURIComponent(
    message || 'Hello! I would like to inquire about your agricultural commodities services.'
  );
  return `https://wa.me/${phone}?text=${defaultMessage}`;
}

/**
 * Generate direct call link
 */
export function getPhoneLink(): string {
  return 'tel:+233538361679';
}

/**
 * Generate email link
 */
export function getEmailLink(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  const query = params.toString();
  return `mailto:westafricaagrocommoltd@gmail.com${query ? '?' + query : ''}`;
}
