import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>



      <div className="grid grid-cols-4 gap-4">

      

        <button>1</button>
        <div className='border-2 rounded-md'>2</div>
        <div>3</div>
        <div>4 </div>

        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4 </div>


        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4 </div>

        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4 </div>


        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4 </div>


        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4 </div>


      </div>
    </Layout>
  )
}

export default App
