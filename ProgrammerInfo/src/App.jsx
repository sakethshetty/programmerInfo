import './App.css'
import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, json, Route, Routes } from 'react-router-dom'
import Info from './components/Info'

function App() {
  //coders saved data
  const [coders, setCoders] = useState(JSON.parse(localStorage.getItem("coders")) || [])

  //delete coder function
  function deleteCoder(name){
    setCoders( prevCoders => prevCoders.filter((coder, index) => coder.name != name))
  }

  //add coder function
  function addCoder(newCoder){

    if(coders.some(Element => Element.name == newCoder.name)){
      alert('Username Already Saved!')
      return
    }

    fetch(`https://codeforces.com/api/user.info?handles=${newCoder.name}`)
    .then( res => {
      return res.json();
    })
    .then(data => {
      if(data.status == 'OK'){
        console.log(data)
        setCoders( prevCoders => {
          newCoder = {
            ...newCoder,
            avatar: data.result[0].avatar
          }
          
          return [
          ...prevCoders,
          newCoder,
        ]})
      }else alert(`No user named ${newCoder.name} found`)
    })
    .catch(e => console.log("error" + e))

  }

  useEffect(() => {
    localStorage.setItem("coders", JSON.stringify(coders))
  }, [coders])
  

  // console.log(func)

  //JSX of the App, top level 
  return (
    <Router>
      <Routes>
        {
          coders.map((person, index) => {
            console.log(person.name)
            return <Route key={index} path={`/${person.name}`} element={<Info index={index} coders={coders}/>}></Route>
          })
        }
        <Route path='*' element={<Home coders={coders} delfunction={deleteCoder} addfunction={addCoder} />}></Route>
      </Routes>
    </Router>
  )
}

export default App
