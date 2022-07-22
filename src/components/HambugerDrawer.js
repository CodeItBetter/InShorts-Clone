import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Categories from '../data/category';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SwipeableTemporaryDrawer({setCategory}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event) => {
      if (
        event &&
        event.type === 'keydown' &&
       ( event.key === 'Tab' ||
          event.key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>
            Categories
          </ListItem>
      </List>
      <Divider />
      <List>
        {Categories.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() =>{setCategory(text) }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}><MenuIcon /></Button>
          <ThemeProvider theme={theme}>
            <SwipeableDrawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
              {list("left")}
            </SwipeableDrawer>
        </ThemeProvider>
       </React.Fragment>
    </div>
  );
}