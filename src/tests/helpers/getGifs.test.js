import { getGifs } from "../../helpers/getGifs"

describe('Tests in fetch getGifs', () => {

    test('should got 10 elements', async () => {
      const gifs = await getGifs("One Punch");
      expect(gifs.length).toBe(10);
    })
    
    test('should have no elements if there is NO prop in getGIFs', async () => {
        const gifs = await getGifs();
        expect(gifs.length).toBe(0); //usamos 0 y 10 porque al final ese promise lo que regresa es un array
      })

})
