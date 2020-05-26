function CalculadoraService(){

   const SOMA = '+';
   const SUB = '-';
   const MULTI = '*';
   const DIV = '/';

    function calcular(numero1, numero2, operacao){
        let resultado;

        switch(operacao){
            case SOMA:
                resultado = numero1 + numero2;
                break;
            
            case SUB:
                resultado = numero1 - numero2;
                break;

            case MULTI:
                resultado = numero1 * numero2;
                break;

            case DIV:
                resultado = numero1 / numero2;
                break;

            default:
                resultado = 0;
        }
        return resultado;
    }

    function concatenaNumero(numAtual, numConcat) {

        if (numAtual === '0' || numAtual === null) {
            numAtual = '';
        }

        if (numConcat === '.' && numAtual === '') {
            return '0.';
        }

        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual;
        }

        return numAtual + numConcat;

    }

    return [
        calcular, concatenaNumero,
        SOMA, SUB, MULTI, DIV
    ];

}

export default CalculadoraService;