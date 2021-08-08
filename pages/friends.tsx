import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import UsersContainer from '../components/UsersContainer/UsersContainer';
import withAuth from '../HOC/withAuth';
import { Context } from './_app';

const friends = () => {
    const {store} = useContext(Context)

    return (
        <UsersContainer>
            
        </UsersContainer>
    );
}

export default observer(withAuth(friends));
