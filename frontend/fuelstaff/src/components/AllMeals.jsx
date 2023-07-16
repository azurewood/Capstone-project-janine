//testing: fetching data from the backend (ie. data stored in the MongoDB database) to display on the frontend 
//npm install swr
'use client'
import useSWR from 'swr' 
import React from 'react'

export default function Meals() {
    
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR('http://localhost:8080/mealapi', fetcher) //URL from postman that works - displays data in Postman, in Mongodb and shows up on the frontend.


if (error) {
    return <h2>An error has occurred</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  //in postman, the data is called 'data'. 
  return (
    <> 
    {data.data.map((recipes) => (
        <div key={recipes.id}>
            <h3>{recipes.title}</h3>
            <h4>NZD ${recipes.price}</h4>
            <img src={recipes.image} alt={recipes.title} />
        </div>
        ))}
      
    </>
  );
}