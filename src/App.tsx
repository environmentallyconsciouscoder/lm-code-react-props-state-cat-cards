

import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import CatCard from './components/cat_card'

import { useState } from 'react'
import Cat from './data/cat';
import { catData } from './components/catData';
import dogsData from './data/dog-data';
import DogCard from './components/dog_card';
import Dog from './data/dog';
import Card from './components/card';


function App(): JSX.Element {

	// JavaScript/TypeScript code can be inserted here!
	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	const [ dogs, setDogs ] = useState<Array<Dog>>(dogsData);


	 const catCount = cats.length;
	 const dogCount = dogs.length;


	 console.log("Our pretties 😻: ", cats)

	return (
		<>
			<Navbar />
			<Header catCount={catCount} dogCount={dogCount} />

			<main>
				<div className='cards__wrapper'>
				{cats.map((cat, index) =>
					<Card
						key={index}
						name={cat.name}
						species={cat.species}
						favFoods={cat.favFoods}
						birthYear={cat.birthYear}
						index={cat.catIndex}
						id={cat.id}
					/>
					)}

				{dogs.map((dog, index) =>
					<Card
						key={index}
						name={dog.name}
						species={dog.species}
						favFoods={dog.favFoods}
						birthYear={dog.birthYear}
					/>
					)}
				</div>
				{/* <div className='cards__wrapper'>
					{cats.map((cat, index) => <CatCard
						key={index}
						name={cat.name}
						species={cat.species}
						favFoods={cat.favFoods}
						birthYear={cat.birthYear}
						catIndex={cat.catIndex}
						id={cat.id}
					/>
					)}
				</div>
				<div className='cards__wrapper'>
					{dogs.map((dog, index) => <DogCard
						key={index}
						name={dog.name}
						species={dog.species}
						favFoods={dog.favFoods}
						birthYear={dog.birthYear}
					/>
					)}
				</div> */}
			</main>

			<Footer />
		</>
	);
}

export default App;
