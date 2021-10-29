import React from 'react';
import {devuelvePrimeraMayuscula } from '../helper'
import styled from '@emotion/styled';


let ContenedorResumen = styled.div`

  background-color: #00838F;
  padding:1rem;
  margin-top: 1rem;

`;

let ParrafoResumen = styled.p`
   
   color:white; 
   text-align: center;

    span{
        font-weight: bold;
    }

`;

let HeadResumen = styled.h3`

text-align: center;
color:white

`;


const Resumen = ({datosCotizador}) => {

   let {datos , cotizador} = datosCotizador; 
   
   let {marca, plan , year} = datos;

   if(cotizador === 0) {

    return null; 
   }

    return ( 

         <ContenedorResumen>
                <HeadResumen>Resumen de la Cotización</HeadResumen>
  
                 <ParrafoResumen><span>Marca:</span>{devuelvePrimeraMayuscula(marca)}</ParrafoResumen>  
                 <ParrafoResumen><span>Plan:</span>{devuelvePrimeraMayuscula(plan)}</ParrafoResumen>   
                 <ParrafoResumen><span>Año:</span>{devuelvePrimeraMayuscula(year)}</ParrafoResumen>    
         </ContenedorResumen>
     );
}
 
export default Resumen;