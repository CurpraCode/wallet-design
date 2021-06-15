import React from 'react';
import Button from "./common/Button";
import People from "../assets/Group 45.png";
import styled from "styled-components";

function Start() {
    return (
        <div>
            <Cover>
              
                <div>
                    <h5>Lots of great people</h5>
                    <h1>It is believed by <br/>
                        many people
                    </h1>
                    <p>Many great people use our application and are trusted by <br />
                        them, so our application is highly recommended for <br /> 
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
font-family:"poppins", sans-serif;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 6rem;
  h5{
      color:#e69913;
      margin-bottom:1rem
  }
  h1{
      font-weight: bolder;
      line-height:3rem;
      margin-bottom:1rem
  }
  p{
    margin-bottom:1rem
  }
`
