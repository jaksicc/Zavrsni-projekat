import styled from "styled-components";
import Link from 'react-router-dom'

const StyledHeader = styled.div`
    height:180px;
    color:white;
    position: relative;

    h1{
        color:goldenrod;
        text-align:center;
        font-size:50px;
        font-family:fantasy;
        
        
    }
    h3{
        display:inline;
    }
    button{
        display:block;
    }
    /* nav{
        display:flex;
        right:0px;
    } */
    .loggedout{
        position:absolute;
        /* display:inline; */
        right:0;
    }

    p{
        color:white;
        display:inline;
        font-size:large
    }

`
export default StyledHeader
