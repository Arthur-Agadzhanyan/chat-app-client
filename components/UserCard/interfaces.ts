import Store from '../../store/store';
import { Friend } from './../../models/Friend';
export interface UserCardProps {
    user: Friend,
    friend?: boolean,
    store: Store
}