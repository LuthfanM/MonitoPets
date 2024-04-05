"use client";
import PromotionalSection from "@/containers/home/PromotionalSection";
import React from "react";
import SearchBar from "../Inputs/SearchBar";
import CustomButton from "../Buttons/CustomButton";
import { FaBars, FaChevronDown, FaSearch } from "react-icons/fa";

const Header = ({ extended }: { extended?: boolean }) => {
  const headerContent = (
    <header>
      <nav>
        <div className="navChild">
          <div className="navchild2">
            <FaBars className="burgerMenuButton" />
            <div style={{ gap: "48px" }}>
              <img
                src="/images/logo.svg"
                alt="Logo"
                style={{ height: "40px" }}
              />
            </div>
            <FaSearch className="magnifyIcon" />
            <ul className="navList">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "130px",
            }}
          >
            <SearchBar />
            <CustomButton
              text="Join the community"
              onClick={() => console.log("clicked")}
            />
            <div className="dropdownLang">
              <img
                src="/images/vnd_frame.svg"
                alt="vnd"
                style={{ height: "21px", width: "21px" }}
              />
              <span>VND</span>
              <FaChevronDown />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );

  return (
    <div className="wrapperHeader">
      {headerContent}
      {extended && <PromotionalSection />}
    </div>
  );
};

export default Header;
