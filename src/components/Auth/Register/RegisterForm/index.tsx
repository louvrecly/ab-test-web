import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthFormData, districtOptions, dobDayOptions, dobMonthOptions, dobYearOptions } from 'components/Auth/constant';
import classes from './styles.module.scss';
import clsx from 'clsx';

const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm<AuthFormData>();

  const submitAuth = (e: React.FormEvent<HTMLFormElement>) => {
    console.log({ e });
    console.log({ dob });
  };

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [dobDay, setDobDay] = useState<number>(9);
  const [dobMonth, setDobMonth] = useState<number>(8);
  const [dobYear, setDobYear] = useState<number>(1999);
  const [dob, setDob] = useState<Date>(new Date(dobYear, dobMonth, dobDay, 0, 0, 0, 0));
  const [district, setDistrict] = useState<string>('');
  const [terms, setTerms] = useState<boolean>(false);

  const valueSetter: { [key: string]: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<number>> } = {
    email: setEmail,
    password: setPassword,
    username: setUsername,
    dobDay: setDobDay,
    dobMonth: setDobMonth,
    dobYear: setDobYear,
    district: setDistrict,
  };

  const handleInput = (key: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const setValue = valueSetter[key];
    setValue(event.target.value as any);
  };

  const toggleTerms = () => setTerms(!terms);;

  useEffect(() => {
    setDob(new Date(dobYear, dobMonth, dobDay, 0, 0, 0, 0));
  }, [dobYear, dobMonth, dobDay]);

  return (
    <form
      id="register"
      className={classes.form}
      onSubmit={handleSubmit(submitAuth)}
    >
      <h1 className={classes.title}>
        登記
      </h1>

      <ul className={classes.fields}>
        <li className={classes.field}>
          <label className={classes.label} htmlFor="email">
            登入電郵
          </label>

          <input
            className={classes.input}
            type="email"
            id="email"
            name="email"
            ref={register}
            value={email}
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
            id="password"
            name="password"
            ref={register}
            value={password}
            onChange={handleInput('password')}
          />
        </li>

        <li className={classes.field}>
          <label className={classes.label} htmlFor="username">
            帳戶名稱
          </label>

          <input
            className={classes.input}
            type="text"
            id="username"
            name="username"
            ref={register}
            value={username}
            onChange={handleInput('username')}
          />
        </li>

        <li className={classes.field}>
          <label className={classes.label} htmlFor="dobYear">
            出生日期
          </label>

          <div className={classes.combo}>
            <select
              className={classes.select}
              id="dobYear"
              name="dobYear"
              ref={register}
              value={dobYear}
              onChange={handleInput('dobYear')}
            >
              {dobYearOptions.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
            </select>

            <span className={classes.delimiter}>/</span>

            <select
              className={classes.select}
              id="dobMonth"
              name="dobMonth"
              ref={register}
              value={dobMonth}
              onChange={handleInput('dobMonth')}
            >
              {dobMonthOptions.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
            </select>

            <span className={classes.delimiter}>/</span>

            <select
              className={classes.select}
              id="dobDay"
              name="dobDay"
              ref={register}
              value={dobDay}
              onChange={handleInput('dobDay')}
            >
              {dobDayOptions.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
            </select>
          </div>
        </li>

        <li className={classes.field}>
          <label className={classes.label} htmlFor="district">
            地區
          </label>

          <select
            className={classes.select}
            id="district"
            name="district"
            ref={register}
            value={district}
            onChange={handleInput('district')}
          >
            {districtOptions.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
          </select>
        </li>

        <li className={classes.field}>
          <div className={clsx([
            classes.checker,
            terms && classes.checked
          ])}>
            <input
              className={classes.checkbox}
              type="checkbox"
              id="terms"
              name="terms"
              ref={register}
              checked={terms}
              onChange={toggleTerms}
            />

            <label className={classes.label} htmlFor="terms">
              我同意《使用條款及私隱政策》
            </label>
          </div>
        </li>
      </ul>

      <button className={classes.button} type="submit" form="register">
        確認
      </button>
    </form>
  );
};

export default RegisterForm;
