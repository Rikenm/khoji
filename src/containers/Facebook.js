
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


     


    render(){
        let fbContent;
    
        if (this.state.isLoggedIn){
            //authform ignores this

        }else{
            fbContent = (<FacebookLogin
                appId="302220027200609"
                autoLoad={true}
                fields="first_name,email,id,"
                onClick={this.componentClicked}
                callback={this.props.facebookClick} />)

        }



        return(
            <div>
            {fbContent}
            </div>


        )
    }


}