import { Button } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import withAuth from '../HOC/withAuth';
import { Context } from './_app';

const settings = () => {
    const {store} = useContext(Context)

    function changeTheme(color: ColorResult){
        store.theme.changeMain(color.hex)
    }

    return (
        <div>
            Settings Page
            {/* <Button onClick={changeTheme}>Change</Button> */}
            <SketchPicker
                color={store.theme.theme.palette.primary.main}
                onChange={ changeTheme }
            />
        </div>
    );
}

export default observer(withAuth(settings));
