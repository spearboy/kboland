import React from 'react'

const Search = () => {
  return (
    <div id='search'>
      <div className='search__inner'>
        <label htmlFor=''>
          <span className='ir'>검색</span>
        </label>
        <input type="text" 
          id='searchInput'
          placeholder='검색어를 입력해주세요'
          autoComplete='off'
          className='search__input'
        />
      </div>
    </div>
  )
}

export default Search