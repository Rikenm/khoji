import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Post from "./post"
import "../style/preview.css"



const Preview = (props) => {

    const {post} = props


return(
        <div className="preview">
        <nav className="navbar navbar-expand fixed-top preview-nav-bar" style={{color:"white"}}>
        Preview
        </nav>
            <div>

                


                <div>
                
                <div className="post"> 
                        <div className="title"> 
                        
                        {
                          post.title == ""? "Fridays for Friends - Bilingual Cantonese-English - Each Friday 6-9 (Longwood Medical Area, Boston (02115))" : post.title
                        }  
                        </div>
                        <div className = "sidebar">
                                    <div className= "name">
                                        Name<br/>
                                       <div className= "name-value"> {post.name} </div>

                                    </div>    

                                    <div className= "address">
                                        Address<br/>
                                        { post.country != "Nepal"?
                                         <div className= "address-value"> 
                                            {post.city?post.city+", ":"CITYHERE, "}
                                            {post.secondary?post.secondary+", ":"MA, "}  
                                            {post.country?post.country:"USA"}
                                        
                                        </div> :<div className= "address-value"> 
                                           
                                        {post.secondary?post.secondary+", ":"MA, "}  
                                            {post.country?post.country:"USA"}
                                        
                                        </div>
                                        }
                                      

                                    </div>  

                                    <div className= "contact">
                                        Contact<br/>
                                        <div className= "contact-value">  
                                          { 
                                             post.contact =="" ? "857-209-XXXX"  :post.contact
                                          }
                                          </div>

                                    </div>  
                                 <div className="low-sidebar">
                                    <button className="btn-reply">
                                        Reply
                                        </button>

                                    <button className="btn-save">
                                        Save
                                    </button>
                                </div>    


                        </div>

                            <div className="body">
                            

                                {post.description}

                            </div>

                    </div>
                </div>
            </div>
        </div>


)


}

export default Preview
