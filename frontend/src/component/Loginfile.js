import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './register.css'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import axios from 'axios';



const Loginfile = () => {
    const [data, Setdata] = useState({username: '',password:''})
    const navigate = useNavigate()

function handle (e) {
    const newdata= {...data}
    newdata[e.target.id]= e.target.value
    Setdata(newdata)
    console.log(newdata)
}

function handlesubmit (){
    // event.preventDefault()
   
    axios.post('http://localhost:5000/login',{
        username: data.username,
        password: data.password
    })
    .then(response => {console.log(response)
      if(data.error){
        toast.error("check correctly")
      }else{
        Setdata({})
        toast.success("login successful")
        navigate('/home')
      }
    
    })
    .catch(err => console.log(err))
    
}

  
  return (
    <div className='registerscreen'>
         <h1>Login</h1>


       <Form >
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id='username' onChange={(e)=> handle(e)} value={data.username}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id='password' onChange={(e)=>handle(e)} value={data.password} />
      </Form.Group>

      
      <Button variant="primary" onClick={handlesubmit} >
     Login
      </Button>
    </Form>
    <br/>
    <br/>

    <h3>New user</h3>
    <Link to={'/register'}>
    <Button variant="primary" type="submit">
     Register
      </Button></Link>
    </div>
  )
}

export default Loginfile