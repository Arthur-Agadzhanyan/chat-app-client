import React, { useContext } from 'react';
import ActivationAlert from '../components/ActivationAlert/ActivationAlert';
import { Context } from './_app';

const activate = () => {
    const {store} = useContext(Context)
    return (
        <>
            <ActivationAlert store={store} />
        </>
    );
}

export default activate;
