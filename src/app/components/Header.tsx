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

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <FixedHeader>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <LunchDiningIcon sx={{ color: "#5d3b14" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Sobre</MenuItem>
        <MenuItem onClick={handleClose}>Projetos</MenuItem>
        <MenuItem onClick={handleClose}>Contato</MenuItem>
      </Menu>
    </FixedHeader>
  );
}
