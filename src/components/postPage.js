import React from "react"

import Post from "../containers/post"
import Navbar from "../containers/Navbar"



const PostPage = props => {
   
    // const {title,description,name,address,contact,postid} = props
    

    return(
        <div className ="row">

       
          
            <Navbar/>
            <Post/>
            
        
          
            
        </div>
    )
}

export default PostPage