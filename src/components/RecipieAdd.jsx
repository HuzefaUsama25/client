import { useState } from "react";
import { Link } from "react-router-dom";


const RecipieAdd = () => {

    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [directions, setDirections] = useState('')
    const [facts, setFacts] = useState('')
    const [chef, setChef] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const jsonRecipie = {
            "title": title,
            "ingredients": ingredients.split(","),
            "directions": directions,
            "facts": facts,
            "chef": chef
        }

        console.log(jsonRecipie)

        fetch("http://localhost:8082/api/recipies",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(jsonRecipie)
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })
    }


    return (
        <div className="add-page">

            <div className="flex-container-result">
                <Link to="/"><div className='go-back'> &#x2190;</div></Link>
                <h1 className='title-h1'>Add a Recipie</h1>
            </div>


            <form autoComplete="off" className="form-add-recipie" onSubmit={handleSubmit}>

                <div className="recipie-detail-flex-container">
                    <div className="recipie-detail-heading">Title</div>
                    <input
                        name='title'
                        required
                        type='text'
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="recipie-detail-flex-container">
                    <div className="recipie-detail-heading">Ingredients</div>
                    <input
                        name='ingredients'
                        required
                        type='text'
                        value={ingredients}
                        onChange={(e) => { setIngredients(e.target.value) }}
                    />
                </div>

                <div className="recipie-detail-flex-container">
                    <div className="recipie-detail-heading">Directions</div>
                    <input
                        name='directions'
                        required
                        type='text'
                        value={directions}
                        onChange={(e) => { setDirections(e.target.value) }}
                    />
                </div>

                <div className="recipie-detail-flex-container">
                    <div className="recipie-detail-heading">Facts</div>
                    <input
                        name='facts'
                        type='text'
                        value={facts}
                        onChange={(e) => { setFacts(e.target.value) }}
                    />
                </div>

                <div className="recipie-detail-flex-container">
                    <div className="recipie-detail-heading">Chef</div>
                    <input
                        name='chef'
                        type='text'
                        value={chef}
                        onChange={(e) => { setChef(e.target.value) }}
                    />
                </div>

                <input type="submit" value="Submit" />
            </form>



        </div>

    );
}

export default RecipieAdd;


/*
title: {
    type: String,
        required: true
},
ingredients: {
    type: Array,
        required: true
},
directions: {
    type: String,
        required: true
},
facts: {
    type: String
},
chef: {
    type: String
},
updated_date: {
    type: Date,
    default: Date.now
}





{
  "title": "Russian Salad",
  "ingredients": ["Potatoes 2", "Carrots 2", "Apple 1", "Walnut 50 gm", "Raisin 50 gm", "Mayonnaise ½ cup", "Black pepper 1/4 tsp", "Salt to taste", "Cream 4 tsp"],
  "directions": "Boil potatoes and carrots. Cut apple, potato and carrot into cubes. Combine boiled carrot, boiled potatoes, apple, walnut, raisin, black pepper, cream in a bowl and mix well. Serve the delicious Russian salad with grilled chicken and zeera pulao. To serve, garnish with lettuce leaf, sliced cucumber and long slices of carrot.",
  "facts": "very tasty",
  "chef": "zakir"
}

*/

