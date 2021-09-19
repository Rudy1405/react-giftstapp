import React from "react"
import "@testing-library/jest-dom";
import { shallow } from "enzyme"
import { useFetchGif } from "../../hooks/useFetchGif";
import {renderHook} from '@testing-library/react-hooks'

describe('Testing in HOOK use FetchGif', () => {
    
    test('should return initial state', async() => {
         // const {data,loading} = useFetchGif("Shingeki no kyojin");   ASI esperamos que jalaria porque pues asi se le llama pero no, se ocpa que se haga como el hook que es
        const {result,waitForNextUpdate} = renderHook( ()=> useFetchGif("patas") ); // esto crea un componente virtual temporal para poner el hook pero en su nombre
        /* 
           Suponiendo que 
            const resp = renderHook( ()=> useFetchGif("patas") );
            el console.log(resp) se veria como:
             result: { all: [Getter], current: [Getter], error: [Getter] },
             rerender: [Function: rerenderHook],
             unmount: [Function: unmountHook],
             waitFor: [AsyncFunction: waitFor],
             waitForValueToChange: [AsyncFunction: waitForValueToChange],
             waitForNextUpdate: [AsyncFunction: waitForNextUpdate]   
             Sabiendo eso, usemos el renderHook como en a documentacion que es desctructurando sus elementos que regresa
        */
       const {data, loading} = result.current; // y asi del resultado ya sabemos que es el return del useFetchGif que es un data y loading, en fin result.CURRENT es para obeter el resultado en ese momento, en este caso al final del hook
       /// ya teniendo las cosas del hook ya podemos usar expect
       await waitForNextUpdate({timeout: 2500});
       expect(data).toEqual([]);
       expect(loading).toBe(true); 
 
    })

    test('should return an array of gifs and loading is false', async() => {
        //En el primer test vimos como si se inicializan las cosas, ahora necesitamos saber como se ve DEESPUES del useEfect
        const {result, waitForNextUpdate} = renderHook( ()=> useFetchGif("patas") ); // ahi entra el waitforNextUpdate siendo una promesaque indica cuando ya hay un cambio en el custom hooks
        await waitForNextUpdate({timeout: 2500});
        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false); 

    })
    
    
})
