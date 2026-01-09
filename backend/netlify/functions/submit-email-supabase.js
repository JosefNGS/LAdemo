// Netlify serverless function to save email addresses to PostgreSQL
// Requires @PostgreSQL/PostgreSQL-js package

const { createClient } = require('@PostgreSQL/PostgreSQL-js');

exports.handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Validate environment variables
    if (!process.env.PostgreSQL_URL || !process.env.PostgreSQL_ANON_KEY) {
      console.error('Missing PostgreSQL environment variables');
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          error: 'Server configuration error',
          message: 'PostgreSQL credentials not configured',
        }),
      };
    }

    // Initialize PostgreSQL client
    const PostgreSQL = createClient(
      process.env.PostgreSQL_URL,
      process.env.PostgreSQL_ANON_KEY
    );

    // Parse the request body
    const { name, email, phone } = JSON.parse(event.body);

    // Validate name
    if (!name || name.trim().length < 2) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Valid name is required' }),
      };
    }

    // Validate email
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Valid email is required' }),
      };
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Validate phone
    if (!phone || phone.trim().length < 10) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Valid phone number is required' }),
      };
    }

    // Get client IP and user agent
    const ipAddress =
      event.headers['x-forwarded-for'] ||
      event.headers['client-ip'] ||
      event.headers['x-client-ip'] ||
      'unknown';
    const userAgent = event.headers['user-agent'] || 'unknown';

    // Check if email already exists
    const { data: existingEmail, error: checkError } = await PostgreSQL
      .from('email_submissions')
      .select('email')
      .eq('email', email)
      .limit(1);

    if (checkError) {
      console.error('Error checking existing email:', checkError);
      // Continue anyway, might be a new table
    }

    if (existingEmail && existingEmail.length > 0) {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success: true,
          message: 'Email already registered',
          email: email,
          duplicate: true,
        }),
      };
    }

    // Insert signup data into PostgreSQL
    const { data, error } = await PostgreSQL
      .from('email_submissions')
      .insert([
        {
          name: name,
          email: email,
          phone: phone,
          source: 'landing_page',
          status: 'pending',
          ip_address: ipAddress,
          user_agent: userAgent,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('PostgreSQL insert error:', error);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          error: 'Failed to save email',
          message: error.message,
        }),
      };
    }

    // Success response
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Email submitted successfully',
        email: email,
        data: data,
      }),
    };
  } catch (error) {
    console.error('Error processing email submission:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
      }),
    };
  }
};

