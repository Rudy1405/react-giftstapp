import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const {data:images, loading} = useFetchGif(category); // como usefetchGif regresa un obj, lo podemos desestructurar
          /// en la desesctructracion podemos renombrar variables, por ejemplo data llamarle images para usarlo como images abajo
/*
    El useEffect nos servia para cargar por primera vez todo, pero se uso el customHOOK de usefetchgif por ende ya no se ocupara

    const [imagesValue, setImagesValue] = useState([])
    useEffect( ()=>{ // useEffect es un hook para ejecutar codigo de forma condicional para que el getgifs por cualqueir cambio no se este llame y llame pueh
        getGifs(category) // mando a llamar a mi helper que es una promesa que me hace el fetch de lo que mande en category desde el AddCategory
        .then(imgs => setImagesValue(imgs)) 
    }, [category]) // aqui van las dependencias de cuando ejecutar el codigo... un [] es para que solo se ejecute 1 vez
                   // se pone con [category] para evitar un warning de que el category puede cambiar en alguna de sus posiciones 
     /// antes aqui estaba el getgifs pero se paso a un helper para tener mejor acomodado el codigo, ahora se llama drecto en el useEffect
*/
   



    return (
        <>
            <h3 className="animate__animated animate__fadeInUp"> {category} </h3>

            <div className="container">
                <div className="row">
                    {loading && <p className="animate__animated animate__hinge animate__delay-0.5s">Loading...</p>}    { /*  lo anterior es igual a {loading ? <p>Loading...</p> : null} */}
                    <div className='class="col-6"' className="cardGrid">            
                        { // las {} es para denotar que vamos a meter JS
                            images.map( img => { // en lugar de (img) se puede desestructurar a {id,title,url} para solo tener los elementos POR elemento que queremos
                            return <GifGridItem 
                                            key= {img.id}
                                            {...img } // mandandolo asi, estamos mandando solo las propiedades de cada IMG y por ende poder desestructurar en el GIFGRIDITEM
                                /> // Creamos un nuevo componente porque pues adentro ira un pedazo de HTML con mucho mas cuerpo
                            })  
                        }
                    </div>
                </div>
            </div>

            { // Esto es con la version del useEfecct antes del customHook
            /* <div className="container"> 
                <div className="row">
                    <div className='class="col-6"' className="cardGrid">            
                        { // las {} es para denotar que vamos a meter JS
                            imagesValue.map( img => { // en lugar de (img) se puede desestructurar a {id,title,url} para solo tener los elementos POR elemento que queremos
                            return <GifGridItem 
                                            key= {img.id}
                                            {...img } // mandandolo asi, estamos mandando solo las propiedades de cada IMG y por ende poder desestructurar en el GIFGRIDITEM
                                /> // Creamos un nuevo componente porque pues adentro ira un pedazo de HTML con mucho mas cuerpo
                            })  
                        }
                    
                    </div>
                </div>
            </div> */}
           
            
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}