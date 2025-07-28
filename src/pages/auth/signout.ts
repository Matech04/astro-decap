export const prerender = false;
import type { APIRoute } from 'astro';
import { createSupabaseServerInstance } from '../../../lib/supabase';

export const GET: APIRoute = async ({ cookies, headers, redirect }) => {
  const supabase = createSupabaseServerInstance({ headers, cookies });
  await supabase.auth.signOut();
  return redirect('/auth/email');
};