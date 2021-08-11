import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { searchList } from "../../actions/taskActions";

export const SearchTask = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearchSubmit = (event) => {
        searchList(searchValue);
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSearchSubmit}>
            <div className='search__wrapper'>
                <FontAwesomeIcon className='btn__icon--left search-icon' icon={faSearch} />
                <input className='' type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search by task title' />
            </div>
        </form>
    );
}
