import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { auth } from '@/auth'
import { clearChats } from '@/app/actions'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sidebar } from '@/components/sidebar'
import { SidebarList } from '@/components/sidebar-list'
import {
  IconGitHub,
  IconNextChat,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import { SidebarFooter } from '@/components/sidebar-footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ClearHistory } from '@/components/clear-history'
import { UserMenu } from '@/components/user-menu'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { ChatHistory } from './chat-history'
import { FaWandMagicSparkles, FaArrowRightToBracket } from 'react-icons/fa6'

async function UserOrLogin() {
  const session = await auth()
  return (
    <>
      {session?.user ? (
        <>
          <SidebarMobile>
            <ChatHistory userId={session.user.id} />
          </SidebarMobile>
          <SidebarToggle />
        </>
      ) : (
        <Link href="/" target="_blank" rel="nofollow">
          <div className="font-semibold text-primary flex gap-x-2 items-center">
            <FaWandMagicSparkles />
            Penn Courses LLM
          </div>
        </Link>
      )}
      <div className="flex items-center gap-4">
        <IconSeparator className="w-6 h-6 text-muted-foreground/50" />
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <Button variant="outline" asChild className="-ml-2">
            <Link
              className="flex items-center gap-x-2"
              href="/sign-in?callbackUrl=/"
            >
              Login <FaArrowRightToBracket />
            </Link>
          </Button>
        )}
      </div>
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          href="https://github.com/trangiabach/Penn-Courses-LLM"
          target="_blank"
          className={cn(buttonVariants())}
        >
          <IconGitHub className="mr-2" />
          <span className="hidden sm:block">Contribute on Github</span>
          <span className="sm:hidden">Contribute</span>
        </a>
      </div>
    </header>
  )
}
