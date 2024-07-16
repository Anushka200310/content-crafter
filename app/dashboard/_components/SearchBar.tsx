import { Search } from 'lucide-react';

const SearchBar = ({onSearchInput}:any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white'>
        <h1 className='text-2xl font-bold'>Browse Our Template Catalog</h1>
        <p>What's on your creation list today?</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-3xl bg-slate-100 my-5 w-[40%]'>
                <Search className='text-primary' />
                <input type='text' placeholder='search...' onChange={(event)=>onSearchInput(event.target.value)} className='w-full text-black bg-transparent outline-none' />
            </div>
        </div>
    </div>
  )
}

export default SearchBar;