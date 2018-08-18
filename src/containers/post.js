import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost} from "../store/actions/post";

import "../style/preview.css"



class Post extends Component{

    componentDidMount(){
        // this.props.fetchPost(this.props.id);  //uncomment later
    }

    render(){

        // const {post} = this.props //uncomment later
        
        const {post} = this.props

       
        return(
            <div >
            
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
   


}

function mapStateToProps(state){
    return{
        posttrial: state.payload
    }
}

export default connect(mapStateToProps,{fetchPost})(Post)
