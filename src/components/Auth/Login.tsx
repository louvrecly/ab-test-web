import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from 'components/Auth/LoginForm';
import { signupLinks } from './constant';
import classes from './styles.module.scss';

const Login: React.FC = () => {
  return (
    <div className={classes.auth}>
      <div className={classes.wrapper}>
        <img className={classes['background-1']} src="/ab-test-web/auth/login-background-1.png" alt="" />

        <img className={classes['background-2']} src="/ab-test-web/auth/login-background-2.png" alt="" />
      </div>

      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.wrapper}>
            <img className={classes.logo} src="/ab-test-web/logo.svg" alt="9UP"/>
          </div>

          <p className={classes.text}>
            Talk to the World
          </p>
        </div>

        <LoginForm />

        <div className={classes.links}>
          {signupLinks.map(({ key, text }) => (
            <Link className={classes.link} to={`/ab-test-web/register/${key}`}>
              <button className={classes.button}>
                <div className={classes.wrapper}>
                  <img className={classes.icon} src={`/ab-test-web/icons/${key}.svg`} alt={text} />
                </div>

                <span className={classes.text}>{text}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
