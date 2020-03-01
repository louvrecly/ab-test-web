import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  ButtonGroup,
  Button
} from '@material-ui/core';
import './HeadNav.css';

interface IHeadNavProps {
  title: string;
}

const HeadNav: React.FC<IHeadNavProps> = ({ title }: IHeadNavProps) => {
  return (
    <AppBar className="head-nav" position="absolute">
      <Toolbar>
        <IconButton
          className="menu nav-button"
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          三
        </IconButton>

        <ButtonGroup className="switch">
          <IconButton className="prev switch-button" aria-label="previous">
            &lt;
          </IconButton>

          <Button className="title" color="inherit">
            {title}
          </Button>

          <IconButton className="next switch-button" aria-label="next">
            &gt;
          </IconButton>
        </ButtonGroup>

        <IconButton
          className="search nav-button"
          edge="end"
          color="inherit"
          aria-label="search"
        >
          Q
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeadNav;
