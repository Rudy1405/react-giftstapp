import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ["One Punch","SNK","cool cats"]
    const [categories, setCategories] = useState([]);
   
    return (
        <>
            <h2 className="animate__animated animate__jackInTheBox animate__delay-1s"> Gif Detective App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr className="animate__animated animate__zoomIn animate__delay-0.5s" />
            <ol>
                {
                    categories.map( (category,idx) => (
                        <GifGrid  // Aqui usamos los () en lugar de {} para denotar el return lo cual crea una instancia de GifGrid por cada enter en AddCategory
                            key = {category} 
                            category= {category}
                        />
                    )) 
                }
                
            </ol>
        </>
    )
}
