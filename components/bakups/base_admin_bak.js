'use client'
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MiniDrawer from "@/components/base_theme/sidebar";
import DrawerContent from "@/components/base_theme/sidebar_menu_items";

export default function BaseWithDrawer(props) {
  const [state, setState] = React.useState({
    left: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
    const anchor = 'left'
  return (
    <div>
     <MiniDrawer swipableDrawerToggle={toggleDrawer('left', true)} main_content={props.main_content}/>
        <React.Fragment key={anchor}>
          {/*<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>*/}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <DrawerContent anchor="left" toggleDrawer={toggleDrawer} MarginT={8} />
          </Drawer>
        </React.Fragment>
    </div>
  );
}