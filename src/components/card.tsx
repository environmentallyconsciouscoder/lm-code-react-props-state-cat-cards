import Data from "../data/data";
import { images } from "./catData";
import CatImage from "./cat_image";

const Card : React.FC<Data> = (props) =>
{

	const { name, species, favFoods, birthYear, index } = props;


    return (
		<div className='card'>
            <h3 className="card__text card__header">{name}</h3>
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {favFoods}</p>
            <p className="card__text">Birth Year: {birthYear}</p>
            {index !== undefined && index < images.length && (
				<CatImage
					image={images[index].image}
					altText={images[index].altText}
					licenceType={images[index].licenceType}
					licenceUrl={images[index].licenceUrl}
					attributionName={images[index].attributionName}
					attributionUrl={images[index].attributionUrl}
				/>
			)}
		</div>
	);
}

export default Card;