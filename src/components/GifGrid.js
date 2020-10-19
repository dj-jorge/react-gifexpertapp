import React from 'react'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            { loading && <p className='animate__animated animate__flash'>Cargando...</p>}

            <div className="card-grid">
                
                {
                    images.map( ( img ) => (
                        <GifGridItem 
                            key={img.id}
                            {...img}//mandamos todos los atributos del objeto
                        />
                    ))
                    }
            </div>
        </>
    )

    /* 
    return (
        <div>
            <h3>{category}</h3>
            <h4>{count}</h4>
            <button onClick={()=>setCount(count+1)}>contar</button>
        </div>
    )
    */
}
