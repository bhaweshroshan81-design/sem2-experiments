import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Students from './components/Students'

function App() {

  return (
    <>
    <div className="container">

      <h1>Student Information</h1>
      <Students name = {'Rahul Sharma'} course ={'Computer Science'} marks= {85}/>
      <Students name = {'Divya Singh'} course ={'Electroics Engineering'} marks= {90}/>
      <Students name = {'Nilesh Yadav'} course ={'Matematics and Computing'} marks= {85}/>
    </div>
    </>
  )
}

export default App
