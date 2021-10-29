import React , {useState} from "react";
import styled from '@emotion/styled'
import {diferenciaYear , obtenerIncremento , obtenerIncrementoPlan} from '../helper'
 

let Campo = styled.div`

  display:flex; 
  margin-bottom: 2rem;
  align-items:center
  
`; 

let Label = styled.label`
  flex: 0 0 100px; 
 
`;

let Select = styled.select`
 
   display: block;
   width:100%; 
   padding:1rem; 
   border: 1px solid #e1e1e1; 
   -webkir-appearance:none;

`; 

let Input = styled.input`

  margin: 0 1rem;
`;

let Boton = styled.button`
 background-color: #00838F; 
 width:100%; 
 text-align:center; 
 font-weight: bold; 
 padding:1rem; 
 border:none; 
 text-transform:uppercase; 
 color:white;
 transition: background .3s ease;
 
 &:hover{

   cursor:pointer;
   background-color:#26C6DA; 


 }

 
`; 

let Error = styled.div`

background-color:red;
color:white; 
padding:1rem; 
width:100%; 
margin-bottom:1rem;
text-align:center;

`;

const Formulario = ({actualizarDatosCotizador}) => {

   const [datos , guardarDatos] = useState({

      marca: '',
      year:'', 
      plan:''
   })

   const [error , guardarError] = useState(false); 

   const llenaFormulario = (e)=>{

    guardarDatos({
      ...datos, 
      [e.target.name] : e.target.value
    })

   }

   const handlerSubmit = (e)=>{

    e.preventDefault(); 

    if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){

      guardarError(true);
      return; 

    }

    guardarError(false);

    //definimos la base

    let resultado = 2000; 

    //aumento de 3% segun diferencia de años 

    let diferencia = diferenciaYear(year);

    resultado -= ((diferencia * 3) * resultado )/100; 
    console.log( diferencia ); 


    resultado = resultado * obtenerIncremento(marca); 

    resultado = parseFloat(resultado * obtenerIncrementoPlan(plan)).toFixed(2); 



    actualizarDatosCotizador({

      cotizador: resultado,
      datos:{
        marca,
        plan,
        year
      }
    })
    
   }

   let {marca , year , plan } = datos; 
  return (
    <form
    onSubmit = {handlerSubmit}
    >

    {error ? <Error>Todos los campos son obligatorios</Error>: null}
      <Campo>
        <Label>Marca</Label>

        <Select
        name="marca"
        value={marca}
        onChange={llenaFormulario}
        >
          <option value="">--Seleccione--</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>

        <Select
          name="year"
          value={year}
          onChange={llenaFormulario}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Plan</Label>
        <Input onChange={llenaFormulario} type="radio" value="basico" name="plan" />
        Básico
        <Input onChange={llenaFormulario} type="radio" value="completo" name="plan" />
        Completo
      </Campo>

      <Boton type="submit" value="cotizar">
        Cotizar
      </Boton>
    </form>
  );
};

export default Formulario;
