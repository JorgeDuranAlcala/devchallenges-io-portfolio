import { useState } from 'react'
import './App.css'
import { Pagination, Project } from './components/molecules'
import { AboutMeSection, FeaturesSection } from './components/organisms'
//import {Profile, Hobby, Experience} from './components/molecules'
import MainLayout from './components/templates/main-layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <MainLayout>
        <AboutMeSection/>
        <FeaturesSection/>
      </MainLayout> */}
        <Pagination items={[
          {name: "george", rage: 'high'},
          {name: "Williams", rage: 'low'},
          {name: "Margot", rage: 'medium'},
          {name: "Margaret", rage: 'medium'},
          {name: "Mary", rage: 'medium'},
          {name: "john", rage: 'medium'},
        ]} >
          {({ items }) => {
            return (
              items.map((val, i) => (
                <Project></Project>
              ))
            )
          }}
        </Pagination>
    </div>
  )
}

export default App
