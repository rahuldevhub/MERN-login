import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './register.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'

const Register = () => {
    const [data, Setdata] = useState({username: '',password:''})
const navigate = useNavigate()
    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        Setdata(newdata)
        console.log(newdata)
    }

    function handlesubmit (e){
        e.preventDefault()
        axios.post('http://localhost:5000/register',{
            username:data.username,
            password: data.password
        })
        .then(result => {console.log(result)
        if(data.error){
          toast.error(data.error)
        }else{
          Setdata({})
          toast.success("Register successful")
          navigate('/login')
        }
      })
        .catch(err => console.log(err))
    } 
  return (
    <div className='registerscreen'>
        <h1>Create new Account</h1>
       <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>handle(e)} value={data.username} id="username"/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e)=>handle(e)} value={data.password} id="password"/>
      </Form.Group>

      
      <Button variant="primary" onClick={handlesubmit}>Register</Button>
    </Form>
    <br/>
    <br/>

    <h3>Already have an account</h3>
    <Link to={'/login'}>
    <Button variant="primary" type="submit">
     Login
      </Button></Link>
        
    </div>
  )
}

export default Register