const { renderHook, waitFor } = require("@testing-library/react");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");

describe('pruebas en el hook useFetchGifs', () => {

    test('debe regresar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('joker') );
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();
    });

    test('debe regresar un arreglo de imagenes y el isLoading en false', async() => {
        const { result } = renderHook( () => useFetchGifs('joker') );
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 )
        );
        
        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();
    });

});