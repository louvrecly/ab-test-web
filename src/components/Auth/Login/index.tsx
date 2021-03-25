import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from 'components/Auth/Layout';
import LoginForm from './LoginForm';
import { signupLinks } from 'components/Auth/constant';
import { REACT_APP_URL_PREFIX } from 'variables';
import classes from './styles.module.scss';

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <div className={classes.login}>
        <div className={classes.header}>
          <div className={classes.wrapper}>
            <img className={classes.logo} src={`${REACT_APP_URL_PREFIX}/logo.svg`} alt="9UP"/>
          </div>

          <p className={classes.text}>
            Talk to the World
          </p>
        </div>

        <LoginForm />

        <div className={classes.links}>
          {signupLinks.map(({ key, text }) => (
            <Link className={classes.link} key={key} to={`${REACT_APP_URL_PREFIX}/register/${key}`}>
              <button className={classes.button}>
                <div className={classes.wrapper}>
                  <img className={classes.icon} src={`${REACT_APP_URL_PREFIX}/icons/${key}.svg`} alt={text} />
                </div>

                <span className={classes.text}>{text}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
