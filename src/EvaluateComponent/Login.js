import React, { useEffect, useState } from 'react'
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {mapUser} from '../redux/UserSlice'

const Login = (props) => {
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const[userState, setState] = useState({email:"", password:""})

    const setEmail =(emailInput)=>{
        setState({...userState, email:emailInput})
    }

    const setPassword = (passwordInput)=>{
        setState({...userState, password:passwordInput})
        console.log(userState)
    }

    const formSubmit =(e)=>{
        e.preventDefault()
        dispatch(mapUser(userState))
        navigate("/evaluate")
    }

    return(
        <Form onSubmit={e => formSubmit(e)}>


                    <FloatingLabel label="Email" className="mb-3" controlId="email">
                        <Form.Control type="text" placeholder="email"  onChange={e => setEmail(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel label="Password" className="mb-3"controlId="password">
                        <Form.Control type="text" placeholder="password"  onChange={e => setPassword(e.target.value)} />
                    </FloatingLabel>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    )
}

export default Login