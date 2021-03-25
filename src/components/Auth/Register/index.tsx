import React from 'react';
import AuthLayout from 'components/Auth/Layout';
import RegisterForm from './RegisterForm';
import classes from './styles.module.scss';

const Register: React.FC = () => {
  return (
    <AuthLayout>
      <div className={classes.register}>
        <RegisterForm></RegisterForm>
      </div>
    </AuthLayout>
  );
};

export default Register;
