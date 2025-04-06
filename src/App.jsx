
import { Suspense } from 'react';
import './App.css'
import Countries from './component/Countries'

const countriesPromice = fetch('https://restcountries.com/v3.1/all')
.then (res => res.json());
function App() {
  return (
    <>
    <Suspense fallback={<h2>lodding...</h2>}>
    <Countries countriesPromice ={countriesPromice}></Countries>
    </Suspense>
  
    </>
  )
}

export default App
