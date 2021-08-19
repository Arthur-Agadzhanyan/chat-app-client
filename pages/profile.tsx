import { observer } from 'mobx-react-lite';
import React from 'react';
import withAuth from '../HOC/withAuth';

const profile = () => {
    return (
        <div>
            ggg
        </div>
    );
}

export default observer(withAuth(profile));
