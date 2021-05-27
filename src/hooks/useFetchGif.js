import {useEffect, useState} from "react"
import { getGifs } from "../helpers/getGifs";

/// Los hooks pueden tambien tener states, como para indicar a otros componentes cuando usarse porque algo cambio

export const useFetchGif = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{ // los efectos no pueden ser ASYNC por eso eso se hace adentro
        getGifs(category)
        .then(imgs => {
                        setTimeout(() => { // settimeout para simular carga
                            setState({  // ahora lo que regresa mi promise getgifs lo metemos en data y controlamos el loading
                                data: imgs,
                                loading: false
                            })
                        }, 1500);    
                   })
    }, [category]) // mandamos a llamar el useEffect cuando category cambie


    return state; // el state es un obj ahora {data:[], loading: true}
}
