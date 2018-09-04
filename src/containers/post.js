import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost} from "../store/actions/post";

import "../style/preview.css"



class Post extends Component{


    componentDidMount(){
        console.log("component mounted in post")
        // console.log("id",this.props)
        this.props.fetchPost(this.props.id);  //uncomment later
    }

    render(){

        // const {post} = this.props //uncomment later

        const {post} = this.props
        console.log("post..",post)



        return(
            <div>
                    {/* {post[0].data[0] && ( */}
                    { (typeof(post) !== "undefined" && post) ?
                    <div>
                    <div>

                    <div className="post">
                         <pre>
                          <div className="title-second" style={{
                                      fontSize: 20,
                                      fontWeight : 800

                                }}>
                             {post.data[0].title}
                           </div>
                          </pre>

                            <div className = "sidebar">
                                        <div className= "name">
                                            Name<br/>
                                        <div className= "name-value"> {post.data[0].name} </div>

                                        </div>

                                        <div className= "address">
                                            Address<br/>

                                            { post.data[0].country != "Nepal"?
                                                <div className= "address-value">
                                                    {post.data[0].city+", "}
                                                    {post.data[0].state+", "}
                                                    {post.data[0].country}

                                                </div> :<div className= "address-value">

                                                {post.data[0].state+", "}
                                                    {post.data[0].country}

                                                </div>
                                            }



                                        </div>

                                        <div className= "contact">
                                            Contact<br/>
                                            <div className= "contact-value">    857-2091580  </div> 

                                        </div>
                                    {/* <div className="low-sidebar">
                                        <button className="btn-reply">
                                            Reply
                                            </button>

                        
                                    </div> */}
                            </div>

                            <div className="body" style={{
                                      fontSize: 20,
                                      fontWeight : 500

                                }}>
                             {post.data[0].description}
                            </div>

                      </div> {/*check*/}

                    </div>
                </div>  : "Loading"
                    }

        </div>
        )

    }



}

function mapStateToProps(state){
    return{
        post: state.post.post
    }
}

export default connect(mapStateToProps,{fetchPost})(Post)
