import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { path?: unknown }
    const path = typeof body.path === 'string' ? body.path : null

    if (path) {
      await supabaseAdmin.schema('my_dashboard').from('page_views').insert({ path })
    }
  } catch {
    // Tracking should never affect page rendering or navigation.
  }

  return new Response(null, { status: 204 })
}
