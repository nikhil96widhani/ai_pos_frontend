'use client'
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MiniDrawer from "@/components/base_theme/sidebar";
import DrawerContent from "@/components/base_theme/sidebar_menu_items";
import PrimarySearchAppBar from "@/components/base_theme/navbar";

export default function BaseWithDrawer(props) {
  const [clickCount, setClickCount] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerClick = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setTimeout(() => {
      setClickCount(clickCount + 1);
      setIsDrawerOpen(!isDrawerOpen);
    }, 70);
  };


  return (
    <div>
      <MiniDrawer swipableDrawerToggle={handleDrawerClick} main_content={props.main_content} admin={props.admin}/>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onClick={handleDrawerClick}
        onKeyDown={handleDrawerClick}
      >
       <DrawerContent anchor="left" marginT={8} />
      </Drawer>
    </div>
  );
}
