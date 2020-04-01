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
