import { GoLinkExternal } from 'react-icons/go'

export function ExternalLink({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-flex flex-1 justify-center gap-1 leading-4 underline transition-colors hover:text-primary"
    >
      <span>{children}</span>
      <GoLinkExternal size={11} />
    </a>
  )
}
