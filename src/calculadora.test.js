import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculadora from './calculadora';
import '@testing-library/jest-dom/extend-expect';


describe('Calculadora', () => {  


   it('renders learn react link', () => {
        const { getByText } = render( < Calculadora / > );
    });

    it('haves to clear number space', () => { 
     const { getByTestId, getByText } = render( < Calculadora / > );
     fireEvent.click(getByText('2'));
     fireEvent.click(getByText('C'));
     expect(getByTestId('txtNumeros')).toHaveValue('0');
    });
    
    it('haves to sum 8 + 2', () => { 
     const { getByTestId, getByText } = render( < Calculadora / > );
     fireEvent.click(getByText('8'));
     fireEvent.click(getByText('+'));
     fireEvent.click(getByText('2'));
     fireEvent.click(getByText('='));
     expect(getByTestId('txtNumeros')).toHaveValue('10');
    });

    it('haves to' subtract 8 - 2, () => { 
     const { getByTestId, getByText } = render( < Calculadora / > );
     fireEvent.click(getByText('8'));
     fireEvent.click(getByText('-'));
     fireEvent.click(getByText('2'));
     fireEvent.click(getByText('='));
     expect(getByTestId('txtNumeros')).toHaveValue('6');
    });

    it('haves multiply 5 * 2', () => { 
     const { getByTestId, getByText } = render( < Calculadora / > );
     fireEvent.click(getByText('5'));
     fireEvent.click(getByText('*'));
     fireEvent.click(getByText('2'));
     fireEvent.click(getByText('='));
     expect(getByTestId('txtNumeros')).toHaveValue('10');
    });

    it('haves to divide 10 / 2', () => { 
     const { getByTestId, getByText } = render( < Calculadora / > );
     fireEvent.click(getByText('1'));
     fireEvent.click(getByText('0'));
     fireEvent.click(getByText('/'));
     fireEvent.click(getByText('2'));
     fireEvent.click(getByText('='));
     expect(getByTestId('txtNumeros')).toHaveValue('5');
    });
});