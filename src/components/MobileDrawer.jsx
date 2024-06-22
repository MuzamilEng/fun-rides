import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import { ListItemText } from "@mui/material";
import { useGlobalContext } from "../context/GlobalState";
import { linkData } from "../data";
import { Link, useLocation } from "react-router-dom";

export default function MobileDrawer() {
  const { toggleDrawer, state } = useGlobalContext();
  const location = useLocation(); // Get the current location

  const list = () => (
    <Box
      sx={{ width: 250 }} // Set the width for the right drawer
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box display="flex" justifyContent="flex-end" p={1}>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {linkData?.map((text, index) => (
          <ListItem key={text.url} disablePadding>
            <ListItemButton
              component={Link}
              to={text.url}
              selected={location.pathname === text.url} // Highlight the selected item
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="left" // Change anchor to "right"
        open={state.top} // You may want to rename this state to be more descriptive, like state.right
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
