import React from 'react'

import Section2 from "./Components/Section2/Section2"
import Section1 from './components/Section1/Section1'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1763063462165-94125cccf210?q=80&w=1236&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Satisfied',
    },
    {
      img: 'https://images.unsplash.com/photo-1763257434725-1cd1327f2185?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Underserved',
    },
    {
      img: 'https://images.unsplash.com/photo-1763420309077-ef9b8724b291?q=80&w=707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Underserved',
    },
    {
      img: 'https://images.unsplash.com/photo-1763420309077-ef9b8724b291?q=80&w=707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Underserved',
    }
  ]

  return (
    <div>
      
      <Section1 users = {users} />
      <Section2></Section2>
    </div>
  )
}

export default App
