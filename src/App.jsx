import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from './Component/Top'
import Bottom from './Component/Bottom'

function App() {
  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];
  const [checked, setChecked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


 
  return (
    <div className='flex h-screen justify-center items-center'>

    <div className=' border-2 w-fit'>
   <Top setChecked={setChecked} setSearchQuery={setSearchQuery} checked={checked} searchQuery={searchQuery} />
   <Bottom products={PRODUCTS} checked={checked} searchQuery={searchQuery} />
    </div>
    </div>
  )
}

export default App
