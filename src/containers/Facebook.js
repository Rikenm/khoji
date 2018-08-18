
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


     

     onerror = (err) => {
        

        console.log("facebookwrror")
        this.props.addError("Facebook login error from inside")

     }

     
     facebookClick = (facebookdata) =>{
       

      
        console.log("hello")

        if (!facebookdata.error){

           const {name,accessToken,email,id}=facebookdata

           console.log("yo",name,accessToken,email,id)

        const newObject ={name: name,
                    accessToken: accessToken,
                    email: email,
                    userType: "facebook",
                    username: name.split(" ")[0]+id

        
                    }




        this.props.onAuth("user", newObject)
        .then(()=>{
            // take to the homepage

            console.log("no errorfrom the catch facebook")
            

            this.props.history.push("/")
            //redirect
        }).catch(()=>{
            console.log("errorfrom the catch facebook")
            return
        })

        }else{
                this.props.addError("Facebook Error")
               
                return
                

        }



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
                callback={this.facebookClick} 
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