import { useState } from "react";
import Base from "./Base";
import CustomNavbar from "./CustomNavbar";
import { Container,Row,Col,Card,CardHeader,CardBody,Form,FormGroup,Label,Input,Button} from "reactstrap";
import {toast} from "react-toastify";
import { loginUser } from "./user_service";
import {doLogin} from "./auth/index.js";
import { useNavigate } from "react-router-dom";
const Login_page = () => {

    const navigate = useNavigate();

 const [loginDetails, setLoginDetails] = useState({
    email:'',
    password:''
  })
   
const handleChange = (event, property) => {
   let actualValue =  event.target.value;
   setLoginDetails({
    ...loginDetails ,
    [property] : actualValue
   })
}
//we will use local storage of the browser to store the token to send the token on private routes , in local storage the data is lost lost even if you close/refresh tab
const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(loginDetails);

    if((loginDetails.email.length === 0) || (loginDetails.password.length===0)){
        console.log("empty check!")
        toast.error("username or password is required");
        return;
    }
    loginUser(loginDetails)
    .then((jwtToken)  => {
        console.log(jwtToken)
        toast.success("user successfully logged in!")

       // save token to localstorage
       doLogin(jwtToken , () =>{
        console.log("data is stored in the local storage");
        //redirect to user dashboard page
         navigate("/private/profile"); 
    
       })

        setLoginDetails({
            email:'',
            password:''
        })
    })
    .catch(error => {
        console.log(error)
        if(error.response.status === 400){
            console.log("logging :400 error")
            toast.error(error.response.data)
        }
        else{
            toast.error("something went wrong on server!")
        }
    })

}

const handleReset = () =>{
    setLoginDetails({
        email :'',
        password:''
    })
}

    return (
        <Base>
         <CustomNavbar/>
         <Container >
           <Row className="mt-4">
            <Col sm = {{size:6 , offset:3}}>

            <Card>
            <CardHeader>
            <h3>Fill in details to Login! </h3>
            </CardHeader>
            <CardBody>
                <Form
                 onSubmit={handleFormSubmit}
                 >
                    <FormGroup>
                        
                        <Label for = "email">Enter Email</Label>
                        <Input
                        type = "email"
                        placeholder = "Enter you email here"
                        id = "email"
                        value = {loginDetails.email}
                        onChange={(e) => handleChange(e, 'email')} />
                        <Label for = "password">Enter Password</Label>
                        <Input
                        type = "password"
                        placeholder = "Enter you password here"
                        id = "password"
                        value = {loginDetails.password} 
                        onChange={(e) => handleChange(e, 'password')}/>
                    </FormGroup>
                    <Container className = "text-center">
                        <Button color = "dark">
                            Login
                        </Button>
                        <Button color = "secondary"
                         className="ms-2"
                         onClick={handleReset}>Reset</Button>
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
export default Login_page;