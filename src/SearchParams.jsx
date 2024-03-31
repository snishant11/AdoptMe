import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import useBreedList from './useBreedList'
import Results from './Results'
import fetchSearch from './fetchSearch'
const ANIMAL = ['dog', 'cat', 'rabbit', 'bird', 'reptile']

const SearchParams = () => {
  const [animal, updateAnimal] = useState('')
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
  })

  const results = useQuery(['search', requestParams], fetchSearch)
  const pets = results?.data?.pets ?? []
  const [breeds] = useBreedList(animal)

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target)
          const obj = {
            animal: formData.get('animal') ?? [],
            breed: formData.get('breed') ?? [],
            location: formData.get('location') ?? [],
          }
          setRequestParams(obj)
        }}
      >
        <label htmlFor="location">
          Location
          <input id="loaction" name="location" placeholder="Loaction" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              updateAnimal(e.target.value)
            }}
            onBlur={(e) => {
              updateAnimal(e.target.value)
            }}
          >
            <option />
            {ANIMAL.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select disabled={!breeds.length} id="breed" name="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams

import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabit", "raptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Varanasi, UP, India");
  const [animal, setAnimal] = useState(" ");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            type="text"
            value={location}
            placeholder="Location"
            id="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
