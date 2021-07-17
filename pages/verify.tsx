import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import VerificationAlert from '../components/Verification/VerificationAlert/VerificationAlert';
import withAuth from '../HOC/withAuth';
import { Context } from './_app';
import { useRouter } from "next/router";

const verify = () => {
    const {store} = useContext(Context)
    const Router = useRouter()

    if(store.user.verified){
        Router.replace("/chats")
    }
    return (
        <div>
            <VerificationAlert store={store} />
        </div>
    );
}

export default observer(withAuth(verify));
