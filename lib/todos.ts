import { supabase } from './supabaseClient';

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