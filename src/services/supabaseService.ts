/**
 * Supabase Service
 * Client-side service for interacting with Supabase database
 */

// Supabase client configuration
// These values should be set in environment variables or passed from the backend
export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

// Initialize Supabase client (will be set dynamically)
let supabaseClient: any = null;
let supabaseConfig: SupabaseConfig | null = null;

/**
 * Initialize Supabase client
 * Call this once when the app loads
 */
export const initSupabase = async (config: SupabaseConfig) => {
  try {
    // Dynamically import @supabase/supabase-js
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
    
    supabaseConfig = config;
    supabaseClient = createClient(config.url, config.anonKey);
    
    return supabaseClient;
  } catch (error) {
    console.error('Failed to initialize Supabase:', error);
    throw error;
  }
};

/**
 * Get Supabase client instance
 */
export const getSupabaseClient = () => {
  if (!supabaseClient) {
    throw new Error('Supabase client not initialized. Call initSupabase() first.');
  }
  return supabaseClient;
};

/**
 * Check if Supabase is initialized
 */
export const isSupabaseInitialized = () => {
  return supabaseClient !== null;
};

/**
 * Save email to Supabase
 */
export const saveEmailToSupabase = async (email: string, metadata?: {
  source?: string;
  ipAddress?: string;
  userAgent?: string;
}) => {
  if (!supabaseClient) {
    throw new Error('Supabase client not initialized');
  }

  try {
    const { data, error } = await supabaseClient
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
    console.error('Error saving email to Supabase:', error);
    throw error;
  }
};

/**
 * Check if email already exists
 */
export const checkEmailExists = async (email: string): Promise<boolean> => {
  if (!supabaseClient) {
    throw new Error('Supabase client not initialized');
  }

  try {
    const { data, error } = await supabaseClient
      .from('email_submissions')
      .select('email')
      .eq('email', email)
      .limit(1);

    if (error) {
      throw error;
    }

    return data && data.length > 0;
  } catch (error: any) {
    console.error('Error checking email in Supabase:', error);
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
  if (!supabaseClient) {
    throw new Error('Supabase client not initialized');
  }

  try {
    let query = supabaseClient
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
    console.error('Error fetching emails from Supabase:', error);
    throw error;
  }
};

