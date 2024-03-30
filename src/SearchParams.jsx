import { useState } from 'react'

const SearchParams = () => {
  const [location, updateLocation] = useState('')
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
      </form>
    </div>
  )
}

export default SearchParams
