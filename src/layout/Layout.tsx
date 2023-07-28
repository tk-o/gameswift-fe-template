import { Footer, Header } from './components'

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="relative flex h-[100dvh] max-w-full flex-col items-center overflow-x-hidden bg-gradient-to-l from-background to-[#13151a] font-secondary font-normal text-white">
    <Header />
    <main className="layout-container z-0 flex-1">{children}</main>
    <Footer />
  </div>
)
