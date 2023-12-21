import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Header} from "@/components/header/Header";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Поиск контрагентов',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <Header/>
        <main className="pt-8 px-3">
            {children}
        </main>
        </body>
        </html>
    )
}
