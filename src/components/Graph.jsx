import React from 'react';
import styled from "styled-components";
import {ReactComponent as Grapher} from "../assets/graphgroup.svg";

function Graph() {
    return (
        <div>
            <Container>
                <Content>
                    <p className="colored">Report is valid</p>
                    <h1>Graph of your <br/>
                    Transaction </h1>

                    <p>Many great people use our application and are 
                        trusted <br/> bby them, so our application is highly 
                        recommended for carrying out your 
                        transactions
                    </p>
                </Content>
                <Grapher/>
            </Container>
        </div>
    )
}

export default Graph

const Container=styled.div`
max-width: 1124px;
margin:0 auto;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
`
const Content=styled.div`
font-family:"poppins", sans-serif;

p{
    margin-bottom:1rem;
}
h1{
    font-weight:bold;
    margin-bottom:1rem;
}
.colored{
    color:#e69913;
    font-weight:bold;
}
`