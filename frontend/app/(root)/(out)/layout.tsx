import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-grow flex">{children}</div> {/* Added 'flex flex-col' */}
        <Footer />
    </main>
  )
}

export default layout