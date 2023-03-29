import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Meals from './components/Meals/Meals'

function App() {
  const [search, setSearch] = useState('a')
  const handleSearch = () => {
    const inputField = document.getElementById('input-search')
    const value = inputField.value
    setSearch(value)
  }
  return(
    <div className="App">
      <Header></Header>
      <Meals search={search} handleSearch={handleSearch}></Meals>
    </div>
  )
}

export default App
