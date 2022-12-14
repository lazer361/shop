import React from 'react'
import style from "./Search.module.scss";
import { SearchContext } from '../../App';

function Search() {
    const { searchValue, setSearchValue } = React.useContext(SearchContext);

    return(
        <div className={style.root}>
            <svg className='feather feather-search' id={style.search} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
            <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} className={style.input} placeholder='Поиск пиццы ...' type="text" />
            {
                searchValue && (
                    <svg onClick={() => setSearchValue('')} className={style.close} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                )
            }
        </div>
    );
}
export default Search;