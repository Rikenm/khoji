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
                        
                        Fridays for Friends - Bilingual Cantonese-English - Each Friday 6-9 (Longwood Medical Area, Boston (02115)) 
                            
                        </div>
                        <div className = "sidebar">
                                    <div className= "name">
                                        Name<br/>
                                       <div className= "name-value"> Riken Maharjan </div>

                                    </div>    

                                    <div className= "address">
                                        Address<br/>
                                        <div className= "address-value">  Long Beach, MA, USA</div>

                                    </div>  

                                    <div className= "contact">
                                        Contact<br/>
                                        <div className= "contact-value">    857-2091580  </div>

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
                            

                                {post}

                            </div>

                    </div>
                </div>
            </div>
        </div>


)


}

export default Preview
