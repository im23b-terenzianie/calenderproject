// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mokxbauerhoeajajjqpb.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseKey) {
    throw new Error('SUPABASE_KEY environment variable is not set');
}

export const supabase = createClient(supabaseUrl, supabaseKey);


export async function addCalendarEntry(title: string, description: string, date: string, userId: string) {
    const { data, error } = await supabase
        .from('calendar_entries')
        .insert([{ title, description, date, user_id: userId }]);

    if (error) {
        throw error;
    }
    return data;
}

export async function getCalendarEntries(userId: string) {
    const { data, error } = await supabase
        .from('calendar_entries')
        .select('*')
        .eq('user_id', userId);

    if (error) {
        throw error;
    }
    return data;
}
export async function addTodo(title: string, userId: string) {
    const { data, error } = await supabase
        .from('todos')
        .insert([{ title, user_id: userId }]);

    if (error) {
        throw error;
    }
    return data;
}

export async function getTodos(userId: string) {
    const { data, error } = await supabase
        .from('todos')
        .select('*')
        .eq('user_id', userId);

    if (error) {
        throw error;
    }
    return data;
}
export async function getUserId() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
        console.error("Fehler beim Abrufen der Benutzer-ID:", error);
        return null;
    }
    return user?.id || null;
}