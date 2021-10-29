import React , { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario' 
import styled from '@emotion/styled';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

let Contenedor = styled.div`
max-width: 600px;
margin:0 auto; 
`;



let ContenedorFormulario = styled.div`
     background-color:#fff; 
     padding:3rem; 

`;


function App() {

  const [datosCotizador , actualizarDatosCotizador ] = useState({

    cotizador: 0, 
    datos : {
   
        marca: '',
        plan:'',
        year:''

    }
  })

  return (
    <Contenedor>
       <Header 
       titulo = "Cotizador de Seguro"
       />

      <ContenedorFormulario>
          <Formulario
          actualizarDatosCotizador = {actualizarDatosCotizador}
         
           />
          <Resumen 
             datosCotizador = {datosCotizador}
          />
          <Resultado 
            datosCotizador = {datosCotizador}
          />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
