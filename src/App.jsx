/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react'
import './App.css'

function App() {

  const [red,
    setRed] = useState(false);
  function handelRed() {}
  const [yellow,
    setYellow] = useState(false);
  function handelyellow() {
    setYellow(!yellow)
  }
  const [green,
    setGreen] = useState(false);
  function handelgreen() {
    setGreen(!green)
  }
  function test1() {
    setRed(true)
    setTimeout(() => {
      setRed(false)
      setYellow(true)
    }, 7000);
    setTimeout(()=> {setYellow(false)
      setGreen(true)
    },10000)
    setTimeout(()=>{
      setGreen(false)
      setYellow(true)
    },17000)
    setTimeout(()=> {
      setYellow(false)
      setRed(true)
      test1();
    },20000)
  }
  useEffect(() => {
    test1();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className='buttons'>
        {/* <button className='red' onClick={test1}>Red</button> */}
        {/* <button className='yellow' onClick={handelyellow}>Yellow</button>
        <button className='green' onClick={handelgreen}>Green</button> */}
      </div>
      <div className='mile'>
        <div className="triangle"></div>
        <div className="trianglee"></div>
        <div className="triangleee"></div>
        <div className='back-div'>
          <div className='base'>
            <div className='squre'>
              {red === true
                ? <div className='circle12'></div>
                : <div className='circle1'></div>}
            </div>
            <div className='squre'>
              {yellow === true
                ? <div className='circle21'></div>
                : <div className='circle2'></div>}
            </div>
            <div className='squre'>
              {green === true
                ? <div className='circle32'></div>
                : <div className='circle3'></div>}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
