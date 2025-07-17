
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)
  const [fromCurrencyType, setFromCurrencyType] = useState("usd")
  const [toCurrencyType, setToCurrencyType] = useState("inr")


  return (
    <>
    <div 
    className="outer bg-[url('./resources/CC-bg.jpg')] h-screen w-full bg-cover flex justify-center items-center"
    >
      <div className="main-content rounded-md p-1 drop-shadow-2xl drop-shadow-black h-110 w-200 bg-white/40 border-white border text-white flex flex-col items-center justify-around">
        <div className="holders-paren h-[65%] w-180 flex flex-col justify-between items-center">
          <div className="one bg-white h-[45%] w-full rounded-2xl text-black flex items-center justify-between p-6">

            <div className="from-container h-full flex flex-col justify-between">
              <div className='text-gray-500'>
              From 
              </div>

              <input 
              type='numbers'  
              onChange={(e)=>setFrom(e.target.value)} 
              placeholder='0'
              />
                
            </div>

            <div className="fromCurrencyType-container  h-full flex flex-col justify-between items-end">
              <div className='text-gray-500'>
              Currency Type 
              </div>

              <div>
                <form action="">

                <select name="usd" id="" onChange={(e)=>{setFromCurrencyType(e.target.value);
                }} >
                  <option value="usd">usd</option>
                  <option value="euro">euro</option>
                </select>
                </form>
              </div>
                
            </div>
          </div>


          <button className="w-20 bg-black rounded-md"
          onClick={()=>{
            console.log(fromCurrencyType)
          }}
          >Swap</button>


          <div className="two bg-white h-[45%] w-full rounded-2xl text-black flex items-center justify-between p-6">

             <div className="to-container h-full flex flex-col justify-between">
              <div className='text-gray-500'>
              To 
              </div>

              <div>
              <input type="text" onChange={(e)=>setTo(e.target.value)}  placeholder='0'/>
              </div>
                
            </div>

             <div className="from-container h-full flex flex-col justify-between items-end">
              <div className='text-gray-500'>
              Currency Type 
              </div>

              <div>
              <form action="">

                <select name="usd" id="" onChange={(e)=>{setToCurrencyType(e.target.value)}}>
                  <option value="inr">inr</option>
                  <option value="euro">euro</option>
                </select>
                </form>
              </div>
                
            </div>
            
          </div>
        </div>
        <div className="enter bg-blue-600 h-[20%] w-180 rounded-2xl flex justify-center items-center active-animation text-xl ">
          Convert from {fromCurrencyType} to {toCurrencyType}
        </div>

        </div>
    </div>
    </>
  )
}

export default App
