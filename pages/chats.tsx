import React, { useContext } from 'react';
import notWithAuth from '../HOC/notWithAuth';
import { Context } from './_app';

const chats = () => {
    const {store} = useContext(Context)

    return (
        <div>
            {JSON.stringify(store)}
        </div>
    );
}

export default notWithAuth(chats);
