import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anime World',
  description: 'Anime website to check latest and trending animes and get the best animes for you.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <Navbar /> */}
        {children}</body>
    </html>
  )
}
