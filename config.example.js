// =============================================
// config.js — Bu dosya .gitignore'da!
// Supabase credentials'ı buraya girin.
// Deployment için hosting platformunuzun
// environment variables özelliğini kullanın.
// =============================================

const SUPABASE_URL  = 'https://your-project-id.supabase.co';
const SUPABASE_ANON = 'your-anon-key-here';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
