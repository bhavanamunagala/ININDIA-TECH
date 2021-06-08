import React from 'react';



import {
  Button,

  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
  ButtonGroup
} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Card, CardBody,CardText, FormControl, FormLabel,FormCheck } from 'react-bootstrap';

class Venue extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      buttonDisabled: false,
      message: '',
      isError: '',
      visible: false,
      fields: {},
      errors: {},
      size: ''

    }
    this.handleChange = this.handleChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateConfirmPassword=this.validateConfirmPassword.bind(this);
    this.clearEmailError = this.clearEmailError.bind(this);
    this.clearPasswordError = this.clearPasswordError.bind(this);
    this.clearConfirmPasswordError=this.clearConfirmPasswordError.bind(this);
    this.onSubmitHandler=this.onSubmitHandler.bind(this);
  };
  onDismiss() {
    this.setState({ visible: false, isLogin: '' });
  }
  handleChange = e => {
    let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
      this.setState({
        size: e.target.value
      });


  }


  clearEmailError = e =>  {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;



    if(e.target.name=="email"){
        errors["email"] = "";

        this.setState({
          errors: errors
        });

        return formIsValid;
    }

}
clearPasswordError = e =>  {
  let fields = this.state.fields;
  let errors = this.state.errors;
  let formIsValid = true;



  if(e.target.name=="password"){
      errors["password"] = "";

      this.setState({
        errors: errors
      });

      return formIsValid;
  }}
  clearConfirmPasswordError = e =>{
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;
  if(e.target.name=="confirm_password"){
    errors["confirm_password"]= "";
    this.setState({
      errors:errors
    });
    return formIsValid;
  }


}

validateEmail = e =>   {
  let fields = this.state.fields;
  let errors = this.state.errors;
  let formIsValid = true;


  if (!fields["email"]) {
 
      formIsValid = false;
      errors["email"] = "Please enter your email-ID.";

      this.setState({
        errors: errors
      });

      return formIsValid;
  }

  if (typeof fields["email"] !== "undefined") {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

      if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "Please enter valid email-ID.";
      }

      this.setState({
        errors: errors
      });

      return formIsValid;
  }

}
validatePassword = e =>   {
  let fields = this.state.fields;
  let errors = this.state.errors;
  let formIsValid = true;



  if (!fields["password"]) {

    formIsValid = false;
    errors["password"] = "Please enter your password.";

      this.setState({
        errors: errors
      });


    return formIsValid;
  }


  if (typeof fields["password"] !== "undefined") {

    if (!fields["password"].match(/^.*(?=.{2,})(?=.*\d).*$/)) {
      formIsValid = false;
      errors["password"] = "Please enter secure and strong password .";
    }

      this.setState({
        errors: errors
      });

    return formIsValid;
  }}

  validateConfirmPassword = e =>   {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;
  if (fields["password"]!==(fields["confirm_password"])){
    formIsValid=false;
    errors["confirm_password"]= "Passwords don't match";
  }
    this.setState({
      errors:errors
    });


    return formIsValid;



}


  registerInvalid = () => {
    if (this.state.isError === true) {
      return (
        <Alert
          color="danger"
          isOpen={this.state.visible}
          toggle={this.onDismiss}
          style={{ textAlign: 'center' }}
        >
          {this.state.message}
        </Alert>
      );
    } else {
      return (
        <>
   
  
        </>
      );
    }
  };



  onSubmitHandler = e => {
    e.preventDefault();
    var validationResult;

    validationResult=true;
    if (validationResult) {
      let fields = this.state.fields
    var url ='';
   
    var payload = {

                     india_user_email :fields["email"],
                     india_user_password :fields["password"],
                  };

    axios
      .post(url, payload)
      .then(response => {

        console.log(response);
        let message = response.message;
        if (
          this.state.message === 'Username already exist.' ||
          this.state.message === 'Register failed.'
        ) {
          this.setState({
            buttonDisabled: true,
            message,
            visible: true
          });
        } else {
          this.setState({
            buttonDisabled: false,
            isError: false,
            message: 'Register Success',
            visible: true
          });
        }
      })
      .catch(error => {

    
      });
  }
}

  render() {
    const errorMessageStyles = {

      color: "#ff4d4d",
      
  }
    return (
      <>
    
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
           

            <div class="d-flex justify-content-around">
            <div Align="left">
            <Container className="pt-lg-md">
              <Row className="justify-content-center mt-7">
                <Col lg="5">

            <Card border="primary"  style={{ width: '18rem' }}>

    <Card.Body>

   
    </Card.Body>
  </Card></Col></Row></Container></div>
          <Container className="pt-lg-md">
              <Row className="justify-content-center mt-7">
                <Col lg="5">

                      <div className="text-center text-muted mb-4">
                         </div>
                      <Form method="post" name="handler" onSubmit={this.onSubmitHandler}>
                        <FormGroup className="mb-3" controlId="formBasicEmail">
                        <FormLabel>Enter Email</FormLabel>
                            <FormControl
                              type="text"
                              name="email"
                              id="email"
                              className="form-control"
                              placeholder="Email"
                              value={this.state.fields.email}
                              onChange={this.handleChange}
                                onBlur={this.validateEmail}
                                onFocus={this.clearEmailError}>
                            </FormControl>

                        </FormGroup>
                        <FormGroup className="mb-3">
                            <div divID="emailError" style={errorMessageStyles}>{this.state.errors.email}</div>
                          </FormGroup>


                        <FormGroup className="mb-3" controlId="formBasicPassword">
                        <FormLabel>Enter Password</FormLabel>

                            <FormControl
                              type="password"
                              name="password"
                              id="password"
                              className="form-control"
                              placeholder="**********"
                              value={this.state.fields.password}
                              onChange={this.handleChange}
                                onBlur={this.validatePassword}
                                onFocus={this.clearPasswordError} ></FormControl>


                        </FormGroup >
                        <FormGroup className="mb-3">
                            <div divID="passwordError" style={errorMessageStyles}>{this.state.errors.password}</div>
                          </FormGroup>


                        <FormGroup className="mb-3" controlId="formBasicPassword">
                          <FormLabel>Re-enter Password</FormLabel>
                            <FormControl
                              type="password"
                              name="confirm_password"
                              id="confirm_password"
                              className="form-control"
                              placeholder="**********"
                              value={this.state.fields.confirm_password}
                              onChange={this.handleChange}
                                onBlur={this.validateConfirmPassword}
                                onFocus={this.clearConfirmPasswordError}></FormControl>


                        </FormGroup>
                        <FormGroup className="mb-3">
                            <div divID="confirmpasswordError" style={errorMessageStyles}>{this.state.errors.confirm_password}</div>
                          </FormGroup>


                        <div className="text-center">
                          <Button className="mt-4" color="info" type="submit">
                        Save
                          </Button>
                        </div>

                        <div>
                         <Col>
                           <div>{this.registerInvalid()}</div>
                          </Col>
                        </div>
                      </Form>

                      </Col>
              </Row>
            </Container>

            <div >
            <Container className="pt-lg-md">
              <Row className="justify-content-center mt-7">
                <Col lg="">


          </Col></Row></Container>
          </div>


  </div>
      
          </section>
        </main>

      </>
    );
  }
}

const bgImage = {
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

};
export default Venue;
