import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import './index.css'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://www.course-api.com/react-tours-project'


function App() {
  //USESTATE
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true)

  //  //deleteFunction 
 const deleteItem = (id) => {
 const newTours = tours.filter(tour =>  tour.id !== id);
 setTours(newTours)
 }
  //function
  const fetchTours = async () => {
           try {
            const response = await fetch(url);
            const tours = await response.json();
            setTours(tours)
            setLoading(false);
           } catch (error) {
            console.log(error);
           }
  } 
 //useEffect
 useEffect(() => {
   fetchTours();
 }, []);
//first condition
 if (loading) {
  return <Loading/>
 } 
 //second condition
 if (tours.length === 0) {
  return <main>
    <div className="title">
      <h2>no tours left</h2>
      <button className='btn' onClick={() => fetchTours()}>Refresh</button>
    </div>
    
    </main>
 }
  return <main>
    <Tours tours={tours} deleteItem={deleteItem}/>
  </main>
 
 

}

export default App
