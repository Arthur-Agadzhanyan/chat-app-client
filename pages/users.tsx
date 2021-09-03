import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import withAuth from '../HOC/withAuth';
import { Context } from './_app';
import { Friend } from '../models/Friend';
import UsersContainer from '../components/UsersContainer/UsersContainer';
import UserCard from '../components/UserCard/UserCard';
import TopPanel from '../components/TopPanel/TopPanel';

const users = () => {
    const { store } = useContext(Context)

    const [users, setUsers] = useState<Friend[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)

    const [fetching, setFetching] = useState<boolean>(true)
    const [totalCount, setTotalCount] = useState<number>(0)

    const [advancedForm, setAdvancedForm] = useState({
        name:"",location: "", ageFrom: "14", ageTo: "80"
    })

    const [countries, setCountries] = useState<string[]>([])

    useEffect(() => {
        if (fetching) {
            console.log('fetching')
            store.getUsers("users",currentPage, 4,advancedForm.ageFrom, advancedForm.ageTo, advancedForm.location,advancedForm.name)
                .then(response => {
                    setUsers([...users, ...response.users])
                    setCurrentPage(prev => prev + 1)
                    setTotalCount(response.total)
                })
                .finally(() => {
                    setFetching(false)
                })
        }
        
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }

    }, [fetching])

    
    useEffect(() => {
        getCountries().then((data: any) => {
            setCountries(data)
        })
    }, [])

    const scrollHandler = (e: any) => {
        if (window) {
            if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && users.length < totalCount) {
                setFetching(true)
            }
        }
    }

    const getCountries = (): Promise<string[]> => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest()
            request.open("GET", "cities.json")
            request.onload = function () {
                try {
                    if (this.status == 200) {
                        const fetched = JSON.parse(this.response)
                        const response: string[] = []
                        fetched.map((country: any) => {
                            response.push(country.name)
                        })
                        // console.log(response.sort())
                        resolve(response.sort())
                    } else {
                        reject(`${this.status}: ${this.statusText}`)
                    }
                } catch (error: any) {
                    reject(error.message)
                }
            }

            request.onerror = function () {
                reject(`${this.status}: ${this.statusText}`)
            }

            request.send()
        })
    }

    const changeCountry = (e: any, newValue: string | null) => {  
        setAdvancedForm({ ...advancedForm, location: newValue as string})
        setCurrentPage(1)
        setUsers([])
        setFetching(true)
    }

    const changeAge = async (e: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
        setAdvancedForm({ ...advancedForm, [e.target.name as string]: e.target.value as string })
        setCurrentPage(1)
        setUsers([])
        setFetching(true)
    };

    return (
        <UsersContainer
            topPanel={
                <TopPanel title={"Поиск друзей"} changeAge={changeAge} changeCountry={changeCountry} countries={countries} advancedForm={advancedForm}/>
            }>

            {users && users.map((user: Friend, i: number) => (
                <UserCard store={store} key={`${user}_${i}`} user={user} />
            ))}
        </UsersContainer>
    );
}

export default observer(withAuth(users));