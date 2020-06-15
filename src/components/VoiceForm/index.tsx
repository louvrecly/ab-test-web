import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import VoicePlayer from 'components/VoicePlayer';
import { RiFileAddLine } from 'react-icons/ri';
import { FaMusic, FaCheck } from 'react-icons/fa';
import { Thread } from 'models';
import classes from './styles.module.scss';

interface IVoiceFormProps {
  thread?: Thread;
}

const VoiceForm: React.FC<IVoiceFormProps> = (props: IVoiceFormProps) => {
  const [value, setValue] = useState<string>(
    props.thread ? props.thread.title : ''
  );

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes['voice-form']}>
      <div className={classes.container}>
        <div className={classes.handle} />

        <form className={classes.form}>
          <ul className={classes.fields}>
            {props.thread ? null : (
              <li className={classes.field}>
                <label className={classes.label} htmlFor="channel">
                  選擇版區：
                </label>

                <select className={classes.select} name="channel">
                  <option className={classes.option} value="吹水台">
                    吹水台
                  </option>
                </select>
              </li>
            )}

            <li className={classes.field}>
              <label className={classes.label} htmlFor="thread">
                新貼題目：
              </label>

              <input
                className={classes.input}
                name="thread"
                type="text"
                value={value}
                onChange={handleInput}
              />
            </li>
          </ul>

          <VoicePlayer />

          <div className={classes.control}>
            <div className={classes.buttons}>
              <IconButton className={classes.new} aria-label="new">
                <RiFileAddLine />
              </IconButton>

              <IconButton className={classes.music} aria-label="music">
                <FaMusic />
              </IconButton>
            </div>

            <IconButton className={classes.submit} aria-label="submit">
              <FaCheck />
            </IconButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VoiceForm;
