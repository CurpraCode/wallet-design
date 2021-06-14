import React from 'react';
import styled from "styled-components";

function Header() {
    return (
        <Cover>
            <Head>
                <h2>Wall<span>oet</span> </h2>

                <ul>
                    <li>Home</li>
                        <li>Services</li>
                        <li>Help</li>
                        <li>Contact</li>
                </ul>
                <AuthBut>
                    <p>Login</p>
                <button>Sign In</button>
                </AuthBut>
                
            </Head>
        </Cover>
    )
}

export default Header

const Cover=styled.div`
padding-right:1rem;
`
const Head=styled.div`
display:flex;
justify-content:space-between;
max-width: 1124px;
margin:0 auto;
width:100%;
padding-top: 2.5rem;
h2{
    color:rgba(19, 202, 230, 1);
    margin-bottom:1rem;
    font-family: "DN sans", sans-serif;
   
}
h2 span{
    color:rgb(255, 255, 255); 
}
ul{
    display:flex;
    justify-content: space-between;
}
li{
    list-style-type: none;
    margin-right:0.9rem;
    color: #ebebebf3;
}
li:hover{
    color:#ffffff;
    /* bottom-left-radius: 1.5px;
    bottom-right-radius: 1.5px; */
}
`
const AuthBut=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
color:#ffffff;
p{
    margin-right:1rem;
}
button{
    color:#ffffff;
    border-radius: 0.6rem;
    border:0px;
    background-color: #e69913;
    margin-right:1rem;
    width:100%;
    padding: 9px 12px;
    :focus{
        outline:none;
    }
}
`
