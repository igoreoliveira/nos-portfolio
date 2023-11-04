"use client";

import { Button, Menu, MenuItem } from "@mui/material";
import { styled } from "@stitches/react";
import { useState } from "react";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

const FixedHeader = styled("div", {
  height: "48px",
  position: "sticky",
  width: "100%",
  background: "#fff9f2",
  top: "0px",
  zIndex: "2",
  display: "flex",
  justifyContent: "end",
});

const Drawer = styled("div", {
  position: "fixed",
  top: "0",
  right: "-250px",
  width: "250px",
  height: "100vh",
  background: "#fff9f2",
  borderLeft: "1px solid #5d3b143d",
  zIndex: "2",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "right ease .3s",

  variants: {
    active: {
      true: {
        right: "0",
      },
    },
  },
});

const Item = styled(MenuItem, {
  width: "100%",
  justifyContent: "center",
});

const Overlay = styled("div", {
  display: "none",
  width: "100vw",
  height: "100vh",
  position: "fixed",
  background: "rgba(0,0,0,0.5)",
  zIndex: "1",

  variants: {
    active: {
      true: {
        display: "block",
      },
    },
  },
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClose = (
    event: React.MouseEvent<HTMLLIElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    setIsOpen(false);
    const target = event.target as HTMLElement;
    const element = document.getElementById(
      `${target.innerText.toLowerCase()}`
    );

    console.log(`${target.innerText.toLowerCase()}`);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  return (
    <FixedHeader>
      <Overlay onClick={handleClose} active={isOpen} />
      <Button onClick={handleClick}>
        <LunchDiningIcon sx={{ color: "#5d3b14" }} />
      </Button>
      <Drawer active={isOpen}>
        <Item onClick={handleClose}>Sobre</Item>
        <Item onClick={handleClose}>Projetos</Item>
        <Item onClick={handleClose}>Contato</Item>
      </Drawer>
    </FixedHeader>
  );
}
