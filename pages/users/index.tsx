import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import React, { MouseEvent, useContext, useEffect, useState } from 'react';
import withAuth from '../../HOC/withAuth';
import Link from "next/link"
import { Context } from '../_app';
import { User } from '../../models/User';

const users = () => {
    const {store} = useContext(Context)
    
    const [users, setUsers] = useState([])
    
    useEffect(()=>{
        store.getAllUsers().then(response=>setUsers(response))
    },[])

    useEffect(()=>{
        document.addEventListener('scroll', scrollHandler)

        return function(){
            document.removeEventListener("scroll",scrollHandler)
        }
    },[])

    const scrollHandler = (e: Event)=>{
        console.log("scroll")
    }

    if(store.isLoading){
        return <h1>Loading</h1>
    }

    return (
        <div>
            {users.map((user: User)=>{
                <li>{user.firstName} {user.lastName}</li>
            })}
            <Link href='/users/3'><a>aboba</a></Link>
        </div>
    );
}

export default observer(withAuth(users));
