import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
  return (
    <div className='relative flex border-2 border-gray-200 rounded-full overflow-hidden py-3'>
      <label
        htmlFor='search-field'
        className='sr-only'
      >
        Search
      </label>
      <MagnifyingGlassIcon
        className='pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-gray-400'
        aria-hidden='true'
      />
      <input
        id='search-field'
        className='block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm outline-none'
        placeholder='Search...'
        type='search'
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
