import { useState } from 'react'
import data from './data'
import List from './List'
import "./style.css"



function App() {
  const [people, setPeople] = useState(data)

  return (
    <>
    
      <div className='card container' style={{width:"27rem", marginTop:"10rem"}}>
        <h3 style={{marginTop:"1rem"}}> {people.length} Birthday Today!</h3>
        <div className="card-body">
          <List people = {people} />
          <p className="card-text">Welcome, have fun!</p>
          <button
            type="button" 
            className="btn btn-success"
            onClick={() => setPeople([])}>
              Clear All
          </button>
        </div>
      </div>

    </>
  )
}

export default App
