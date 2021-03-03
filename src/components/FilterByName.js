import React from 'react';

const FilterByName = props => {

    const handleChange = (ev) =>{
        props.handleFilter({
            key: 'name', 
            value: ev.target.value});
    }
    return(
        <>
        <label htmlFor="name">
            Filter by name:
        </label>
        <input type="text" 
        name="name" 
        id="name" 
        placeholder="Character's name goes here"
        onChange={handleChange}/>
        </>
    )
}

export default FilterByName;