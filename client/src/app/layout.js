import { Sora } from 'next/font/google';
import './globals.css';
import "swiper/css";
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "EX - Buy & Sell Companies",
  description: "The #1 platform for buying & selling companies",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sora.variable} suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  )
}
