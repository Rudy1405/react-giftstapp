import React from 'react'

export const GifGridItem = ( {id,title,url} ) => { // aqui ya tenemos los props enviados por [...img] por ende podemos llamar asi a sus elementos solo para usarlos directamente cada vez que se cree un componente de estos
   
    return (
        <div className="card animate__animated animate__fadeInUp animate__delay-0.5s">
             <img src={url? url : ""} alt={title? title : "No Title"} />
             <p>{title? title : "Imagen Generica"}</p>
        </div>
    )
}
