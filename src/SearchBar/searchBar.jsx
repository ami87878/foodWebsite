
import { useState } from 'react';
import {BsSearch} from 'react-icons/bs'

const SearchBar = ({searchItems}) => {

    const[value,setValue]=useState('');
    const onSubmit=e=>{
        e.preventDefault();
        searchItems(value);
    }
  return (
    <form onSubmit={onSubmit} action="" className="search flex-fill d-flex align-items-center">

        <div className="input-group">
            <input onChange={e=>setValue(e.target.value)}    type="text" value={value} className="form-control rounded-end pe-5 border-success"  placeholder="جستجوی فست فود "/>
            <BsSearch className='position-absolute top-50 translate-middle-y text-muted me-3'></BsSearch>
        </div>
    </form>
    
  )
}

export default SearchBar;