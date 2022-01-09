import { Link } from "react-router-dom";

const RecipiePreview = ({ title, chef, id }) => {

    return (
        <Link to={`/recipie/${id}`}>
            <div className="recipie-block">
                <h2 className="title">{title}</h2>
                <h3 className="chef">{chef ? chef : "unknown"}</h3>
            </div>
        </Link>
    );
}

export default RecipiePreview;
