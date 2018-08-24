import React,{Component} from "react"
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { ReCaptcha } from 'react-recaptcha-google'
import {Link} from "react-router-dom";
import Facebook from "../containers/Facebook";
import {validate} from "../services/validate"
import "../style/auth.css"




const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });


class AuthForm extends Component{
    constructor(props, context){
        super(props, context)



        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        
  
        
        
        // this.state = {
        //     secret: "asdf",
        //     username:"",
        //     password:"",
        //     profileImageUrl:"",
        //     userType: "custom",
        //     isvalid : false,
        //     email:""
            


        // }//add few things later

        this.state = {
              secret : "asdf",
              username : {value:"",isValid:true},
              password : {value:"",isValid:true},
              userType:"custom",
              email: {value:"",isValid:true},
              isvalid: false

        }


        
    }

    componentDidMount(){

        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();
           
        }
    }

    onLoadRecaptcha() {
        if (this.captchaDemo) {
            console.log("loaded")
            this.captchaDemo.reset();
           
        }
    }
    verifyCallback(recaptchaToken) {
      // Here you will get the final recaptchaToken!!!  
    //   console.log(recaptchaToken, "<= your recaptcha token")
      if(recaptchaToken){
          this.setState({
              isvalid: true
          })
      }
    }

   

    

    handleChange = e => {
            this.setState({
                [e.target.name]: {"value": e.target.value,isValid:"true"}
            })

    }

    handeleSubmit = e =>{
        // submitting the form
        e.preventDefault();
        const authType = this.props.signUp ? "user" : "login" ;
        const validator = this.props.signUp ? this.state.email.isValid : this.state.email.isValid && this.state.password.isValid 
        const data = this.props.signUp?{email:this.state.email.value,type:"userType"}:{email:this.state.email.value,password:this.state.password.value}
        if(validator){
        this.props.onAuth(authType, data)
        .then(()=>{
            // take to the homepage

            this.props.history.push("/")
            //redirect
        }).catch(()=>{

            console.log("hellof from the catch")
            return
        })
    } else{
        
        this.setState({secret:"asf"})
    }

    }

    handleBlur = e => {
 
    this.setState({
        [e.target.name] :{
            value: e.target.value,
            isValid: validate(e.target.value,e.target.name)
        }
    })
       
       

    }

   

    render(){

        

        
        // const {email, username, password} = this.state
        const { signUp, history,removeError, addError} = this.props
        
        
        history.listen(()=>{
        removeError()
        
        }) 


        return(
            <div className="formbackground">
                <div className="authCard">


                
                
                            <form onSubmit={this.handleSubmit} noValidate autoComplete="off" >
                            
                              
                            {!signUp && ( 
                            <div>   
                             <div className="firstTextFieldAuthForm">

                                <TextField className="textField"
                                        
                                        id="username"
                                        label="Email"
                                        onChange={this.handleChange} 
                                        onBlur = {this.handleBlur}
                                        name="email"
                                        error = {this.state.email.isValid?false:true}
                                        helperText={this.state.email.isValid?"":"Invalid email"}
                                        type= "email"
                                        margin="normal"
                                        
                                />

                            </div>
                                    <br/>

                            <div className="secondTextFieldAuthForm">        
                                <TextField className="textField"
                                        
                                        id="password-input"
                                        label="Password"
                                        onChange={this.handleChange} 
                                        onBlur = {this.handleBlur}
                                        name="password"
                                        type="password"
                                        error = {this.state.password.isValid?false:true}
                                        helperText={this.state.password.isValid?"":"Password should not be empty"}
                                        autoComplete="current-password"
                                        margin="normal"
                                />

                                 
                             </div> 

                             
                                <div>
                                            <button type="button"
                                            onClick ={this.handeleSubmit} 
                                            className="loginButton">
                                                        {this.props.buttonText}
                                                    </button>
                                                    <Link className="linktoSignUp" to="/signup">Sign Up</Link>  

                                            

                                            <div className="facebookButton">
                                            
                                                <Facebook  addError={addError} {...this.props}/> {//facebookClick = {this.facebookClick}/>
                                                }
                                            </div>

                                            

                                        <br/>
                         </div>
                         </div>  
                        )} 
                           

                               {signUp && (
                                        <div>
                                            <h5 className="emailLabel">We will send you verification email on this email.</h5>
                                          
                                            <br/>
                                        <div className="fourthTextFieldAuthForm">   
                                            <TextField className="textField"
                                                                                    
                                            id="email"
                                            label="Email"
                                            onChange={this.handleChange} 
                                            onBlur = {this.handleBlur}
                                            name="email"
                                            type="email"
                                            error = {this.state.email.isValid?false:true}
                                            helperText={this.state.email.isValid?"":"Invalid email"}
                                            margin="normal"
                                            />
                                        </div>    
                                            <br/>
                                            <div className = "captcha">
                                            <ReCaptcha
                                                
                                                ref={(el) => {this.captchaDemo = el;}}
                                                size="normal"
                                                render="explicit"
                                                sitekey="6LdBhGsUAAAAAF2FpvrJ8svTsgT0SODsG3reqveS"
                                                onloadCallback={this.onLoadRecaptcha}
                                                verifyCallback={this.verifyCallback}
                                            />
                                            </div>
                                                
                                            
                                            <br/>

                                            <button 
                                            disabled = {!this.state.isvalid}
                                            type="button"
                                            className="signupButton"
                                            onClick = {this.handeleSubmit}>
                                        {this.props.buttonText}
                                    </button>

                                      </div>      
                               )}

                                



                            


                    </form>
                
                  
                   
                
                </div>
            </div>
        )


    }


}




export default withStyles(styles)(AuthForm);