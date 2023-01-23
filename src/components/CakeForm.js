import {useState} from 'react';


const CakeForm = ({addNewCake}) => {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCake = {
            cakeName: name,
            ingredients: ingredients.split(","),
            rating: rating
        }

        addNewCake(newCake);
    }


    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="name">Cake Name:</label>
            <input  type="text" 
                    id="name"
                    placeholder = "Name of Cake"
                    onChange={(event) => setName(event.target.value)}
                    value={name}/>
            

            <label htmlFor="ingredients">Ingredients:</label>
            <textarea   cols="30" rows="1" 
                        id="ingredients"
                        placeholder="Ingredients"
                        onChange={(event) => setIngredients(event.target.value)}
                        value={ingredients}> 
            </textarea>

            <label htmlFor="rating">Rating:</label>
            <input  type="number" id="rating" min={1} max={5}
                    placeholder="Rating"
                    onChange={(event) => setRating(event.target.value)}
                    value={rating}/>

            <input type="submit" value="OK"/>
        </form>
    )

}

export default CakeForm;