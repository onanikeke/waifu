import { Inter } from 'next/font/google'
import '../styles/custom.css'
import '../styles/nprogress.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProgressBarWithSuspense from './components/ProgressBarWithSuspense'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AnimeMoeUs Waifu',
  description: 'Waifu Collections',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="7RdovPtxWZZpAgVmKtByo40jjFoFJEi2C3k0SdNpD7s" />
      <body className={inter.className}>
        {/* <ProgressBarWithSuspense /> */}
        {children}
        
      </body>
    </html>
  )
}
