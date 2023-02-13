import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Calculadora } from './Components/Calculadora'

function App() {
  const [input, setInput] = useState('')

  const Click = (value) =>{
    setInput(input+ value)
  }

  const ManejarIGual = () =>{
    setInput(eval(input).toString())
  }

  const ManejarBorrar = () =>{
      setInput('')
  }

  return (
    <div className="App">
      <div className='Calculator'>
        <input type="text" value={input} readOnly className='display' />
      <Calculadora Click={Click}
                  ManejarIGual={ManejarIGual}
                  ManejarBorrar={ManejarBorrar}/>
      </div>
    </div>
  )
}

export default App
