'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'
import { FaWandMagicSparkles } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'
import React from 'react'
import { IconSpinner } from './ui/icons'

const authenticatedAdvantages = [
  {
    title: 'Manage your chat history',
    description: 'Save, clear your chat threads with PCL.'
  },
  {
    title: 'Share your chats',
    description: 'Share your interactions with PCL via a public link'
  },
  {
    title: 'Customize behavior',
    description:
      'Upload files or share your preferences to make PCL customized to your needs.'
  }
]

export function SidebarAnonymousContent() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  return (
    <Card className="mx-2 border bg-zinc-50 shadow-none">
      <CardHeader>
        <CardTitle className="flex gap-1">
          Log in to enjoy{' '}
          <span className="text-primary flex gap-1">
            PCL
            <FaWandMagicSparkles />
          </span>{' '}
          fully!
        </CardTitle>
        <CardDescription>
          As an authenticated user, you can enjoy the fullest of PCL's features.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div
          className=" flex items-center justify-between space-x-4 rounded-md border p-4 cursor-pointer transition-colors hover:bg-zinc-200/40"
          onClick={() => {
            setIsLoading(true)
            signIn('google', { callbackUrl: `/` })
            setIsLoading(false)
          }}
        >
          {isLoading ? (
            <IconSpinner className="mr-2 animate-spin" />
          ) : (
            <FcGoogle size={20} />
          )}
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Log in now</p>
            <p className="text-sm text-muted-foreground">
              Log in with your Google account.
            </p>
          </div>
        </div>
        <div>
          {authenticatedAdvantages.map((advantage, index) => {
            return (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {advantage.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {advantage.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
