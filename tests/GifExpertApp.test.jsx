import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    test('debe comprobar el estado inicial', () => {

        render(<GifExpertApp />);
        expect(screen.getByText('GifExpertApp'));
        expect(screen.getByText('Cargando...'));

    });

    test('no debe retornar nada si la categoria ya existe', () => {

        const inputValue = 'Batman';

        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        screen.debug();
        expect(screen.getAllByText('Batman').length).toBe(1);

    });

    test('debe retornar una nueva categoria', () => {

        const inputValue = 'Joker';

        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        
        screen.debug();
        expect( screen.getByText('Batman'));
        expect( screen.getByText( inputValue ));
        
    });

});