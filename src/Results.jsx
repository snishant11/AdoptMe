import Pet from './Pet'
const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length > 0 ? (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      ) : (
        <p>pets not found</p>
      )}
    </div>
  )
}

export default Results
