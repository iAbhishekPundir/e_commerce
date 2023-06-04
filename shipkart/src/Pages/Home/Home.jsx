import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Categories } from '../../Components/Categories/Categories'
import { Footer } from '../../Components/Footer/Footer'

export const Home = () => {
  return (
    <>
        <Header/>
        <Categories />
        <Footer />
    </>
  )
}
