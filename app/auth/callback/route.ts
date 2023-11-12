import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  try {
    const reqUrl = new URL(req.url)
    const code = reqUrl.searchParams.get('code')
    if (code !== null) {
      const supabase = createRouteHandlerClient({ cookies })
      await supabase.auth.exchangeCodeForSession(code)
    }
    return NextResponse.redirect(reqUrl.origin)
  } catch (e) {
    console.error(e)
    return NextResponse.redirect('/')
  }
}
