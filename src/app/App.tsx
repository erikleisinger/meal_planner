import { useState } from 'react'
import { Pantry } from '@/widgets/Pantry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pantry/>
    </>
  )
}

export default App
