'use client'

import {
  createClientComponentClient,
  type Session,
} from '@supabase/auth-helpers-nextjs'
import { GithubIcon } from './icons/github-icon'
import { useRouter } from 'next/navigation'

export default function Button({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return session === null ? (
    <button
      onClick={handleLogin}
      type="button"
      className="text-white bg-[#24292F]  focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 mr-2 mb-2"
    >
      <GithubIcon />
      Sign in with Github
    </button>
  ) : (
    <button
      onClick={handleLogout}
      type="button"
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      Sign out
    </button>
  )
}
