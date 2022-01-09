import { useState } from "react";
import { Link } from "react-router-dom";


const RecipieSearch = () => {

    const [text, setText] = useState('')


    return (
        <div className="search-page">
            <button className="add-recipie"><Link to={`/add/`}>+</Link></button>
            <form autoComplete="off" className="search-recipies">
                <input
                    required
                    type='text'
                    value={text}
                    onChange={(e) => { setText(e.target.value) }}
                />
                <button><Link to={`/search/${text}`}>Search</Link></button>
            </form>
        </div>
    )
}

export default RecipieSearch;