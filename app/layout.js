
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'], // Sesuaikan subset jika perlu
  weight: ['400', '500', '600', '700', '800'], // Kamu bisa memilih bobot font yang ingin digunakan
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
