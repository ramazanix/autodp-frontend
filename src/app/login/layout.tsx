import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'AutoDP Login',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
