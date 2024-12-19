/* eslint-disable camelcase */
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Header from './components/header'
import { ToastContainer } from 'react-toastify'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata = {
  title: 'Laboratorio 0 - CRUD',
  description: 'Desarrollado por Full-Serios'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Providers>
          {children}
        </Providers>
        <ToastContainer />
      </body>
    </html>
  )
}
