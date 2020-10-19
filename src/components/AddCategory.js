import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) =>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        //console.log('Echo el submit');

        if(inputValue.trim().length>2){
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }

    }
    return (
        <form onSubmit={handleOnSubmit}>
            <h1>{inputValue}</h1>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

export default AddCategory;


AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}