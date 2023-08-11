import React, { useEffect } from "react";
import styled from "styled-components";
import BLCGCard from "../components/BLCGCard";
import AuthCard from "../components/AuthCard";
import ConverterCard from "../components/ConverterCard";
import NavBar from "../components/NavBar";
import TokenomicsCard from "../components/TokenomicsCard";
import TokenCard from "../components/TokenCard";
import BuyCard from "../components/BuyCard";
import scrollreveal from "scrollreveal";
import { useAddress } from "@thirdweb-dev/react";


export default function Dashboard() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  const address = useAddress();

  
  if (!address) {
    return (
          <Section>

          <AuthCard />

          </Section>

    );
  }

  return (
    <Section>
    <NavBar />
    {/* <Earnings />  */}
    <div className="grid">
      {/* <div className="row__two">
        <BuyCard />
        <TokenomicsCard /> 
      </div> */}
        <div className="">
      <TokenomicsCard /> 
      </div>
      <div className="row__one">
        <BLCGCard />
        <ConverterCard />
      </div>
     
    </div>
  </Section>
  );
};


const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;