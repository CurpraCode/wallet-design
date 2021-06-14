import React from 'react';
import Button from "./common/Button";
import People from "../assets/Group 45.png";
import styled from "styled-components";

function Start() {
    return (
        <div>
            <Cover>
              
                <div>
                    <p>Lots of great people</p>
                    <h1>It is believed by <br/>
                        many people
                    </h1>
                    <p>Many great people use our application and are trusted by 
                        them, so our application is highly recommended for 
                        carry out your transactions.
                    </p>
                    <Button/>
                </div>
                <img src={People}  alt="" width="45%"/>
            </Cover>
        </div>
    )
}

export default Start
const Cover=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
max-width: 1124px;
  margin: 0 auto;
  width: 100%;
  margin-top: 2rem;
`
