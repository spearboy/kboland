import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchKeyword.trim()) { // 검색 키워드가 공백이 아닌지 확인
            navigate(`/search/${searchKeyword.trim()}`);
            setSearchKeyword('');
        }
    };

    return (
        <div id='search'>
            <div className="search__inner">
                <label htmlFor="searchInput">
                    <span className='ir'>검색</span>
                </label>
                <input
                    type="search"
                    id='searchInput'
                    placeholder='검색어를 입력해주세요!'
                    autoComplete='off'
                    className='search__input'
                    value={searchKeyword}
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                {/* <button onClick={handleSearch} className='search__button'>검색</button> 검색 버튼 추가 */}
            </div>
        </div>
    );
};

export default Search;
