import { useState } from 'react'
import { Pantry } from '@/widgets/Pantry'
import {Tabs} from '@/shared/ui/Tabs'
import {Recipes} from '@/widgets/Recipes'

function App() {
  const [count, setCount] = useState(0)
  const [selectedTab, setSelectedTab] = useState('pantry')

  const tabs = [
    {
      label: 'Pantry',
      value: 'pantry'
    },
    {
      label: 'Recipes',
      value: 'recipes'
    }
  ]

  return (
    <>
    <div className="grid grid-rows-[auto,1fr] m-auto max-w-[1200px]">
     <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
     <div className="p-2">
     {
      selectedTab === 'pantry' && <Pantry/>
     }
     {
      selectedTab === 'recipes' && <Recipes/>
     }
     </div>

    </div>
     
    </>
  )
}

export default App
