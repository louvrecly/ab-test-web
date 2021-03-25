import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signUp } from 'utils/firebase';
import { AuthFormData, districtOptions, dobDayOptions, dobMonthOptions, dobYearOptions } from 'components/Auth/constant';
import { REACT_APP_URL_PREFIX } from 'variables';
import clsx from 'clsx';
import classes from './styles.module.scss';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [dobDay, setDobDay] = useState<number>(9);
  const [dobMonth, setDobMonth] = useState<number>(8);
  const [dobYear, setDobYear] = useState<number>(1999);
  const [dob, setDob] = useState<Date>(new Date(dobYear, dobMonth, dobDay, 0, 0, 0, 0));
  const [district, setDistrict] = useState<string>('');
  const [terms, setTerms] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

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

  const { register, handleSubmit } = useForm<AuthFormData>();

  const submitAuth = async (e: AuthFormData) => {
    setLoading(true);
    console.log({ dob }); // TODO: Validate dob
    const { email, password } = e;
    try {
      await signUp(email, password);
      const pathname = `${REACT_APP_URL_PREFIX}/login`;
      history.push(pathname);
    } catch (err) {
      console.log('Error: ', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    /* Update dob on change in dobYear, dobMonth or dobDay */
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
            id="password"
            name="password"
            ref={register}
            value={password}
            required
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
            required
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
              required
              onChange={toggleTerms}
            />

            <label className={classes.label} htmlFor="terms">
              我同意《使用條款及私隱政策》
            </label>
          </div>
        </li>
      </ul>

      <button className={classes.button} type="submit" form="register" disabled={loading}>
        確認
      </button>
    </form>
  );
};

export default RegisterForm;
