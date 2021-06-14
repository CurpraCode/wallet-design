import React from 'react'
import styled from "styled-components";
function Button() {
    return (
       <But>
           Get Started
       </But>
    )
}

export default Button

const But=styled.button`
font-weight:bold;
border:0px;
border-radius:0.8rem;
padding:10px 14px;
background-color: #ffffff;
::focus{
    outline: none;
}
`