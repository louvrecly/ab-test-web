import { firestore } from 'firebase';

/* components */
export type DrawerSide = 'top' | 'right' | 'bottom' | 'left';

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
