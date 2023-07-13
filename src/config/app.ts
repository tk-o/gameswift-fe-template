import { LinkProps } from 'next/link'

export const InternalLink: Record<string, LinkProps['href']> = {
  home: '/'
}
export const ExternalLink = {
  twitter: 'https://twitter.com/GameSwift_io',
  telegram: 'https://t.me/gameswift_io',
  discord: 'https://discord.com/invite/gameswift',
  landingPage: 'https://gameswift.io',
  apply: 'https://gameswift.io/contact-us/apply',
  careers: 'https://gameswift.io/careers',
  // TODO update whitepaper link
  whitepaper: '',
  privacyPolicy:
    'https://cdn.gameswift.io/gameswift/documents/gameswift-platform/GameSwift%20-%20Privacy%20Policy.pdf',
  termsOfUse:
    'cdn.gameswift.io/gameswift/documents/gameswift-platform/GameSwift%20Platform%20-%20Terms%20of%20Use.pdf'
}

export const AppName = 'GameSwift'
