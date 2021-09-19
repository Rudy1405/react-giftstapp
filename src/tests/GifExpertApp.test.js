import React from "react"
import "@testing-library/jest-dom";
import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp";

describe('Testing in <GifExpertApp/>', () => {
    
    test('should render correctly', () => {
        let wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    /// el useState no se puede validar como yal... por ende evaluamos si se rendereo lo que el state altera
    test("Should show a list of categories", () =>{
        const categories = ["patas", "snk"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);
    });

})
