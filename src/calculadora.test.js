import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculadora from './calculadora';
import '@testing-library/jest-dom/extend-expect';


describe('Calculadora', () => {  


   it('renders learn react link', () => {
        const { getByText } = render( < Calculadora / > );
    });

    it('deve limpar o campo de números', () => { 
     const { getByTestId, getByText } = render( < Calculadora / > );
     fireEvent.click(getByText('2'));
     fireEvent.click(getByText('C'));
     expect(getByTestId('txtNumeros')).toHaveValue('0');
    });
    
    it('deve somar 10 + 2 e obter 12', () => { 
     const { getByTestId, getByText } = render( < Calculadora / > );
     fireEvent.click(getByText('8'));
     fireEvent.click(getByText('+'));
     fireEvent.click(getByText('2'));
     fireEvent.click(getByText('='));
     expect(getByTestId('txtNumeros')).toHaveValue('10');
    });

    it('deve subtrair 10 - 2 e obter 8', () => { 
     const { getByTestId, getByText } = render( < Calculadora / > );
     fireEvent.click(getByText('8'));
     fireEvent.click(getByText('-'));
     fireEvent.click(getByText('2'));
     fireEvent.click(getByText('='));
     expect(getByTestId('txtNumeros')).toHaveValue('6');
    });

    it('deve multiplicar 10 * 2 e obter 20', () => { 
     const { getByTestId, getByText } = render( < Calculadora / > );
     fireEvent.click(getByText('5'));
     fireEvent.click(getByText('*'));
     fireEvent.click(getByText('2'));
     fireEvent.click(getByText('='));
     expect(getByTestId('txtNumeros')).toHaveValue('10');
    });

    it('deve dividir 10 / 2 e obter 5', () => { 
     const { getByTestId, getByText } = render( < Calculadora / > );
     fireEvent.click(getByText('1'));
     fireEvent.click(getByText('0'));
     fireEvent.click(getByText('/'));
     fireEvent.click(getByText('2'));
     fireEvent.click(getByText('='));
     expect(getByTestId('txtNumeros')).toHaveValue('5');
    });
});