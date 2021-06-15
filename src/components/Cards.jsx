import React from "react";
import styled from "styled-components";
import { ReactComponent as Mark } from "../assets/Mark.svg";
import { ReactComponent as Plus } from "../assets/Plus.svg";
import { ReactComponent as Wap } from "../assets/Swap1.svg";

function Cards() {
  return (
    <div>
      <Boxing>
        <h4>Best Feature</h4>
        <h1>Our Feature</h1>
        <Crad>
          <Border>
            <div>
              <Wap />
            </div>
            <h3>Bil Payment</h3>
            <p>
              Make bill payments easily using the Walloet Android application.
              Paying bills is easier using this application with guaranteed
              security.
            </p>
          </Border>
          <Border>
            <div>
              <Mark />
            </div>
            <h3>Withdraw Money</h3>
            <p>
              Withdraw money easily using the Android Wallet application. Paying
              bills easier using this application with guaranteed security.
            </p>
          </Border>

          <Border>
            <div>
              <Plus />
            </div>
            <h3>Add Card </h3>
            <p>
              Make bill payments easily using the Walloet Android application.
              Paying bill is easier using this application with guaranteed
              security.
            </p>
          </Border>
        </Crad>
      </Boxing>
    </div>
  );
}

export default Cards;
const Boxing = styled.div`
  max-width: 1124px;
  margin: 0 auto;
  width: 100%;
  margin-top: 5.3rem;
  margin-bottom: 8.3rem;
  font-family: "poppins", sans-serif;
  h4 {
    color: #e69913;
  }
`;
const Crad = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.3rem;
`;
const Border = styled.div`
  position: relative;
  border-radius: 2rem;
  padding: 2.3rem;
  margin-right: 1.5rem;
  background-color: rgba(217, 217, 220, 0.722);
  :hover {
    background-color: rgb(18, 21, 46);
    color: rgb(255, 255, 255);
    div {
      background-color: rgb(19, 200, 228);
    }
    path {
      fill: #ffffff;
    }
  }
  h3 {
    margin-bottom: 1rem;
    font-weight: bolder;
  }
  p {
    font-size: 0.75rem;
  }
  div {
    position: absolute;
    top: -35px;
    background-color: rgb(18, 21, 46);
    padding: 1.1rem;
    border-radius: 50rem;
  }
`;
