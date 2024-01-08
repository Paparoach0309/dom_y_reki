import './globals.css'
import type {Metadata} from 'next'
import {Header} from "@/app/components/header/Header";
import ThemeRegistry from "@/app/ThemeRegistry";
import Footer from "@/app/components/footer/Footer";

export const metadata: Metadata = {
    title: 'Дом у реки',
    description: 'Агроусадьба на реке Лань. Минская область, Клецкий район. Усадьбы Клецкого района. Река Лань',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">

        <body>
            <ThemeRegistry options={{key: 'mui'}}>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </ThemeRegistry>
        </body>
        </html>
    )
}
