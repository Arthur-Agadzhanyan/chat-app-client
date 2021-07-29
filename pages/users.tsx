import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import withAuth from '../HOC/withAuth';
import { Context } from './_app';

const users = () => {
    const {store} = useContext(Context)
    
    useEffect(()=>{
        console.log("aboba")
        store.getAllUsers()
    },[])

    return (
        <div>
            
        </div>
    );
}

export default observer(withAuth(users));
