/**
 * PostgreSQL Service
 * Client-side service for interacting with PostgreSQL database
 */

// PostgreSQL client configuration
// These values should be set in environment variables or passed from the backend
export interface PostgreSQLConfig {
  url: string;
  anonKey: string;
}

// Initialize PostgreSQL client (will be set dynamically)
let postgresqlClient: any = null;
let postgresqlConfig: PostgreSQLConfig | null = null;

/**
 * Initialize PostgreSQL client
 * Call this once when the app loads
 */
export const initPostgreSQL = async (config: PostgreSQLConfig) => {
  try {
    // Dynamically import @supabase/supabase-js (PostgreSQL client library)
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
    
    postgresqlConfig = config;
    postgresqlClient = createClient(config.url, config.anonKey);
    
    return postgresqlClient;
  } catch (error) {
    console.error('Failed to initialize PostgreSQL:', error);
    throw error;
  }
};

/**
 * Get PostgreSQL client instance
 */
export const getPostgreSQLClient = () => {
  if (!postgresqlClient) {
    throw new Error('PostgreSQL client not initialized. Call initPostgreSQL() first.');
  }
  return postgresqlClient;
};

/**
 * Check if PostgreSQL is initialized
 */
export const isPostgreSQLInitialized = () => {
  return postgresqlClient !== null;
};

/**
 * Save email to PostgreSQL
 */
export const saveEmailToPostgreSQL = async (email: string, metadata?: {
  source?: string;
  ipAddress?: string;
  userAgent?: string;
}) => {
  if (!postgresqlClient) {
    throw new Error('PostgreSQL client not initialized');
  }

  try {
    const { data, error } = await postgresqlClient
      .from('email_submissions')
      .insert([
        {
          email: email,
          source: metadata?.source || 'landing_page',
          status: 'pending',
          ip_address: metadata?.ipAddress,
          user_agent: metadata?.userAgent,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error: any) {
    console.error('Error saving email to PostgreSQL:', error);
    throw error;
  }
};

/**
 * Check if email already exists
 */
export const checkEmailExists = async (email: string): Promise<boolean> => {
  if (!postgresqlClient) {
    throw new Error('PostgreSQL client not initialized');
  }

  try {
    const { data, error } = await postgresqlClient
      .from('email_submissions')
      .select('email')
      .eq('email', email)
      .limit(1);

    if (error) {
      throw error;
    }

    return data && data.length > 0;
  } catch (error: any) {
    console.error('Error checking email in PostgreSQL:', error);
    throw error;
  }
};

/**
 * Get email submissions (with optional filters)
 */
export const getEmailSubmissions = async (filters?: {
  status?: string;
  source?: string;
  limit?: number;
}) => {
  if (!postgresqlClient) {
    throw new Error('PostgreSQL client not initialized');
  }

  try {
    let query = postgresqlClient
      .from('email_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (filters?.status) {
      query = query.eq('status', filters.status);
    }

    if (filters?.source) {
      query = query.eq('source', filters.source);
    }

    if (filters?.limit) {
      query = query.limit(filters.limit);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error: any) {
    console.error('Error fetching emails from PostgreSQL:', error);
    throw error;
  }
};

