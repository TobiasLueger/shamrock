import './globals.css'
import { Inter } from 'next/font/google'
import { EXAMPLE_PATH, CMS_NAME } from '@/lib/constants'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
export const metadata = {
  title: `Shamrock Irish Pub Rheinbach`,
  description: `Unsere Shamrock Webseite. Hier finden sie alle Information um unser schönes Irisch Pub in Rheinbach.`,
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body>
        <section className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  )
}
