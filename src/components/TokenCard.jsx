import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";


export default function CoinTableCard() {
  return (
    <CardBoard>
     
    </CardBoard>
  );
}

const CardBoard = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #000;
  border-radius: 1rem;
  border: 3px solid #d4af37;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  color: #fff;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;



const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 1rem 0.5rem;
  text-align: left;
  font-weight: bold;
  color: #d4af37;
  background-color: #222;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #333;
  }
`;

const TokenData = styled.td`
  padding: 1rem 0.5rem;
`;

const TokenTitle = styled.div`
  font-weight: bold;
`;

const Info = styled.span`
  font-weight: bold;
`;

const SupplyInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Supply = styled.span`
  font-weight: bold;
  margin-right: 0.2rem;
`;

const SupplySeparator = styled.div`
  font-weight: bold;
  margin: 0 0.2rem;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background-color: ${props => (props.className === "buy" ? "#4caf50" : "#e53935")};
  color: white;
  border: none;
  border-radius: 0.3rem;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 0.2rem 0.3rem;
  }
`;
