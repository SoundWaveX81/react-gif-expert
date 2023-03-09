import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')

describe('pruebas de < GifGrid /> component', () => {

    const category = "Joker";

    test('debe mostrar el loading incialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));

    });

    test('debe mostrar items cuasndo se cargan las imagenes desde useFetchGifs', () => {
        const gifs = [
            {
                id: '123',
                title: 'A title',
                url: 'https//test.testsuite.com/atitle.jpg'
            },
            {
                id: '456',
                title: 'Another title',
                url: 'https//test.testsuite.com/anothertitle.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs, 
            isLoading: false 
        });

        render(<GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length ).toBe( 2 );
    });  

});