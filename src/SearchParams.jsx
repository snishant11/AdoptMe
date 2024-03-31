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

<<<<<<< HEAD
export default SearchParams
=======
export default SearchParams;
>>>>>>> b45b9716642ff7eba2d1b70534defd6c419c1eee
