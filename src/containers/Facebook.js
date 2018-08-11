
import React,{Component} from "react";

import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component{

    constructor(props){
        super(props)
    }

    state={
        isLoggedIn: false,
        userID: '',
        name: '',
        email : '',


    }


     componentClicked = () =>{

        

     }   


     onerror = (err) => {
        

        
        this.props.addError("Facebook login error from inside")

     }


     


    render(){
        let fbContent;
    
        if (this.state.isLoggedIn){
            //authform ignores this

        }else{
            fbContent = (<FacebookLogin
                appId="302220027200609"
                autoLoad={false}
                fields="name,email"
                onClick={this.componentClicked}
                callback={this.props.facebookClick} 
                onFailure ={this.onerror}
                />)

        }



        return(
            <div>
            {fbContent}
            </div>


        )
    }


}