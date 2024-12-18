import React from 'react'
import FooterLoggedIn from '@/components/FooterLoggedIn'
import PatientSidebar from '@/components/PatientSidebar'
import Header from '@/components/Header'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <div className="flex flex-grow">
        <PatientSidebar />
        
        <div className="flex flex-col flex-grow">
          <Header />

          <div className="flex-grow w-full bg-background">
            {children}
          </div>
        </div>

      </div>

      <FooterLoggedIn />
    </main>
  )
}

export default layout
