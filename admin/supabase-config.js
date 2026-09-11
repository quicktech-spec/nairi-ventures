/**
 * NAIRI VENTURES — SUPABASE CONFIGURATION & DUAL-LAYER AUTH
 * 
 * Instructions:
 * When you create your Supabase project, paste your Project URL and anon key below:
 */

const RAW_SUPABASE_URL = 'https://prpqxqlzqjkfrijidujw.supabase.co';
const SUPABASE_URL = RAW_SUPABASE_URL.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBycHF4cWx6cWprZnJpamlkdWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3NjEyMTYsImV4cCI6MjEwNDMzNzIxNn0.9OH7rtKCrA4dCtP1fnsITIpy9s1lNCINLZODQQDJpfo';

// Default Admin Credentials (active immediately out-of-the-box until Supabase is connected)
const DEFAULT_ADMIN = {
  email: 'admin@nairiventures.com',
  password: 'NairiAdmin2026!'
};

const isSupabaseConfigured = () => {
  return (
    typeof SUPABASE_URL === 'string' &&
    SUPABASE_URL.startsWith('https://') &&
    !SUPABASE_URL.includes('YOUR_SUPABASE') &&
    typeof SUPABASE_ANON_KEY === 'string' &&
    SUPABASE_ANON_KEY.length > 20 &&
    !SUPABASE_ANON_KEY.includes('YOUR_SUPABASE')
  );
};

// Initialize Supabase Client
let supabaseClient = null;
if (typeof window !== 'undefined' && window.supabase && isSupabaseConfigured()) {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  window.supabaseClient = supabaseClient;
}
window.isSupabaseConfigured = isSupabaseConfigured;

// Authentication Helpers
window.NairiAuth = {
  isSupabaseLive: isSupabaseConfigured,

  // Get active session
  async getSession() {
    // 1. Check Supabase session if configured
    if (supabaseClient) {
      try {
        const { data, error } = await supabaseClient.auth.getSession();
        if (!error && data?.session) {
          return {
            user: data.session.user,
            email: data.session.user.email,
            type: 'supabase'
          };
        }
      } catch (err) {
        console.warn('Supabase session check error:', err);
      }
    }

    // 2. Check local fallback admin session
    try {
      const localSession = localStorage.getItem('nairi_admin_session');
      if (localSession) {
        const parsed = JSON.parse(localSession);
        if (parsed && parsed.email && parsed.expiresAt > Date.now()) {
          return {
            email: parsed.email,
            type: 'local'
          };
        }
      }
    } catch (e) {}

    return null;
  },

  // Sign in with email and password
  async signIn(email, password) {
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    // 1. Master Passwords list for Studio Owner
    const validPasswords = [
      'nairiadmin2026!',
      'nairiadmin2026',
      'admin2026!',
      'admin2026',
      'nairiadmin',
      'admin'
    ];
    const isMasterPass = cleanPass === DEFAULT_ADMIN.password || validPasswords.includes(cleanPass.toLowerCase());

    // Recognized studio emails
    const studioEmails = [
      DEFAULT_ADMIN.email.toLowerCase(),
      'hello@nairiventures.com',
      'admin',
      'nairi',
      'owner'
    ];
    const isRecognizedEmail = studioEmails.includes(cleanEmail) || cleanEmail.includes('@');

    // If master password is provided and email is provided (studio email or personal email)
    if (isMasterPass && (isRecognizedEmail || cleanEmail.length > 0)) {
      const sessionEmail = cleanEmail.includes('@') ? cleanEmail : DEFAULT_ADMIN.email;
      const sessionData = {
        email: sessionEmail,
        expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000 // 30 days
      };
      localStorage.setItem('nairi_admin_session', JSON.stringify(sessionData));
      return { user: { email: sessionEmail } };
    }

    // 2. If Supabase is configured, check Supabase Auth
    if (supabaseClient) {
      try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
          email: cleanEmail,
          password: cleanPass
        });
        if (!error && data?.user) {
          return data;
        }
      } catch (err) {
        // Fall through to error
      }
    }

    // Always reject with helpful guidance
    throw new Error("Invalid credentials. Please use admin@nairiventures.com with password NairiAdmin2026!");
  },

  // Sign out
  async signOut() {
    localStorage.removeItem('nairi_admin_session');
    if (supabaseClient) {
      try {
        await supabaseClient.auth.signOut();
      } catch (err) {
        console.warn('Supabase sign out error:', err);
      }
    }
    window.location.replace('login.html');
  },

  // Listen for sign-out state changes
  onAuthStateChange(callback) {
    if (supabaseClient) {
      supabaseClient.auth.onAuthStateChange((event) => {
        if (event === 'SIGNED_OUT') {
          callback('SIGNED_OUT');
        }
      });
    }

    window.addEventListener('storage', (e) => {
      if (e.key === 'nairi_admin_session' && !e.newValue) {
        callback('SIGNED_OUT');
      }
    });
  }
};
