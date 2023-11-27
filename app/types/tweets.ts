import type { Database } from './database'

type PostType = Database['public']['Tables']['posts']['Row']
type ProfileType = Database['public']['Tables']['profiles']['Row']

export type Tweet = PostType & {
  profiles: ProfileType
}
