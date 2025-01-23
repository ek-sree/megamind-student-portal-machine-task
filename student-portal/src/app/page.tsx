import React from 'react'
import UsersList from './component/UsersList'
import Header from './page2/components/Header'
import Footer from './page2/components/Footer'

const page = () => {
  return (
    <div className="bg-gray-100">
    <Header />
    <main className="max-w-full">
    <UsersList/>
    </main>
    <Footer />
  </div>
  )
}

export default page