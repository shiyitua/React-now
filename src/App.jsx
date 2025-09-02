import Header from './components/Header/Header'
import CoreConcepts from './components/CoreConcepts'
import Example from './components/Example'
import { useState } from 'react'

import { CORE_CONCEPTS, EXAMPLES } from './data'



function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Example></Example>
      </main>
    </>
  )
}

export default App