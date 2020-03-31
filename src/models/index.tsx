import { firestore } from 'firebase';

/* api */
export interface Thread {
  id?: string;
  is_active: boolean;
  title: string;
  user_id: string;
  location: firestore.GeoPoint;
  color_code?: 'Y' | 'B';
  timestamp: firestore.Timestamp;
  bookmarked_by_users: Array<string>;
}

export interface User {
  id?: string;
  username: string;
  email: string;
  type: 'admin' | 'member';
  is_active?: boolean;
  self_voice_url?: string;
  bookmarked_voices?: Array<string>;
  history?: Array<string>;
  bookmarked_threads?: Array<string>;
  followed_members?: Array<string>;
  followers?: Array<string>;
  blocked_members?: Array<string>;
}
