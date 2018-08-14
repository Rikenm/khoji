import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost} from "../store/actions/post";

import "../style/post.css"



class Post extends Component{

    componentDidMount(){
        // this.props.fetchfetchPost(this.props.id);  //uncomment later
    }

    render(){

        // const {post} = this.props //uncomment later
        
        const {post} = this.props

        console.log("hello",post)
        return(
            <div>
            
            <div className="post"> 
                <div className="title"> 
                  
                Fridays for Friends - Bilingual Cantonese-English - Each Friday 6-9 (Longwood Medical Area, Boston (02115))
                    
                </div>
                    <div className = "sidebar">
                     <div className= "name">
                        Name<br/>
                        Riken Maharjan

                     </div>    

                     <div className= "address">
                        Address<br/>
                       86 washington, Revere, Ma

                     </div>  

                     <div className= "contact">
                        Contact<br/>
                        857-2091580

                     </div>  


                    </div>

                    <div className="body">
                    {/* {post.split('\n').map(function(item, key) {
                        return (
                            <span key={key}>
                            {item}
                            <br/>
                            </span>
                        )
                        })} */}

                        {post}

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
