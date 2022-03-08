import { useState } from 'react'
import './App.css'
import { AboutMeSection, FeaturesSection } from './components/organisms'
//import {Profile, Hobby, Experience} from './components/molecules'
import MainLayout from './components/templates/main-layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainLayout>
        <AboutMeSection/>
        <FeaturesSection/>
      </MainLayout>
    </div>
  )
}

export default App
