import Cat from "../data/cat";
import { images } from "./catData";
import CatImage from "./cat_image";

const CatCard : React.FC<Cat> = (props) =>
{

	const { name, species, favFoods, birthYear, catIndex } = props;


    return (
		<div className='card'>
            <h3 className="card__text card__header">{name}</h3>
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {favFoods}</p>
            <p className="card__text">Birth Year: {birthYear}</p>
            {catIndex < images.length && (
				<CatImage
					image={images[catIndex].image}
					altText={images[catIndex].altText}
					licenceType={images[catIndex].licenceType}
					licenceUrl={images[catIndex].licenceUrl}
					attributionName={images[catIndex].attributionName}
					attributionUrl={images[catIndex].attributionUrl}
				/>
			)}
		</div>
	);
}

export default CatCard;