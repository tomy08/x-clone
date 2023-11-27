'use client'

import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from '@nextui-org/react'
import { IconMessageCircle2, IconHeart, IconRepeat } from '@tabler/icons-react'

import { formatDistanceToNow, format } from 'date-fns'

import type { Tweet } from '../types/tweets'

export default function App({ tweet }: { tweet: Tweet }) {
  const { content, profiles, created_at: createdAt } = tweet

  const date = new Date(createdAt)
  const currentDate = new Date()

  let formattedDate

  if (currentDate.getFullYear() === date.getFullYear()) {
    if (
      currentDate.getDate() === date.getDate() &&
      currentDate.getMonth() === date.getMonth()
    ) {
      // Tweet de hoy, mostrar tiempo transcurrido
      formattedDate = formatDistanceToNow(date, { addSuffix: true })
    } else {
      // Mismo año, mostrar abreviatura del mes con el día
      formattedDate = format(date, 'MMM d')
    }
  } else {
    // Año anterior, mostrar fecha completa
    formattedDate = format(date, 'd LLL yyyy')
  }

  const [isFollowed, setIsFollowed] = useState(false)

  return (
    <Card className="w-full bg-transparent shadow-none hover:bg-slate-900 border-b border-white/20 rounded-none cursor-pointer">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={profiles.avatar_url}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {profiles.name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400 gap-1">
              @{profiles.user_name}
            </h5>
          </div>
          <span className="text-small leading-none text-default-400">
            {formattedDate}
          </span>
        </div>
        <Button
          className={
            isFollowed
              ? 'bg-transparent text-foreground border-default-200'
              : ''
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? 'bordered' : 'solid'}
          onPress={() => {
            setIsFollowed(!isFollowed)
          }}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white/80">
        <p>{content}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle2 className="w-4 h-4" />
        </button>
        <button>
          <IconHeart className="w-4 h-4" />
        </button>
        <button>
          <IconRepeat className="w-4 h-4" />
        </button>
      </CardFooter>
    </Card>
  )
}
