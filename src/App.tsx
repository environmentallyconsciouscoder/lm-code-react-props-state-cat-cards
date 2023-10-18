

import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
// import CatCard from './components/cat_card'

import { useState } from 'react'
import Cat from './data/cat';
import { catData } from './components/catData';
import dogsData from './data/dog-data';
// import DogCard from './components/dog_card';
import Dog from './data/dog';
import Card from './components/card';


function App(): JSX.Element {

	// JavaScript/TypeScript code can be inserted here!
	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	const [ dogs, setDogs ] = useState<Array<Dog>>(dogsData);
	const [ nameValue, setNameValue ] = useState<string>('');
	const [ speciesValue, setSpeciesValue ] = useState<string>('');
	const [ favFoodsValue, setFavFoodsValue ] = useState<string>('');
	const [ birthYearValue, setBirthYearValue ] = useState<number>();


	 const catCount = cats.length;
	 const dogCount = dogs.length;

	console.log("nameValue", nameValue)
	console.log("speciesValue", speciesValue)
	console.log("favFoodsValue", favFoodsValue)
	console.log("birthYearValue", birthYearValue)

	console.log("Our pretties 😻: ", cats)

	const addCat = (event: any) => {
		event.preventDefault();

		if (birthYearValue) {
			const newCat: Cat = {
				name: nameValue,
				species: speciesValue,
				favFoods: [favFoodsValue],
				birthYear: birthYearValue,
				catIndex: cats.length
			}

			setCats([...cats, newCat])
		}


	}

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

				{/* {dogs.map((dog, index) =>
					<Card
						key={index}
						name={dog.name}
						species={dog.species}
						favFoods={dog.favFoods}
						birthYear={dog.birthYear}
					/>
					)} */}
				</div>
				<form>
					<label>name</label>
					<input value={nameValue} onChange={(event) => { setNameValue(event.target.value)}}/>
					<label>species</label>
					<input value={speciesValue} onChange={(event) => { setSpeciesValue(event.target.value)}}/>
					<label>favFoods</label>
					<input value={favFoodsValue} onChange={(event) => { setFavFoodsValue(event.target.value)}}/>
					<label>birthYear</label>
					<input value={birthYearValue} type="number" onChange={(event) => { setBirthYearValue(parseInt(event.target.value))}}/>
					<button onClick={(event) => {addCat(event)}}>Add cat</button>
				</form>
			</main>
			<Footer />
		</>
	);
}

export default App;
