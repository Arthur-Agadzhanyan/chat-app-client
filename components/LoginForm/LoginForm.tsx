import { Button, FormControl, makeStyles, TextField,Divider } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Context } from '../../pages/_app';

interface Form{
    email: string,
    password: string
}

const useStyles = makeStyles({
    form:{
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      width: "396px",
      boxShadow: '0px 0px 16px #ccc'
    },
    formInput:{
        margin: '0px 0px 20px 0px'
    },
    formButton:{
        fontSize: 17
    },
    formLine:{
        margin: '20px 0px'
    }
  });

const LoginForm = () => {
    const classes = useStyles()

    const { store } = useContext(Context)

    const [form,setForm] = useState<Form>({
        email: "", password:""
    })
    const [errors, setErrors] = useState({
        email: false, password: false
    })

    const getIntoTheAccount = (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({email: false, password: false})
        
        if(!form.email.trim()){
            return setErrors({...errors, email: true})
        }
        if(!form.password.trim()){
            return setErrors({...errors, password: true})
        }
        
        store.login(form.email, form.password)
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <FormControl className={classes.form}>
            <form  onSubmit={getIntoTheAccount}>
                <TextField
                    className={classes.formInput}
                    fullWidth
                    id="email"
                    name="email"
                    type='email'
                    label="Адрес электронной почты"
                    variant='outlined'
                    value={form.email}
                    onChange={changeHandler}
                    error={errors.email}
                />
                <TextField
                    className={classes.formInput}
                    fullWidth
                    id="password"
                    name="password"
                    label="Пароль"
                    type='password'
                    variant='outlined'
                    value={form.password}
                    onChange={changeHandler}
                    error={errors.password}
                />
                <Button className={classes.formButton} color="primary" variant="contained" fullWidth type="submit" disableElevation>
                    Вход
                </Button>
                <Divider className={classes.formLine}/>
                <Button className={classes.formButton} color="secondary" variant="contained" fullWidth type="submit" disableElevation>
                    Зарегестрироваться
                </Button>
            </form>
        </FormControl>
    );
}

export default LoginForm;
