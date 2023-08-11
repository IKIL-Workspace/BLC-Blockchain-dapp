import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";
import { ConnectWallet } from "@thirdweb-dev/react";
import image from "../assets/logo.webp";
import { NavLink } from "react-router-dom"; // Import NavLink



export default function SideBar() {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
          <img src={image} alt="" width={"100px"}/>
            <span>BLCG</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
          <ul>
            <li>
              <NavLink
                to="/"
                isActive={(match, location) =>
                  match || location.pathname === "/"
                }
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                <MdSpaceDashboard />
                <span> Wallet</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/swap"
                isActive={(match, location) =>
                  match || location.pathname === "/swap"
                }
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                <RiDashboard2Fill />
                <span> Swap</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/stake"
                isActive={(match, location) =>
                  match || location.pathname === "/stake"
                }
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                <FaAddressCard />
                <span> Stake </span>
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/learning"
                isActive={(match, location) =>
                  match || location.pathname === "/learning"
                }
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                <GiTwirlCenter />
                <span> Learning Center</span>
              </NavLink>
            </li>
          </ul>
          </div>
        </div>
        <div className="logout">
        <p className="price">
          BLCG: $X.XX
        </p>
        </div>
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
        <ul>
            <li>
              <NavLink
                to="/"
                isActive={(match, location) =>
                  match || location.pathname === "/"
                }
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                <MdSpaceDashboard />
                <span> Wallet</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/swap"
                isActive={(match, location) =>
                  match || location.pathname === "/swap"
                }
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                <RiDashboard2Fill />
                <span> Swap</span>
              </NavLink>
            </li>
           
            <li>
              <NavLink
                to="/learning"
                isActive={(match, location) =>
                  match || location.pathname === "/learning"
                }
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                <GiTwirlCenter />
                <span> Learning Center</span>
              </NavLink>
            </li>
          </ul>
        </div>
        
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #1a1919;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Vidaloka", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }

        .active {
          background-color: #ffc107;
          color: black;
          padding: 7px;
          border-radius: 10px;
          Nav {
            color: black;
          }
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    background-color: #000000;
    &:hover {
      background-color: #d2a710;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
    
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 0rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
        .active {
          background-color: #ffc107;
          color: black;
          padding: 7px;
          border-radius: 10px;
   
        a {
          color: black;
        }
      }
    }
  }
`;
