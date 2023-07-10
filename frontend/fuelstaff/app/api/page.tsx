'use client'
import useSWR from 'swr';

export default function Meals() {
    const fetcher = (url:string) => fetch(url).then((res) => res.json());
    const {data, error, isLoading } = useSWR('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?diet=vegetarian&includeIngredients="salad, egg"&number=30&offset=30', fetcher);

    if (error) {
        return <h2>An error has occurred</h2>;
      }
    
      if (isLoading) {
        return <h2>Loading...</h2>;
      }

    return (
        <>
        {data.map((recipes: any)=>{
            return <p key={recipes.id}>{recipes.title} </p>
        })}
        </>
    );
    }