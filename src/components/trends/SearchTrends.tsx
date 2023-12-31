import { FormEvent } from 'react'

interface Iprops {
   search: string | undefined
   handleSearch: (value: string) => void
   handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const SearchTrends = ({ search, handleSearch, handleSubmit }: Iprops) => {
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div className="input-group px-md-0">
               <input
                  type="text"
                  className="form-control"
                  placeholder="Search tweets by hashtag"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
               />
               <button
                  className="btn rounded-end input-group-text border border-dark bg-dark text-white"
                  id="basic-addon2"
                  type="submit">
                  <i className="fa-solid fa-magnifying-glass fs-15"></i>
               </button>
            </div>
         </form>
      </div>
   )
}

export default SearchTrends
