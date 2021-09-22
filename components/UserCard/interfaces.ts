import UsersStore from '../../store/users';
import { Friend } from './../../models/Friend';
export interface UserCardProps {
    user: Friend,
    friend?: boolean,
    store: UsersStore
}