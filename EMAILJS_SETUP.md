# EmailJS Setup Guide for Portfolio Contact Form

This guide will help you set up EmailJS to send contact form messages directly to your Gmail (araj7491@gmail.com) for free.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to "Email Services" in the left sidebar
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (araj7491@gmail.com)
5. Give your service a name (e.g., "Portfolio Contact")
6. Save the service

## Step 3: Create Email Template

1. Go to "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Choose "Blank Template"
4. Configure the template:

### Template Configuration:
- **Template Name**: "Portfolio Contact Form"
- **Subject**: `New message from {{from_name}} - {{subject}}`
- **Content**:
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

5. Save the template

## Step 4: Get Your Credentials

1. **Service ID**: Go to "Email Services" → Copy the Service ID of your Gmail service
2. **Template ID**: Go to "Email Templates" → Copy the Template ID of your contact form template
3. **User ID**: Go to "Account" → "API Keys" → Copy your Public Key

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here', // From Step 4
  TEMPLATE_ID: 'your_template_id_here', // From Step 4
  USER_ID: 'your_user_id_here', // From Step 4
};
```

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out the form and submit
4. Check your Gmail (araj7491@gmail.com) for the test message

## Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- Basic email templates
- Gmail, Outlook, and other email services

## Troubleshooting

### Common Issues:

1. **"Service not found" error**:
   - Make sure your Service ID is correct
   - Verify your Gmail service is properly connected

2. **"Template not found" error**:
   - Check your Template ID is correct
   - Ensure the template is saved and published

3. **"User ID not found" error**:
   - Verify your User ID (Public Key) is correct
   - Make sure you're using the Public Key, not Private Key

4. **Emails not received**:
   - Check your Gmail spam folder
   - Verify the Gmail account is correctly connected
   - Check EmailJS dashboard for any error messages

## Security Notes

- The User ID (Public Key) is safe to expose in frontend code
- Never share your Private Key
- Consider rate limiting for production use

## Production Deployment

When deploying to production:
1. Update the configuration with your production credentials
2. Test the contact form thoroughly
3. Monitor your EmailJS dashboard for any issues
4. Consider upgrading to a paid plan if you expect high traffic

## Support

If you encounter issues:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Visit EmailJS community forum
3. Contact EmailJS support for account-related issues 