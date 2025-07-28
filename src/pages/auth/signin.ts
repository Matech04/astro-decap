export const prerender = false;
import type { APIRoute } from 'astro';
import { createSupabaseServerInstance } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request, cookies, headers, redirect }) => {
  const supabase = createSupabaseServerInstance({ headers, cookies });
  const { email, password } = await request.json();

  if (!email || !password) {
    return new Response(JSON.stringify({ error: 'Email and password are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ token: data.session.access_token, provider: 'email' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};