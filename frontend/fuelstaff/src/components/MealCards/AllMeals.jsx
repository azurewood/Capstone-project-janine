import React, { useState, useContext } from 'react';
import useSWR from 'swr';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../Cart/cartcontext';
import './cards.css';
import SearchBar from '../SearchBar'; //IMPORTING SEARCH BAR 


const AllMeals = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const { addToCart, cartItems } = useContext(CartContext);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR('http://localhost:8080/mealapi', fetcher);
  console.log(data, 'FETCHER')
  if (error) {
    return <h2>An error has occurred</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
     {/* Search bar */}
  <SearchBar setSearchQuery={setSearchQuery} />
      <div className="card-container">
        {/* Filter and map the data based on search query */}
        {data.data
          .filter((recipes) =>
            recipes.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((recipes) => (
            <Card key={recipes._id} className="meals-card">
              <Card.Img variant="top" className="meal-image" src={recipes.image} />
              <Card.Body>
                <Card.Title className="card-title">{recipes.title}</Card.Title>
                <Card.Text className="card-price">NZD ${recipes.price}</Card.Text>

                {/* Add to cart button */}
                <div className="button-container">
                  <button className="icon-button" onClick={() => addToCart(recipes)}>
                    <FontAwesomeIcon
                      style={{ color: 'black' }}
                      icon={faCirclePlus}
                      size="1g"
                    />
                  </button>
                </div>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
};

export default AllMeals;


