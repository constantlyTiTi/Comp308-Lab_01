import React, { useEffect, useState } from 'react'
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import {mapCourseEva} from '../redux/EvaluateSlice'
import { useNavigate } from 'react-router-dom';

const Evaluate = (props) => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const courseEve = {
        courseCode:"",
        courseName:"",
        comment:"",
        favoriteAssignment:"",
        favoriteTopic:""
    }

    const[courseEveState, setState] = useState(courseEve)

    const setCode =(input)=>{
        setState({...courseEveState, courseCode:input})
    }

    const setName =(input)=>{
        setState({...courseEveState, courseName:input})
    }

    const setComment =(input)=>{
        setState({...courseEveState, comment:input})
    }

    const setFavoriteAssignment =(input)=>{
        setState({...courseEveState, favoriteAssignment:input})
    }

    const setFavoriteTopic =(input)=>{
        setState({...courseEveState, favoriteTopic:input})
    }

    const formSubmit =(e)=>{
        e.preventDefault()
        dispatch(mapCourseEva(courseEveState))
        navigate("/thankyou")
    }

    return(
        <Form onSubmit={e => formSubmit(e)}>

                    <FloatingLabel label="Course Code" className="mb-3" controlId="code">
                        <Form.Control type="text" placeholder='code' onChange={e => setCode(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel label="Course Name" className="mb-3" controlId="name">
                        <Form.Control type="text" placeholder='name' onChange={e => setName(e.target.value)} />
                    </FloatingLabel>
     
                    <FloatingLabel label="Student email" className="mb-3" controlId="email">
                        <Form.Control type="text" placeholder='email' value={user.email} disabled />
                    </FloatingLabel>
          
                    <FloatingLabel label="Course Comment" className="mb-3" controlId="comment">
                        <Form.Control type="text" placeholder='comment' as="textarea" rows={3} style={{ height: '100px' }} onChange={e => setComment(e.target.value)} />
                    </FloatingLabel>
               
                    <FloatingLabel label="Favorite Assignment" className="mb-3" controlId="setFavoriteAssignment">
                        <Form.Control type="text" placeholder='favorite' onChange={e => setFavoriteAssignment(e.target.value)} />
                    </FloatingLabel>

                    <FloatingLabel label="Favorite Topic" className="mb-3" controlId="setFavoriteTopic">
                        <Form.Control type="text" placeholder='topic' onChange={e => setFavoriteTopic(e.target.value)} />
                    </FloatingLabel>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    )
}

export default Evaluate