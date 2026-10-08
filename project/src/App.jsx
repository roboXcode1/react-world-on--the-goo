
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries'
import './components/countries/country.css'

const countriesPromies =fetch('https://openapi.programming-hero.com/api/all')
.then (res => res.json())

function App() {
  return (
    <>
      <div className='pp'>
        <h3 >recact project</h3>
       <Suspense fallback ={<p>nadir on the gooooo</p>}>
        <Countries  countriesPromies={countriesPromies}></Countries>
       </Suspense>
      </div>

    </>
  )
}

export default App
