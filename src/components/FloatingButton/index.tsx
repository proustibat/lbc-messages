import React from 'react';
import { Fab, Theme } from '@material-ui/core';
import { Add, Home } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

export enum IconVariant {
  ADD = 'ADD',
  HOME = 'HOME',
}

export type FloatingButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  icon: IconVariant;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

export const FloatingButton = ({
  onClick,
  disabled,
  icon,
}: FloatingButtonProps) => {
  const classes = useStyles();
  const getAriaLabel = () => {
    return icon === IconVariant.ADD
      ? 'add'
      : icon === IconVariant.HOME
      ? 'home'
      : '';
  };
  return (
    <Fab
      className={classes.root}
      aria-label={getAriaLabel()}
      onClick={onClick}
      disabled={disabled}
      data-testid="floating-button"
    >
      {icon === IconVariant.ADD && <Add />}
      {icon === IconVariant.HOME && <Home />}
    </Fab>
  );
};

export default FloatingButton;
