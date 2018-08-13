import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost} from "../store/actions/post";

import "../style/listitemstyle.css"

class Post extends Component{

    componentDidMount(){
        // this.props.fetchfetchPost();  //uncomment later
    }

    render(){

        // const {post} = this.props //uncomment later
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

                    <p className="body">
                    Bacon corned beef porchetta swine meatloaf.  Pastrami pork belly jerky cow drumstick shankle boudin.  Chuck swine jowl, boudin beef ribs brisket kevin jerky ham hock.  Hamburger sirloin ham hock, flank alcatra biltong drumstick corned beef short ribs swine buffalo pig shoulder.  Pork chop biltong shankle bresaola fatback.  Porchetta boudin chicken andouille pork, pancetta pork loin kielbasa turducken.  Frankfurter pork shoulder, tail fatback filet mignon venison ground round corned beef hamburger tongue.

                    Bacon corned beef porchetta swine meatloaf.  Pastrami pork belly jerky cow drumstick shankle boudin.  Chuck swine jowl, boudin beef ribs brisket kevin jerky ham hock.  Hamburger sirloin ham hock, flank alcatra biltong drumstick corned beef short ribs swine buffalo pig shoulder.  Pork chop biltong shankle bresaola fatback.  Porchetta boudin chicken andouille pork, pancetta pork loin kielbasa turducken.  Frankfurter pork shoulder, tail fatback filet mignon venison ground round corned beef hamburger tongue
                    Bacon corned beef porchetta swine meatloaf.  Pastrami pork belly jerky cow drumstick shankle boudin.  Chuck swine jowl, boudin beef ribs brisket kevin jerky ham hock.  Hamburger sirloin ham hock, flank alcatra biltong drumstick corned beef short ribs swine buffalo pig shoulder.  Pork chop biltong shankle bresaola fatback.  Porchetta boudin chicken andouille pork, pancetta pork loin kielbasa turducken.  Frankfurter pork shoulder, tail fatback filet mignon venison ground round corned beef hamburger tongue.   
                     </p>

            </div>
            </div>
        )
        
    }
   


}

function mapStateToProps(state){
    return{
        post: state.payload
    }
}

export default connect(mapStateToProps,{fetchPost})(Post)
