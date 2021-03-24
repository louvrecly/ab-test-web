import React from 'react';
import classes from './styles.module.scss';

interface IAuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayoutProps> = (props: IAuthLayoutProps) => {
  return (
    <div className={classes.auth}>
      <div className={classes.background}></div>

      {props.children}
    </div>
  );
};

export default AuthLayout;
