import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import RecipieAdd from "./RecipieAdd";

const RecipieDetail = () => {
    const { id } = useParams()

    const [details, setDetails] = useState({})
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        console.log("use effect ran")
        fetch(`http://localhost:8082/api/recipies/id/${id}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setDetails(data)
                setIsPending(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])



    const handleDelete = () => {
        fetch(`http://localhost:8082/api/recipies/id/${id}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
            })
    }

    const handleUpdate = () => {
        fetch("http://localhost:8082/api/recipies",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "UPDATE",
                body: JSON.stringify(details)
            })
    }


    return (
        <>
            {isPending && <LoadingPage />}
            {!isPending &&
                <div className='details-page'>

                    <div className="flex-container-result">
                        <Link to="/"><div className='go-back'> &#x2190;</div></Link>
                        <h1 className='title-h1'>{details.title}</h1>
                        <Link to="/"><button onClick={handleDelete}>D</button></Link>
                        <Link to={`/recipie/${id}`}><button onClick={handleUpdate}>U</button></Link>
                    </div>


                    <div className="recipie-detail-flex-container">
                        <div className="recipie-detail-heading">Ingredients</div>
                        <div className="recipie-detail-ingredient-list">{details.ingredients && details.ingredients.map(
                            (ingredient) => {
                                return <li className="recipie-detail-ingredient-item">{ingredient}</li>
                            }
                        )}</div>
                    </div>


                    <div className="recipie-detail-flex-container">
                        <div className="recipie-detail-heading">Directions</div>
                        <div className="recipie-detail-direction-list">{details.directions && details.directions.split(".").map(
                            (direction) => {
                                return <div className="recipie-detail-direction-item">{direction}</div>
                            }
                        )}</div>
                    </div >



                    <div className="recipie-detail-flex-container">
                        <div className="recipie-detail-heading">Facts</div>
                        <div className="recipie-detail-fact">{details.facts ? details.facts : "Not Available"}</div>
                    </div>


                    <div className="recipie-detail-flex-container">
                        <div className="recipie-detail-heading">Chef</div>
                        <div className="recipie-detail-chef">{details.chef ? details.chef : "Not Available"}</div>
                    </div>


                    <div className="recipie-detail-flex-container">
                        <div className="recipie-detail-heading">Upload Time</div>
                        <div className="recipie-detail-date">{details.updated_date}</div>
                    </div>

                </div >
            }
        </>

    );
}

export default RecipieDetail;