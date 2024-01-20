import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'
import { FaWandMagicSparkles } from 'react-icons/fa6'

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
  return (
    <Card className="mx-2 border bg-background shadow-none">
      <CardHeader>
        <CardTitle>
          Log in to enjoy{' '}
          <span className="text-primary flex gap-1">
            PCL <FaWandMagicSparkles />
          </span>
          fully!
        </CardTitle>
        <CardDescription>
          As an authenticated user, you can enjoy the fullest of PCL's features.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
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
