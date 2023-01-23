import {useState} from 'react';


const CakeForm = ({addNewCake}) => {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCake = {
            name: name,
            ingredients: ingredients.split(","),
            rating: rating
        }

        addNewCake(newCake);
    }


    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="name">Cake Name:</label>
            <input type="text" 
            id="name"
            placeholder = "name of cake"
            onChange={(event) => setName(event.target.value)}
            value={username}/>
            

            <label htmlFor="ingredients">Ingredients:</label>
            <textarea cols="30" rows="1" id="ingredients"></textarea>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" min={1} max={5}/>
            <input type="submit"/>
        </form>
    )

}

export default CakeForm;