import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {

    const inputValue = 'Goku';
    
  
    test('should ', () => {

        render( <GifExpertApp />);

        const input = screen.getByRole( 'textbox' );
        const form  = screen.getByRole('form');    

        fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit( form );    
        //screen.debug();

        expect( input.value ).toBe('');
        expect( screen.getByText( inputValue ) ).toBeTruthy();
    });
    
});
