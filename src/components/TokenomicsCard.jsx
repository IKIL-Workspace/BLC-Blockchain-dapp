import React from "react";
import styled from "styled-components";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { cardStyles } from "./ReusableStyles";

import image from "../assets/logo.webp";

export default function BLCGICOCard() {
  const eventDate = new Date("2023-09-01T12:00:00");
  const now = new Date();
  const timeRemaining = eventDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <CardBoard>
      <ImageContainer>
        <img src={image} alt="Token Logo" />
      </ImageContainer>
      <CardContent>
        <h2>BLCG Tokensale</h2>
        <h5>BLCG Presale and Token Launch</h5>
        <InfoContainer>
          <IconContainer>
            <HiOutlineLocationMarker className="location-icon" />
            <p>Virtual Event</p>
          </IconContainer>
          <IconContainer>
            <AiOutlineClockCircle className="clock-icon" />
            <p>Event starts in:</p>
            <p>{days}d {hours}h {minutes}m</p>
          </IconContainer>
        </InfoContainer>
        <Paragraph>
          Join us for the highly anticipated BLC Tokensale event and launch. Discover the
          groundbreaking features of BLC Coin and learn about the tokenomics and allocation that
          make this event unique. Don't miss the opportunity to be part of this virtual event that
          promises to reshape the landscape of cryptocurrency.
        </Paragraph>
        <EventButton className="event">
          <button>Join Event</button>
          <button>Community</button>
        </EventButton>
       
      </CardContent>
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

  .event{
     gap:10px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 10rem;
    max-width: 10rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    margin: 0;
  }
`;

const Paragraph = styled.p`
  flex: 1;
`;

const EventButton = styled.div`
  display: flex;
  align-items: flex-end;

  button {
    padding: 0.5rem 1rem;
    background-color: #d4af37;
    color: black;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #b38927;
    }
  }
`;
