import React, { useContext } from 'react';
import notWithAuth from '../HOC/notWithAuth';
import { Button } from "@material-ui/core"
import { Context } from './_app';
import { observer } from 'mobx-react-lite';
import ActivationAlert from '../components/ActivationAlert/ActivationAlert';

const chats = () => {
    const {store} = useContext(Context)

    if(!store.user.isActivated){
        return (
                <ActivationAlert store={store}/>
        )
    }

    return (
        <div>
            {JSON.stringify(store)}
            <Button onClick={()=>store.logout()}>Выход</Button>
        </div>
    );
}

export default observer(notWithAuth(chats));
