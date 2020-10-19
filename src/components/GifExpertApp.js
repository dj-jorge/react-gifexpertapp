import React, { useState } from 'react'
import AddCategory from './AddCategory'
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {

    //const categorias = ['One puch', 'Samurai','Dragon Ball'];
    const [categories, setCategories] = useState(['Dragon Ball']);
    
    /*const handleAdd = ()=>{
        setCategories([...categories,'Hunter'])
    }*/

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            {/*<button onClick={handleAdd}>Agregar</button>*/}

            <ol>
                {/*Va dentro del map<li key={category}>{category}</li>*/}

               {
                    

                    categories.map(category => (
                            <GifGrid 
                                key={category} 
                                category={category} />
                        )
                    )
               } 
            </ol>
        </>
    );
};

export default GifExpertApp;