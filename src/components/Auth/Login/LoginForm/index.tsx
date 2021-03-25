import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IRootState } from 'store';
import { logIn } from 'utils/firebase';
import { AuthFormData } from 'components/Auth/constant';
import { REACT_APP_URL_PREFIX } from 'variables';
import classes from './styles.module.scss';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const user = useSelector((state: IRootState) => state.auth.user);
  const history = useHistory();

  const valueSetter: { [key: string]: React.Dispatch<React.SetStateAction<string>> } = {
    email: setEmail,
    password: setPassword
  };

  const handleInput = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const setValue = valueSetter[key];
    setValue(event.target.value);
  };

  const { register, handleSubmit } = useForm<AuthFormData>();

  const submitAuth = async (e: AuthFormData) => {
    setLoading(true);
    const { email, password } = e;

    try {
      await logIn(email, password);
    } catch (err) {
      console.log('Error: ', err.message);
    } finally {
      setLoading(false);
    }
  };

  /* Redirect to main page on successful login */
  useEffect(() => {
    if (user) {
      const pathname = REACT_APP_URL_PREFIX as string;
      history.push(pathname);
    }
  }, [user]); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <form
      id="login"
      className={classes.form}
      onSubmit={handleSubmit(submitAuth)}
    >
      <h1 className={classes.title}>
        登入
      </h1>

      <ul className={classes.fields}>
        <li className={classes.field}>
          <label className={classes.label} htmlFor="email">
            登入電郵
          </label>

          <input
            className={classes.input}
            type="email"
            name="email"
            ref={register}
            value={email}
            required
            onChange={handleInput('email')}
          />
        </li>

        <li className={classes.field}>
          <label className={classes.label} htmlFor="password">
            密碼
          </label>

          <input
            className={classes.input}
            type="password"
            name="password"
            ref={register}
            value={password}
            required
            onChange={handleInput('password')}
          />
        </li>
      </ul>

      <button className={classes.button} type="submit" form="login" disabled={loading}>
        確認
      </button>
    </form>
  );
};

export default LoginForm;
