import React, { useContext } from 'react';
import notWithAuth from '../HOC/notWithAuth';
import { Button } from "@material-ui/core"
import { Context } from './_app';
import { observer } from 'mobx-react-lite';

const chats = () => {
    const {store} = useContext(Context)

    return (
        <div>
            {JSON.stringify(store)}
            <Button onClick={()=>store.logout()}>Выход</Button>
        </div>
    );
}

export default observer(notWithAuth(chats));
