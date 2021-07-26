import { observer } from 'mobx-react-lite';
import React from 'react';
import withAuth from '../HOC/withAuth';

const settings = () => {
    return (
        <div>
            Settings Page
        </div>
    );
}

export default observer(withAuth(settings));
