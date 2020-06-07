import React from 'react';
import classes from './styles.module.scss';
import { threadFormFields } from 'components/ThreadForm/constant';

const ThreadForm: React.FC = () => {
  return (
    <div className={classes['thread-form']}>
      <div className={classes.container}>
        <div className={classes.handle} />

        <form className={classes.form}>
          <ul className={classes.fields}>
            {threadFormFields.map(field => (
              <li className={classes.field} key={field.name}>
                <label className={classes.label} htmlFor={field.name}>
                  {field.label}：
                </label>

                <input
                  className={classes.input}
                  name={field.name}
                  type={field.type}
                />
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ThreadForm;
