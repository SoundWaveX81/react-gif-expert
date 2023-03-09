import { getGifs } from "../../src/helpers/getGifs";

describe('pruebas en getGifs', () => {
    test('debe retornar un arreglo de imagenes', async() => {
        const gifs = await getGifs('joker');
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual( {
            id: expect.any( String ),
            title: expect.any( String),
            url: expect.any( String )
        });
    });
});