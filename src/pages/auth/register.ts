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

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ message: 'Registration successful. Please check your email to confirm.' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
};