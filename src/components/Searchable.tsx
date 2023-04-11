import React, { useState } from 'react';
import debounce from 'lodash/debounce';
import Card  from './card.tsx'
import './search.scss';

const SearchableList = ({ items, setShowModal, setCurrenItem }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = debounce((searchTerm) => {
    setSearchTerm(searchTerm);
  }, 500);

  const filteredItems = items.filter((item) => {
    return item.title.label.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='search'>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        className='input'
      />
      <div className='music-items'>   
        {filteredItems.map((item, index) => {
            const {title, link} = item;
            return  <Card key={index} title={title} link={link} image={item['im:image']} setShowModal={setShowModal} setCurrenItem={setCurrenItem} />
        })}
     </div>
   
    </div>
  );
};

export default SearchableList;