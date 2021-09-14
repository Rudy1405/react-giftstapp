import React from "react"
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem>', () => {

    const title = "Un titulo";
    const url = "https://localhost/somethong.jpg";
    const wrapper = shallow( <GifGridItem title={title} url={url}/> )

    test('should show the component correctly ', () => {

        expect(wrapper).toMatchSnapshot();

    })
    

    test('should have a paragraf with the TITLE', () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title);
    })

    test('should has src an alt in img tag', () => {
        const img = wrapper.find("img");
        //img.html() cuando no hay enzyme y se trabaja como un string ya que returns el TAG en string
        expect(img.props().src).toBe(url)
        expect(img.props().alt).toBe(title) //tambien se puede img.prop("src")
    })

    test('should have animate__fadeInUp  in div', () => {
        const div = wrapper.find("div");
        expect((div.props().className).includes("animate__fadeInUp")).toBe(true)

    })
    
    
    

})
