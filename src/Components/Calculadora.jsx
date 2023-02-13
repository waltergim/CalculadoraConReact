import React from 'react'

export const Calculadora = ({Click, ManejarBorrar, ManejarIGual}) => {
  return (
    <div className='Calculadora'>
        <button className='Clave' onClick={()=>Click('7')}>7</button>
        <button className='Clave' onClick={()=>Click('8')}>8</button>
        <button className='Clave' onClick={()=>Click('9')}>9</button>
        <button className='Operador' onClick={()=>Click('/')}>/</button>
        <br/>  
        <button className='Clave' onClick={()=>Click('4')}>4</button>
        <button className='Clave' onClick={()=>Click('5')}>5</button>
        <button className='Clave' onClick={()=>Click('6')}>6</button>
        <button className='Operador' onClick={()=>Click('*')}>×</button>
        <br/>
        <button className='Clave' onClick={()=>Click('1')}>1</button>
        <button className='Clave' onClick={()=>Click('2')}>2</button>
        <button className='Clave' onClick={()=>Click('3')}>3</button>
        <button className='Operador' onClick={()=>Click('-')}>-</button>
        <br/>
        <button className='Clave botton-left' onClick={()=>Click('0')}>0</button>
        <button className='ClaveFull' onClick={ManejarIGual}>=</button>
        <button className='ClaveFull' onClick={ManejarBorrar}>C</button>
        <button className='Operador' onClick={()=>Click('+')}>+</button>
        <br/>
    </div>
  )
}
