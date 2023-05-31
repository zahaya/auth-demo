import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Backdrop.module.css'


const backdropRoot = document.querySelector('#backdrop-root')

const Backdrop = (props) => {


  return ReactDOM.createPortal(
    <div {...props}
      className={`${classes.Backdrop} ${props.className}`}>
      {props.children}
    </div>, backdropRoot
  )
};

export default Backdrop;