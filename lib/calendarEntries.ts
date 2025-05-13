import { supabase } from './supabaseClient';

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