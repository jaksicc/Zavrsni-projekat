import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledCategory = styled.div`
    display:inline-block;
    align-items:center;
    justify-content:center;
    align-self:center;
    width: fit-content;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 25px;
    
    /* border:3px solid black; */
    p{
        font-style:oblique;
        font-size:larger;
        font-weight:50;
        align-self:auto;
        text-align-last:center;
        justify-content:center
        
    }
    img{
        width:300px;
        border:3px solid black;
        border-radius: 20px;
        /* margin-left:40px;
        margin: 20px; */
        margin: 40px
        
        
        
    }
    .ime{
        text-align: center;
        padding: 10px 20px
    }

`

export default StyledCategory