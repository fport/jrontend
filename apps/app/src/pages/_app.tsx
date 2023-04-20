import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Cabin } from 'next/font/google'

const inter = Cabin({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    )
}
