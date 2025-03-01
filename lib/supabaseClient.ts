// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mokxbauerhoeajajjqpb.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseKey) {
    throw new Error('SUPABASE_KEY environment variable is not set');
}

export const supabase = createClient(supabaseUrl, supabaseKey);