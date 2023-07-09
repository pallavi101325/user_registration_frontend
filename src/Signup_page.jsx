import { React,useEffect,useState } from "react";
import Base from "./Base.jsx";
import CustomNavbar from "./CustomNavbar.jsx";
import { Container,Card,CardBody,Form,FormGroup,CardHeader,Label, Input , Button, Row , Col, FormFeedback} from "reactstrap";

//import PInput  from 'react-phone-number-input/input'
import {signUp} from "./user_service";
import {toast} from "react-toastify";
const signup_page = () => {

    
 // eslint-disable-next-line react-hooks/rules-of-hooks
   const [data , setData] = useState({
       name:'',
       email:'',
       password:'',
       phone_no:''

   })
    // eslint-disable-next-line react-hooks/rules-of-hooks
   const [error, setError] = useState({
    errors : {},
    isError:false
   })
 
   const handleChange = (event,property ) => {
      setData({...data,[property]:event.target.value})

   }
   
   const resetData = ()=> {
    setData({

        name:'',
        email:'',
        password:'',
        phone_no:''
 
    })
   }
const submitForm = (event) => {
    event.preventDefault()
    //data validate

    //call server api for sending the data
    //axios -> server call
    //react-toastify -> for message displaying
    //server url: BASE_URL = http://localhost:8081/users/register
     
    //   

    signUp(data)
    .then((response) =>{
        console.log(response)
        console.log("success log")
        toast.success("user is registered successfully!!")
        setData({

            name:'',
            email:'',
            password:'',
            phone_no:''
     
        })
    })
    .catch((error) => {
        console.log("Error Log!")
        console.log(error);
        setError({
           errors : error,
           isError : true
        })
    })
}  

//how to access error message:  errorobj.response.data.password
// useState : (how to access here) => error.errors.response.data.name

    // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(()=>{
     console.log(data)
   }, [data]  )

    return (
        <Base>   
        <CustomNavbar/>
         <h1>SIGNUP PAGE</h1>
           <Container >
           <Row className="mt-4">
            <Col sm = {{size:6 , offset:3}}>

            <Card>
            <CardHeader>
            <h3>Fill in details to SignUp! </h3>
            </CardHeader>
            <CardBody>
                <Form onSubmit={submitForm}>
                    <FormGroup>
                        <Label for = "name">Enter Name</Label>
                        <Input
                        type = "text"
                        placeholder = "Enter you name here"
                        id = "name" 
                        onChange={(e) => handleChange(e,'name')}
                        value = {data.name}
                        invalid = {error.errors?.response?.data?.name ? true : false}
                        />
                        <FormFeedback>
                        {error.errors?.response?.data?.name} 
                        </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                        <Label for = "email">Enter Email</Label>
                        <Input
                        type = "email"
                        placeholder = "Enter you email here"
                        id = "email"
                        onChange={(e) => handleChange(e,'email')}
                        value = {data.email}
                        invalid = {error.errors?.response?.data?.email ? true : false}
                         />
                        <FormFeedback>
                        {error.errors?.response?.data?.email} 
                        </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                        <Label for = "password">Enter Password</Label>
                        <Input
                        type = "password"
                        placeholder = "Enter you password here"
                        id = "password" 
                        onChange={(e) => handleChange(e,'password')}
                        value = {data.password}
                        invalid = {error.errors?.response?.data?.password ? true : false}
                        />
                        <FormFeedback>
                        {error.errors?.response?.data?.password} 
                        </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                         <Label for = "phone">Enter Phone Number</Label>
                        <Input
                         type = "tel"
                        placeholder = "Enter you phone number here"
                        id = "phone" 
                        onChange={(e) => handleChange(e,'phone_no')}
                        value = {data.phone_no}
                        invalid = {error.errors?.response?.data?.phone_no? true : false}
                        />
                      <FormFeedback>
                        {error.errors?.response?.data?.phone_no} 
                        </FormFeedback>
                    </FormGroup>
                    <Container className = "text-center">
                        <Button color = "dark">Register</Button>
                        <Button onClick = {resetData} color = "secondary" className="ms-2">Reset</Button>
                    </Container>
                </Form>
            </CardBody>
            </Card>

            </Col> 
           </Row>
           </Container>
        </Base>
    )
}

export default signup_page;