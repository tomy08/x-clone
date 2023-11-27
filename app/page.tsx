import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import AuthButton from './components/auth-button-server'
import TweetList from './components/tweet-list'
import type { Database } from './types/database'
import type { Tweet } from './types/tweets'
import ComposeTweet from './components/compose-tweet'

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: tweets } = await supabase
    .from('posts')
    .select('*, profiles(*)')
    .order('created_at', { ascending: false })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen">
        <ComposeTweet userAvatarUrl={session.user.user_metadata.avatar_url} />
        <TweetList tweets={tweets as Tweet[]} />
      </section>
      <AuthButton />
    </main>
  )
}
