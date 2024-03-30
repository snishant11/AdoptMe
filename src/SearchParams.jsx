import { useState } from 'react'
const ANIMAL = ['Dog', 'Cat', 'Rabbit', 'Bird', 'Reptile']
const SearchParams = () => {
  const [location, updateLocation] = useState('')
  const [animal, updateAnimal] = useState('')
  const [breed, updateBreed] = useState('')
  const breeds = []
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="loaction"
            value={location}
            placeholder="Loaction"
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              updateAnimal(e.target.value)
              updateBreed('')
            }}
            onBlur={(e) => {
              updateAnimal(e.target.value)
              updateBreed('')
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
          <select
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  )
}

export default SearchParams
