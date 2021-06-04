import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minWidth: theme.spacing(25),
    minHeight: theme.spacing(25),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: 'white',
    zIndex: 1,
  },
}));

type Popup = (props: { children: JSX.Element }) => JSX.Element;

const Popup: Popup = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery<boolean>(theme.breakpoints.down('sm'));
  const history = useHistory();
  const backPathname = history.location.pathname.match(/\/.+\//)![0];
  const openPopup = () => {
    setOpen(true);
  };
  const closePopup = () => {
    history.push(backPathname || '/');
  };

  useEffect(() => {
    openPopup();
  }, []);

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={closePopup}
        maxWidth='sm'
        classes={{ paper: classes.root }}
      >
        <IconButton aria-label='close' className={classes.closeButton} onClick={closePopup}>
          <CloseIcon />
        </IconButton>
        {children}
      </Dialog>
    </div>
  );
};

export default Popup;
