import React from 'react'
import styled from "styled-components";

function Cards() {
    return (
        <div>
            <Boxing>
            <h1>Our Feature</h1>
                <Crad>
               
                <Border>
                    <h4>Bil Payment</h4>
                    <p>Make bill payments easily using the
                        Walloet Android application. Paying 
                        bills is easier using this application
                        with guaranteed security.
                    </p>
                </Border>
                <Border>
                    <h4>Withdraw Money</h4>
                    <p>Withdraw money easily using the
                        Android Wallet application. Paying 
                        bills easier using this application
                        with guaranteed security.
                    </p>
                </Border>
               
                <Border>
                    <h4>Add Card </h4>
                    <p>Make bill payments easily using the 
                        Walloet Android application. Paying bill 
                        is easier using this application
                        with guaranteed security.
                    </p>
                </Border>
                </Crad>
            </Boxing>
        </div>
    )
}

export default Cards
const Boxing=styled.div`
max-width: 1124px;
margin:0 auto;
width:100%;
margin-top:3rem;
`
const Crad =styled.div`

display:flex;
justify-content:space-between;
align-items:center;

`
const Border=styled.div`
border-radius:2rem;
padding:3rem;
margin-right:1.5rem;
background-color: rgba(217, 217, 220, 0.722);
`