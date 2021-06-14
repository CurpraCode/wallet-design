import React from 'react';
import styled from "styled-components";
import "boxicons";

function Footer() {
    return (
        <Overall>
            <Box>
                <Sected>
                    <h2>Wall<span>oet</span></h2>
                    <p> <span>Walloet</span> is a very reliable store of  <br/>
                    money for everyday life, for example <br/>
                    for paying monthly bills, transferring <br/>
                    other accounts, purchasing PPOB, <br/>
                    and so on</p>
                </Sected>
                <List>
                    <h3>Menu</h3>
                    <ul>
                        <li>Storage</li>
                        <li>Top Up</li>
                        <li>Contact Us</li>
                        <li>User Help</li>
                        <li>Terms & Policy</li>
                    </ul>
                </List>
                <List>
                    <h3>Feature</h3>
                    <ul>
                        <li>Bill Payment</li>
                        <li>Withdraw Money</li>
                        <li>Add Card</li>
                        <li>History Transaction</li>
                        
                    </ul>
                </List>
                <List>
                    <h3>Stay Update</h3>
                    <ul>
                        <li>+62 825-2926-2959</li>
                        <li>Infowalloet@gmail.com</li>
                    </ul>
                    <Input type="email" name="email" placeholder="Enter Email" />
                </List>
            </Box>
            <Social>
               <div>
               <box-icon type='logo' name='instagram' color="#ffffff"></box-icon>
               <box-icon name='twitter' type='logo' color="#ffffff" ></box-icon>
               <box-icon name='linkedin' type='logo' color="#ffffff" ></box-icon>
               <box-icon name='facebook' type='logo' color="#ffffff" ></box-icon>
               </div>
               <p>All right reserved @walloet.com</p>
            </Social>
        </Overall>
    )
}

export default Footer
const Overall=styled.div`
background-color:rgba(18, 21, 46, 1);
border-top-right-radius: 2rem;
border-top-left-radius:2rem;
p{
    color:#ffffff;
    font-size:0.9rem;
}`

const Box =styled.div`
display:flex;
justify-content:space-between;
max-width: 1124px;
margin:0 auto;
width:100%;
padding-top: 2.5rem;
padding-bottom: 2.5rem;
`
const Sected=styled.div`
h2{
    color:rgba(19, 202, 230, 1);
    margin-bottom:1rem;
    font-family: "DN sans", sans-serif;
   
}
h2 span{
    color:rgb(255, 255, 255); 
}
p span{
    color:#e69913;
}`
const List=styled.div`
h3{
    margin-bottom:1rem;
    color:rgba(19, 202, 230, 1);
    font-family: 'Poppins', sans-serif;
}
li{
    list-style-type: none;
    color:rgb(255, 255, 255);
    font-size:0.78rem;
    margin-bottom: 0.7rem;
}
`
const Input=styled.input`
border:0px;
border-bottom:1px solid rgba(232, 232, 232, 0.865);;
background-color:transparent;
padding:5px 1px;
:focus{
    outline:none;
}`

const Social=styled.div`
max-width: 1124px;
margin:0 auto;
width:100%;
display:flex;
justify-content: space-between;
align-items: center;
padding-bottom:2rem;
div{
    display: flex;
    justify-content: space-between;
}
box-icon{
    margin-right:0.5rem;
}
`