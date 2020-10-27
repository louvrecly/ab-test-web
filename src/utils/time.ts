import { firestore } from 'firebase';
import moment from 'moment';

export function sanitizedDate(timestampObj: {
  _seconds: number;
  _nanoseconds: number;
}) {
  const { _seconds, _nanoseconds } = timestampObj;
  const timestamp = new firestore.Timestamp(_seconds, _nanoseconds);
  return moment(timestamp.toDate()).fromNow();
}

export function getTimestampJson() {
  const milliseconds = Date.now();
  const _seconds = Math.floor(milliseconds / 1000);
  const _nanoseconds = (milliseconds - _seconds * 1000) * 1000000;
  const timestamp = { _seconds, _nanoseconds };
  return timestamp;
}
