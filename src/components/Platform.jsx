import React from "react";
import styled from "styled-components";
import Dashboard from "../assets/Dashboard.png";
import { ReactComponent as Play } from "../assets/play.svg";
import { ReactComponent as Apple } from "../assets/apple.svg";

function Platform() {
  return (
    <Overit>
      <Divid>
        <img src={Dashboard} alt="phone wallet" width="28%" />
        <Inner>
          <p>Best E-money Platform</p>
          <h1>
            {" "}
            <span> E-money </span> platform <br />
            to make it Easier <br />
            for users
          </h1>
          <p className="differ">
            Walloet is avery reliable store of money for everyday life <br />
            for example for paying monthly bills.{" "}
          </p>
          <h5>Available on Play Store and App Store</h5>
          <div>
            <Apple />
            <Play />
          </div>

          <Border>
            <h5>
              Sholihatun Annalisa <span></span>{" "}
            </h5>
            <p className="quote">
              I am very easy to use this application <br />
              and it is very helpful in my life.
            </p>
          </Border>
        </Inner>
      </Divid>
    </Overit>
  );
}

export default Platform;

const Overit = styled.div`
  /* margin-bottom: 2rem; */
`;
const Divid = styled.div`
  display: flex;
  /* justify-content: space-around; */
  max-width: 1124px;
  margin: 0 auto;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: "poppins", sans-serif;
`;
const Inner = styled.div`
  margin-left: 13rem;
  margin-top: 1rem;
  p {
    margin-bottom: 1rem;
    color: #e69913;
  }
  span {
    color: rgba(19, 202, 230, 1);
  }
  h1 {
    font-weight: bold;
    line-height: 4rem;
    margin-bottom: 1rem;
  }
  .differ {
    color: rgba(18, 21, 46, 1);
    margin-bottom: 2rem;
  }
  h5 {
    margin-bottom: 1rem;
    color: rgba(19, 202, 230, 1);
  }
`;

const Border = styled.div`
  margin-top: 1rem;
  background-color: rgb(211, 211, 211);
  border-radius: 1rem;
  padding: 1.5rem 0rem 1.5rem 1.5rem;
  h5 {
    margin-bottom: 2rem;
    font-weight: bold;
    display: flex;
  }
  .quote {
    color: #000;
  }
  span {
    height: 2px;
    margin-top: 0.6rem;
    margin-left: 1rem;
    padding-left: 8rem;
    background-color: rgba(19, 202, 230, 1);
  }
`;
