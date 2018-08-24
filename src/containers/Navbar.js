import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../store/actions/auth";
import "../style/categoryStyling.css"
import Logo from "../util/images/Bhakthapur-temples-2@3x.png"

class NavBar extends Component{

  logout = e => {
      e.preventDefault()
      console.log("logging off")
      this.props.logout()
      
  }  

  render(){
    console.log("after this")
    console.log(this.props)
    return (
       <nav className="navbar navbar-expand fixed-top">
        <div className = "container-fluid"> 
            <Link to = "/" className="navbar-brand">
                 <img src={Logo} style={{width: '60px', height: '60px'}}/>
            </Link>

            {this.props.currentUser.isAuthenticated ? (
                      <ul className="nav navbar-nav navbar-right">   
                      <li>
                         <Link to ={`/users/${this.props.currentUser.user.id}`}>Profile</Link>
                      </li>

                      <li>
                                <a style={
                                    {color:"#fff"}
                                } onClick ={this.logout}>Logout</a>
                      </li>

                      </ul>

            ):
        
            <ul className="nav navbar-nav navbar-right">
                
                <li>
                    <Link to ="/login">Log in</Link>
                </li>

                <li>
                    <Link to ="/signup">Sign Up</Link>
                </li>
            </ul>

            

            }
        </div>
       </nav>
    )
  }
}

function mapStateToProps(state){
return {
    currentUser: state.currentUser
}

}

export default connect(mapStateToProps,{logout})(NavBar)