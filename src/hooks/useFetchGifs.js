import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    //Para evitar que se renderice este metodo de manera infinita
    useEffect( () => {
        getGifs(category)
            .then( imgs => {

                //setTimeout( () => {
                    setState({
                        data: imgs,
                        loading: false
                    })
                //}, 1500);

            })
    }, [category]);//para quitar warning de que depende de una variable que puede cambiar

    return state;
}