import React from 'react';
import Header from "./Header";
import styled from "styled-components";
import {ReactComponent as Phone} from "../assets/phoneall.svg";
import {ReactComponent as Download} from "../assets/Arrow - Down 2.svg";
import {ReactComponent as User} from "../assets/2 User.svg";
import {ReactComponent as Swap} from "../assets/Swap.svg";
import Button from "./common/Button";

function View() {
    return (
        <Over>
            <Header/>
            <Boxer>
            <div>
                <h4>Best Money Storage</h4>
                <h1>Secure Storage <br/> and Fast <span>Money <br/> Transfer</span></h1>
                <p>Walloet is a very reliable store of money for everyday life, for
                    example for paying monthly bills, transferring  <br/> other accounts, 
                    purchasing PPOB, and so on. <br/> When using this application you don't 
                    need to worry because it uses a <br/> strong security system.
                </p>
                <Button/>
{/* button reusable component */}
            </div>
            <Phone/>
            </Boxer>
            <Display>
                <Div>
                    <User/>
                    <div>
                    <p>User Active 20k</p>
                   <span>20k User</span>
                    </div>
                   
                </Div>
                <Div>
                    <Download/>
                    <div>
                    <p>Download</p>
                   <span>24k Download</span>
                    </div>
                   
                </Div>
                <Div>
                    <Swap/>
                    <div>
                    <p>Transaction</p>
                   <span>80k Transaction</span>
                    </div>
                   
                </Div>
            </Display>
        </Over>
    )
}

export default View

const Over=styled.div`
background-color:rgba(18, 21, 46, 1);
`
const Boxer=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
max-width: 1124px;
margin:0 auto;
width:100%;
margin-top:0px;
h4{
    color:#e69913;
    font-family: 'Poppins', sans-serif;
}
h1{
    color:#ffffff;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1.7rem;
}
h1 span{
    color:rgba(19, 202, 230, 1);
}
p{
color:#ffffff;
font-size:0.8rem;
margin-bottom: 2rem;
}
`
const Display=styled.div`
max-width: 1124px;
margin:0 auto;
width:100%;
display:flex;
justify-content:space-evenly;
align-items:center;
padding-bottom:2rem;
`

const Div=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding-right: 2rem;
border-right: 1px solid rgba(226, 223, 223, 0.859);
p{
    font-weight:bold;
    color:rgb(255, 255, 255);
}
span{
    color:rgba(226, 223, 223, 0.859);
}
div{
    margin-left:1rem;
}
`