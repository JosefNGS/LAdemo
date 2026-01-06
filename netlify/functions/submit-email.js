// Netlify serverless function to save email addresses
// This function saves emails to a simple JSON file or can be connected to a database

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const { email } = JSON.parse(event.body);

    // Validate email
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Valid email is required' })
      };
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }

    // Here you would save to your database
    // For now, we'll use a simple approach with environment variables or a service
    
    // Option 1: Save to Airtable (recommended for simple use)
    // Option 2: Save to Firebase/Supabase
    // Option 3: Save to a JSON file (not recommended for production)
    // Option 4: Send to an email service like SendGrid/Mailchimp
    
    // Example: Log to console (in production, replace with actual database save)
    console.log('New email submission:', {
      email: email,
      timestamp: new Date().toISOString(),
      ip: event.headers['x-forwarded-for'] || event.headers['client-ip'],
      userAgent: event.headers['user-agent']
    });

    // TODO: Replace this with actual database save
    // Example database save code:
    /*
    const response = await fetch('YOUR_DATABASE_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DATABASE_API_KEY}`
      },
      body: JSON.stringify({
        email: email,
        source: 'landing_page',
        timestamp: new Date().toISOString(),
        status: 'pending'
      })
    });
    */

    // For now, return success (replace with actual database response)
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        success: true,
        message: 'Email submitted successfully',
        email: email
      })
    };

  } catch (error) {
    console.error('Error processing email submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
};

