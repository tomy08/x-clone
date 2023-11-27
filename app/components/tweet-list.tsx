import TweetCard from './tweet-card'
import type { Tweet } from '../types/tweets'

export default function TweetList({ tweets }: { tweets: Tweet[] }) {
  return tweets.map((tweet) => <TweetCard key={tweet.id} tweet={tweet} />)
}
