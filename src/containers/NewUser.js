import React, {Component} from "react";
import {connect} from "react-redux";
import {apiCallNoReAuth} from "../services/api"
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";


class NewUser extends Component {


    constructor(props) {
        
        super(props);
    
        this.state = {
          data: null,
          isLoading: false,
          error: null,
          username:null,
          password:null,
          isTokenValid: true,
          isUsernameValid: false

        };
      }



    componentDidMount(){
        
        this.setState({ isLoading: false });

        apiCallNoReAuth("get", `http://localhost:3000/api/v1/token/${this.props.param}`).then(
            res=>{
            
            this.setState({
                isTokenValid : true
            })    
           

        }).catch(err => {

            console.log(err)
              // move to the   

        })



    } 

    checkUsername = ()=>{

        if (this.state.username){
            // do api call 
            apiCallNoReAuth("get", `http://localhost:3000/api/v1/validate/${this.state.username}`).then(
            res=>{
            
            this.setState({
                isTokenValid: true
            })   
           

        }).catch(err => {

            console.log("error")
              // move to the   

        })

        }
       



    }

    changeForm = (event) => {

        this.setState({ [event.target.name]: event.target.value });
    }

    submitHandler = () =>{

    }


    render(){
      
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
          }
        if(!this.state.isTokenValid){
           return  <p>Token Invalid or Expired...</p>
        }  

        return (
            <div>
              <form onSubmit={this.submitHandler}>
                    <TextField
                    name="name"
                    onBlur = {this.checkUsername}
                    onChange = {this.changeForm}
                    label = "Name"
                    >Username</TextField> 
                    <br/>
                    <TextField
                    name="username"
                    onBlur = {this.checkUsername}
                    onChange = {this.changeForm}
                    label = "Username"
                    >Username</TextField> 
                    <br/>
                    <TextField
                    name="password"
                    onChange = {this.changeForm}
                    label = "Password"
                    type="password"
                    >Password</TextField>  
                    <br/>
                    <TextField
                    name="repeatPassword" 
                    label = "Password"
                    type="password"
                    >Repeat Password</TextField>
                    <br/>
                    <Button
                        variant="contained"
                        color="pink"
                       
                       
                      > Next
                      
                      </Button>
              </form>      

            
            </div>
        )
    }


}

function mapStateToProps(state){

    return {
        currentUser: state.currentUser
    
    }
}



export default connect(mapStateToProps,{})(NewUser)


