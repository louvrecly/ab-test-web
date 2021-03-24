import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classes from './styles.module.scss';

interface AuthFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm<AuthFormData>();

  const submitAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ e });
  };

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleInput = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    let setValue: (value: string) => void;
    switch (key) {
      case 'email':
        setValue = setEmail;
        break;
      case 'password':
        setValue = setPassword;
        break;
      default:
        console.log('Incorrect handleInput key');
        return console.log({ key, value: event.target.value });
    }
    setValue(event.target.value);
  };

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
            onChange={handleInput('email')}
          />
        </li>

        <li className={classes.field}>
          <label className={classes.label} htmlFor="email">
            密碼
          </label>

          <input
            className={classes.input}
            type="password"
            name="password"
            ref={register}
            value={password}
            onChange={handleInput('password')}
          />
        </li>
      </ul>

      <button className={classes.button} type="submit" form="login">
        確認
      </button>
    </form>
  );
};

export default LoginForm;
