'use client'
import { clearChats, getChats } from '@/app/actions'
import { ClearHistory } from '@/components/clear-history'
import { SidebarItems } from '@/components/sidebar-items'
import { Chat } from '@/lib/types'
import { usePathname } from 'next/navigation'
import React, { cache, useEffect } from 'react'

interface SidebarListProps {
  userId?: string
  children?: React.ReactNode
}

export function SidebarList({ userId }: SidebarListProps) {
  const [chats, setChats] = React.useState<Chat[]>([])

  const pathname = usePathname()

  useEffect(() => {
    const fetchChats = async () => {
      const fetchedChats = await getChats()
      setChats(fetchedChats)
    }

    fetchChats()
  }, [pathname])

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-auto">
        {chats?.length ? (
          <div className="space-y-2 px-2">
            <SidebarItems chats={chats} />
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-sm text-muted-foreground">No chat history</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between p-4">
        <ClearHistory clearChats={clearChats} isEnabled={chats?.length > 0} />
      </div>
    </div>
  )
}
