'use client'

import { Message } from 'ai'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

import { cn } from '@/lib/utils'
import { CodeBlock } from '@/components/ui/codeblock'
import { MemoizedReactMarkdown } from '@/components/markdown'
import { IconOpenAI, IconUser } from '@/components/ui/icons'
import { ChatMessageActions } from '@/components/chat-message-actions'
import { FaWandMagicSparkles } from 'react-icons/fa6'
import { FaRegUserCircle } from 'react-icons/fa'
import { useChat } from 'ai/react/dist'
import { useEffect, useState } from 'react'
import { getChat } from '@/app/actions'
import { useParams, usePathname } from 'next/navigation'
import { auth } from '@/auth'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { GrResources } from 'react-icons/gr'
import Link from 'next/link'

export interface ChatMessageProps {
  message: Message
  isLoading: boolean
}

export interface ChatCitation {
  author?: string | null
  id?: string
  title: string
  url: string
}

export function ChatMessage({
  message,
  isLoading,
  ...props
}: ChatMessageProps) {
  const params = usePathname()
  const chatId = params.replace('/chat/', '')
  const [citations, setCitations] = useState<ChatCitation[]>([])

  useEffect(() => {
    if (!isLoading && citations.length === 0) {
      const fetchChat = async () => {
        const fetchedChat = await getChat(chatId, '')
        fetchedChat?.messages.map((fetchedMessage: any) => {
          if (fetchedMessage.content === message.content) {
            console.log(fetchedMessage)
            setCitations(fetchedMessage.citations || [])
          }
        })
      }
      fetchChat()
    }
  }, [isLoading, params, chatId])
  return (
    <div
      className={cn('group relative mb-4 flex items-start md:-ml-12')}
      {...props}
    >
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow',
          message.role === 'user'
            ? 'bg-background'
            : 'bg-primary text-primary-foreground'
        )}
      >
        {message.role === 'user' ? (
          <FaRegUserCircle />
        ) : (
          <div className="text-white">
            <FaWandMagicSparkles />
          </div>
        )}
      </div>
      <div className="flex-1 px-1 ml-4 space-y-2 overflow-hidden">
        <MemoizedReactMarkdown
          className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>
            },
            code({ node, inline, className, children, ...props }) {
              if (children.length) {
                if (children[0] == '▍') {
                  return (
                    <span className="mt-1 cursor-default animate-pulse">▍</span>
                  )
                }

                children[0] = (children[0] as string).replace('`▍`', '▍')
              }

              const match = /language-(\w+)/.exec(className || '')

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ''}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              )
            }
          }}
        >
          {message.content}
        </MemoizedReactMarkdown>
        <ChatMessageActions message={message} />
        <div className="pt-2" />
        {citations.length > 0 && (
          <>
            <div className="text-primary flex gap-x-2 items-center">
              <GrResources />
              Sources
            </div>
            <div className="flex flex-wrap flex-row gap-2">
              {citations.map(citation => (
                <Link href={citation.url} target="_blank" key={citation.url}>
                  <Card className="text-xs w-fit max-w-[250px] shadow-none border-gray hover:border-primary transition-colors">
                    <CardHeader className="p-3">
                      <CardTitle>{citation.title}</CardTitle>
                      <CardDescription>
                        {citation.url.substring(0, 30)}...
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
