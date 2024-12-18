import React from 'react'
import FooterLoggedIn from '@/components/FooterLoggedIn'
import Header from '@/components/Header'
import AssistantSidebar from '@/components/AssistantSidebar'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <div className="flex flex-grow">
        <AssistantSidebar />
        
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
