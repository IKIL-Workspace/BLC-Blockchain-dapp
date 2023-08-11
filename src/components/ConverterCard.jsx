import React, { useState } from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";

export default function ConverterCard() {
  const [blcgAmount, setBlcgAmount] = useState("");
  const [convertedValues, setConvertedValues] = useState({
    usd: 0,
    eth: 0,
    btc: 0,
    gold: 0,
  });

  const manualConversionRates = {
    usd: 1.5,
    eth: 0.005,
    btc: 0.00006,
    gold: 0.0008,
  };

  const handleAmountChange = (event) => {
    const amount = parseFloat(event.target.value);
    setBlcgAmount(amount);

    if (!isNaN(amount)) {
      setConvertedValues({
        usd: (amount * manualConversionRates.usd).toFixed(2),
        eth: (amount * manualConversionRates.eth).toFixed(6),
        btc: (amount * manualConversionRates.btc).toFixed(8),
        gold: (amount * manualConversionRates.gold).toFixed(4),
      });
    } else {
      setConvertedValues({
        usd: 0,
        eth: 0,
        btc: 0,
        gold: 0,
      });
    }
  };

  return (
    <Section>
      <div className="title">
        <p>BLCG Calculator</p>
      </div>
      <div className="conversion-section">
        <input
          type="number"
          placeholder="Enter BLCG amount"
          value={blcgAmount}
          onChange={handleAmountChange}
          className="responsive-input"
        />
        <div className="converted-values">
          <p>{convertedValues.usd} USD</p>
          <p>{convertedValues.eth} ETH</p>
          <p>{convertedValues.btc} BTC</p>
          <p>{convertedValues.gold} GOLD</p>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  background-color: #000000;
  color: #ffffff;
  border: 2px solid #ffc107;
  transition: background-color 0.3s, color 0.3s;

  .title {
    h2 {
      color: #ffc107;
      font-family: "Vidaloka", cursive;
      letter-spacing: 0.3rem;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    p {
      text-transform:uppercase;
      font-size: 14px;
      margin-bottom: 10px;
    }
  }

  .conversion-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .responsive-input {
      width: 100%;
      padding: 1rem;
      font-size: 1rem;
      border: 1px solid gray;
      background-color: #1d2636;
      color: #ffffff;
      border-radius: 4px;

      &:focus {
        outline: none;
        border-color: #ffc107;
      }
    }

    .converted-values {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      font-size: 1.2rem;
    }
  }
`;
