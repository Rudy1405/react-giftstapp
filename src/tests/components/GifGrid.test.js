import React from "react"
import "@testing-library/jest-dom";
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid";
import { useFetchGif } from "../../hooks/useFetchGif";
jest.mock("../../hooks/useFetchGif")

describe('Testing on <GifGrid/>', () => {

    const category = "patas";
    //let wrapper = shallow(<GifGrid category={category}/>);
    

    test('should render correctly', () => {
        useFetchGif.mockReturnValue({ // literal mockeamos el return de la funcion USEFETCHGIF
            data:[],
            loading: true
        }) 
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show items when images loaded  via userfetchGifs', () => {
        //Creamos un mock a forma de no porbar el custom Hook checa el jest.mock
        const gifs = [
            {
                id: "abs",
                url:"https://algo",
                title:"somethins"
            },
            {
                id: "absdsfafa",
                url:"https://algo3",
                title:"patitas"        
            }
        ]
        useFetchGif.mockReturnValue({  /// si ya mockeamos que hay DATA pues entonces se va el array y el lading no deberia estar
            data: gifs,
            loading: false
        }) 
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should show items when images loaded  via userfetchGifs but WITHOUT snapshot', () => {
        //Creamos un mock a forma de no porbar el custom Hook checa el jest.mock
        const gifs = [
            {
                id: "abs",
                url:"https://algo",
                title:"somethins"
            },
            {
                id: "absdsfafa",
                url:"https://algo3",
                title:"patitas"        
            }
        ]
        useFetchGif.mockReturnValue({  /// si ya mockeamos que hay DATA pues entonces se va el array y el lading no deberia estar
            data: gifs,
            loading: false
        }) 
        const wrapper = shallow(<GifGrid category={category}/>);
        //if hay data no deberia existir loading
        expect(wrapper.find("p").exists()).toBe(false) // aqui solo hay un P que es el loading, no deberia haber NINGUNO 
        // if hay data deberia existir un GifGridItem
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
    })

    

})
