//testing: fetching data from the backend (ie. data stored in the MongoDB database) to display on the frontend 
//npm install swr
'use client'
import useSWR from 'swr' 
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './cards.css';
//Install font Awesome dependencies npm install @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons 
//Create a layout.js file in the app folder to import the Font Awesome core styles and config# prior to using the icons 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";

export default function Meals() {
    
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR('http://localhost:8080/mealapi', fetcher) //URL from postman that works - displays data in Postman, in Mongodb and shows up on the frontend.

    const handleButtonClick = (event) => {
      // Handle button click event here
      console.log("Button clicked!");
    };
if (error) {
    return <h2>An error has occurred</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  
  //in postman, the data is called 'data'. 
  return (
    <> 
  <div className = "card-container">
    {data.data.map((recipes) => (
        <Card key={recipes.id} className = "meals-card" >
              <Card.Img variant = "top" className="meal-image" src={recipes.image} />
          <Card.Body>
              <Card.Title className = "card-title">{recipes.title}</Card.Title>
              <Card.Text className = "card-price">NZD ${recipes.price}</Card.Text>
            {/*add to cart button*/}
            <div className="button-container">
             <button className="icon-button" onClick={handleButtonClick}>
                <FontAwesomeIcon
                    style={{color:'black'}}
                    icon={faCirclePlus}
                    SIZE="1g"
                  />
              </button>
            </div>
          </Card.Body>
       </Card>
        ))}
      </div>
    </>
  );
}