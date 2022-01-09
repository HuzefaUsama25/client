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
            "ingredients": ingredients.split("\n"),
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
            .then(function (res) {
                setTitle('')
                setIngredients('')
                setDirections('')
                setFacts('')
                setChef('')
            })
            .catch(function (res) { console.log(res) })
    }


    return (
        <div className="add-page">

            <div className="flex-container-result">
                <Link to="/"><div className='go-back'> &#x2190;</div></Link>
                <h1 className='title-h1'>Add a Recipie</h1>
            </div>


            <form autoComplete="off" className="form-add-recipie" onSubmit={handleSubmit}>

                <div className="recipie-add-flex-container">
                    <div className="recipie-detail-heading">Title</div>
                    <textarea
                        className="recipie-textarea title"
                        name='title'
                        required
                        type='text'
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="recipie-add-flex-container">
                    <div className="recipie-detail-heading">Ingredients</div>
                    <textarea
                        className="recipie-textarea ingredients"
                        name='ingredients'
                        required
                        type='text'
                        value={ingredients}
                        onChange={(e) => { setIngredients(e.target.value) }}
                    />
                </div>

                <div className="recipie-add-flex-container">
                    <div className="recipie-detail-heading">Directions</div>
                    <textarea
                        className="recipie-textarea directions"
                        name='directions'
                        required
                        type='text'
                        value={directions}
                        onChange={(e) => { setDirections(e.target.value) }}
                    />
                </div>

                <div className="recipie-add-flex-container">
                    <div className="recipie-detail-heading">Facts</div>
                    <textarea
                        className="recipie-textarea facts"
                        name='facts'
                        type='text'
                        value={facts}
                        onChange={(e) => { setFacts(e.target.value) }}
                    />
                </div>

                <div className="recipie-add-flex-container">
                    <div className="recipie-detail-heading">Chef</div>
                    <textarea
                        className="recipie-textarea chef"
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

