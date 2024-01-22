import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Built with ❤️ by{' '}
      <ExternalLink href="https://github.com/trangiabach">Bach</ExternalLink>{' '}
      with <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>,{' '}
      <ExternalLink href="https://cohere.com/">Cohere AI</ExternalLink> and{' '}
      <ExternalLink href="https://vercel.com/storage/kv">
        Vercel KV
      </ExternalLink>
      .
    </p>
  )
}
