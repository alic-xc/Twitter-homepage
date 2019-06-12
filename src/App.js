import React from 'react';
import { Bird }  from './components/Bird'
import {Footer} from './components/Footer'
import {Sidebar} from './components/Sidebar'
import './App.css'
export default function App(){
  return (
    <main className = "container">
      <Bird />
      <Sidebar />
      <Footer />
    </main>
  )
}