import React,{Component} from "react"
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import {Link} from "react-router-dom";




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
    constructor(props){
        super(props)
  
        
        
        this.state = {
            userEmail:"",
            secret: "asdf",
            username:"",
            password:"",
            profileImageUrl:""
            


        }//add few things later
    }

    


    

    handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })

    }

    handeleSubmit = e =>{
        // submitting the form
        e.preventDefault();
        const authType = this.props.signUp ? "user" : "login" ;
        this.props.onAuth(authType, this.state)
        .then(()=>{
            // take to the homepage

            this.props.history.push("/")
            //redirect
        }).catch(()=>{

            console.log("hellof from the catch")
            return
        })

    }

   

    render(){

        
        const {email, username, password} = this.state
        const {heading, buttonText, signUp,errors, history,removeError} = this.props
        
        
        history.listen(()=>{
        removeError()
        }) 


        return(
            <div className="formbackground">
                <div className="authCard">


                
                
                            <form onSubmit={this.handleSubmit} noValidate autoComplete="off" >
                            

                            
                             <div className="firstTextFieldAuthForm">

                                <TextField className="textField"
                                        
                                        id="username"
                                        label="Email"
                                        onChange={this.handleChange} 
                                        
                                        name="userEmail"
                                        type="text"
                                       
                                        margin="normal"
                                        
                                />

                            </div>
                                    <br/>

                            <div className="secondTextFieldAuthForm">        
                                <TextField className="textField"
                                        
                                        id="password-input"
                                        label="Password"
                                        onChange={this.handleChange} 
                                        
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        margin="normal"
                                />

                                 
                             </div> 

                            {!signUp && (   
                                <div>
                             <button type="button"
                             onClick ={this.handeleSubmit} 
                             className="loginButton">
                                        {this.props.buttonText}
                                    </button>
                                    <Link className="linktoSignUp" to="/signup">Sign Up</Link>  

                            <button className="facebookButton">
                                        Facebook
                            </button> 
                         <br/>
                         </div>
                        )} 
                           

                               {signUp && (
                                        <div>
                                        <div className="thirdTextFieldAuthForm">          
                                            <TextField className="textField"
                                                                                    
                                            id="password-input"
                                            label="Repeat Password"
                                            onChange={this.handleChange} 
                                            
                                            name="repeatpassword"
                                            type="password"
                                            
                                            margin="normal"
                                            />
                                         </div>   
                                            <br/>
                                        <div className="fourthTextFieldAuthForm">   
                                            <TextField className="textField"
                                                                                    
                                            id="email"
                                            label="Email"
                                            onChange={this.handleChange} 
                                            
                                            name="email"
                                            type="email"
                                            
                                            margin="normal"
                                            />
                                        </div>    
                                            <br/>

                                            <button 
                                            type="button"
                                            className="signupButton">
                                            onClick = {this.handeleSubmit}
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