import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ActivationAlert from '../components/VerificationAlert/VerificationAlert';
import notWithAuth from '../HOC/notWithAuth';
import { Context } from './_app';

const verify = () => {
    const {store} = useContext(Context)
    
    return (
        <div>
            {/* {JSON.stringify(store)} */}
            <ActivationAlert store={store} />
        </div>
    );
}

export default observer(notWithAuth(verify));
