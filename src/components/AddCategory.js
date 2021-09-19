import React, {useState} from 'react'
import PropTypes from "prop-types"

export const AddCategory = ( {setCategories} ) => { // aqui como se hizo q en el padre mandara algo aca lo cachamos y asi lo mandamos a llmar

    const [inputValue, setInputValue] = useState("Add a category");
    const handleInputChange = (element) => {
        setInputValue(element.target.value); //Tras hacer esto el INPUTVALUE tendra el ultimo valor escrito
    }
    const handleSubmit = (element) => {
        element.preventDefault(); /// ****** Esto es para evitar que el form provoque un refresh de la pagina
        if(inputValue.trim().length > 2){
            setCategories( categories =>  [ inputValue, ...categories] ); // obt el estado anterior y anexamos el input value
            setInputValue("");
        }
    }
    const handleClick = (element) => {
        setInputValue("");
    }
    /// en este caso no usamos el <></> para indicar que hay un elemento agrupador del componente porque el FORM ya lo es
    return (
          <form className="animate__animated animate__zoomIn animate__delay-0.5s" onSubmit={handleSubmit}>
              <p> {inputValue} </p>
            <input 
                    type="text"
                    value= {inputValue}
                    onChange={ handleInputChange }
                    onClick={handleClick}

            />
          </form>
    )
}

AddCategory.propTypes = {
        setCategories: PropTypes.func.isRequired  // es func porque el setCategories es una funcion lo que se envia
}

AddCategory.defaultProps = {
    setCategories: []
}
