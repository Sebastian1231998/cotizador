import React from 'react';
import styled from '@emotion/styled';

let ContenedorResultado = styled.div`

background-color: #26C6DA;
padding: 1rem;
border: 1px solid #00838F;
margin-top:1rem
`;

let ParrafoResultado = styled.p`
   
   color:white; 
   text-align: center;

    span{
        font-weight: bold;
    }

`;

const Resultado = ({datosCotizador}) => {

    let {cotizador} = datosCotizador; 
   
  
   if(cotizador === 0) {

    return null; 
   }
    return (  

          <ContenedorResultado>

              <ParrafoResultado><span>Total:  </span>{cotizador}</ParrafoResultado>
          </ContenedorResultado>

    );
}
 
export default Resultado;