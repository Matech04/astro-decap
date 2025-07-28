export const prerender = false;
import type { APIRoute } from 'astro';
import { authUrl } from './_config';

export const GET: APIRoute = ({ redirect, url }) => {
  const provider = url.pathname.split('/').pop();
  if (provider === 'email') {
    return redirect('/auth/email');
  }
  return redirect(authUrl);
};