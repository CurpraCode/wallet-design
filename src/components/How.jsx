import React from 'react';
import styled from "styled-components";
import {ReactComponent as PhoneHow} from "../assets/grouphow.svg";
import Phoned from "../assets/Group 42.png";

function How() {
    return (
        <div>
            <Display>
            <img src={Phoned} alt="phone" width="45%"/>
                <div>
                    <div>
                        <p>How to use</p>
                        <h1>How does it work?</h1>
                        <p>Walloet is a very reliable store of money for everyday life. for
                            example for paying monthly bils, transferring other accounts,
                            purchasing PPOB, and so on. When using this application you 
                            don't need worry because it uses a strong security system.
                        </p>
                                            </div>
                    <Boxer>
                    <PhoneHow/>
                        <Bov>
                        <div>
<h4>Download the App</h4>
<p>Download the application on the Play store or 
    App store, then install on your gadget atleast
     Android 8</p>
                        </div>
                        <div className="divd">
<h4>Account Creation</h4>
<p>Download the application on the Play store or 
    App store, then install on your gadget atleast
     Android 8</p>
                        </div>
                        <div className="dive">
<h4>Download the App</h4>
<p>Download the application on the Play store or 
    App store, then install on your gadget atleast
     Android 8</p>
                        </div>
                    </Bov>

                        </Boxer>
                                       </div>
            </Display>
        </div>
    )
}

export default How
const Display=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
max-width: 1124px;
  margin: 0 auto;
  width: 100%;
  margin-top: 2rem;
  font-family:"poppins", san-serif;

`
const Boxer=styled.div`
display:flex;
justify-content:space-between;

`
const Bov=styled.div`
margin-top:6.2rem;
.divd{
    margin-top:3rem;
}
.dive{
    margin-top:3rem;
}
`