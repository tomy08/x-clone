import TweetCard from './tweet-card'
import type { Tweet } from '../types/tweets'

export default function TweetList({ tweets }: { tweets: Tweet[] }) {
  return (
    <ul>
      {tweets.map((tweet) => (
        <li key={tweet.id}>
          <TweetCard tweet={tweet} />
        </li>
      ))}
    </ul>
  )
}
