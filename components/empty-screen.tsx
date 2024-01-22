'use client'

import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { FaWandMagicSparkles } from 'react-icons/fa6'

const exampleMessages = [
  {
    heading: '📸 Find some courses on photography + ML',
    message: `Find some courses on photography + ML"?`
  },
  {
    heading: '💻 What is CIS3500 about?',
    message: 'What is CIS3500 about?'
  },
  {
    heading: '🤔 Wonder if there are any half-semester classes?',
    message: 'Wonder if there are any half-semester classes?'
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <div className="flex gap-2 items-center mb-2">
          <FaWandMagicSparkles className="text-primary" />
          <h1 className="text-lg font-semibold">
            Welcome to{' '}
            <span className="text-primary">Penn Course LLM - PCL!</span>
          </h1>
        </div>
        <p className="mb-2 leading-normal text-muted-foreground text-sm">
          PCL is an open-source chatbot built over data from{' '}
          <ExternalLink href="https://courses.upenn.edu/">
            Penn Course Directory
          </ExternalLink>
          , use it to search courses efficient, plan your semester, ask about
          requirements or anything Penn Courses related. All powered by the
          power of LLMs.
        </p>
        <p className="leading-normal font-semibold text-sm">
          Here are some examples to get you started:
        </p>
        <div className="mt-4 flex flex-col md:flex-row items-center gap-3">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              className="h-auto text-[12px] rounded-3xl border-primary hover:bg-violet-200/25 text-center md:text-left"
              onClick={() => setInput(message.message)}
              variant="outline"
            >
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
