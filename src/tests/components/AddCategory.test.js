import React from "react"
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory"
import { shallow } from "enzyme"

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn(); //sirve como una referencia a una funcion
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{ //ciclo de vida de pruebas entonces lo de adentro se ejecutara CADA QUE se haga un test
        jest.clearAllMocks(); // limpia cualquier data mockeada que se haya declarado
        wrapper = shallow(<AddCategory setCategories={setCategories}/>); //lo inicializamos dos veces solo para que al codear aparezcan las ayudas como wrapper.f dara .find :) 
    });

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change input text', () => {
        const input = wrapper.find("input");
        const value = "Hola Mundo"; //simulamos el e.target.value del EVENTO para que el componente lo entienda.
        input.simulate("change", { target: {value}}); //es change mas no ONCHANGE porque es un input
        expect( wrapper.find("p").text().trim() ).toBe(value); // Se creo un P en HTML para aqui ver que el value que se mete es lo que se displaa y se usa en la logica

    })

    test('should not POST info  OnSubmit', () => {
        wrapper.find("form").simulate("submit", { preventDefault: ()=>{}}); //simular el ONSUBMIT DEL FORM, el preventDefault es una funcion que tiene el handleonsubmit (en el archivo original) por ende necesita reconocerlo  puede ser asi o asi preventDefault(){} que es una func vacia igual
        // como no hay un setCategory no deberia hacer nada 
        expect(setCategories).toHaveBeenCalled(); // setCategory si fue llamado pero si valor es el por deafult linia 6 se usa el useState para dar un default Add a category 
        expect(wrapper.find("input").props().value).toBe(""); //aqui debe ser vacio porque el useState pone un valor visual nomas, eso NO se envia si se hace enter o submit en el form
    })

    test('should call SetCategory and wipe text input', () => {
        const input = wrapper.find("input");
        const value = "chanclas";
        input.simulate("change", { target: {value}}); //simulamos que se tiene algo en el text input
        wrapper.find("form").simulate("submit", { preventDefault: ()=>{}}); // simulamos el enter para mandar el value 
        // para este entonces ya se mando la data y el input text deberia estar vacio, bueno no, por el USESTATE linea 6 deberia ser el texto Add a category que es el default
        expect(setCategories).toHaveBeenCalledTimes(1); // que se haya llamado solo 1 vez porque fue 1 input
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); // y que aparte el argumento sea una funcion
        expect(input.props().value).toBe("Add a category"); //aqui no hacemos TRIM del value porque este es el por default y de sebe respetar ALV
    })
    

    
    
    
})
