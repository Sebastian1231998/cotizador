import React from 'react';
import styled from '@emotion/styled';

let SomeComp = styled.header`

    background-color: #26C6DA;
    padding:10px; 
    font-weight: bold;
    color:#ffffff;


`;

let TextoHeader = styled.h1`
  
font-size:2rem; 
text-align:center; 
font-family: slabo 27px, 'sans-serif';


`;


const Header = ({titulo}) => {
    return ( 

        <SomeComp>
        <TextoHeader>{titulo}</TextoHeader>
   </SomeComp>

     );
}
 
export default Header;