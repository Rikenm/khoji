import React,{Component} from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "../style/listControl.css"
import {Category_LIST,Sub_Category_LIST_ALL} from "../util/constant/categorylist";
import {STATE_CITY_DICT} from "../util/constant/statecity"

class ListControl extends Component {


    constructor(props){
        super(props)

        this.state={
            country:this.props.queryParameters.location,
            secondary:this.props.queryParameters.secondary,
            category:this.props.params.category,
            subcategory:this.props.params.subcategory
            
    
         }


    }

    // static getDerivedStateFromProps(nextProps, prevState){


    // }

    





    

     handleChange = event => {
       if (event.target.name === "country" ){

        this.setState({ [event.target.name]: event.target.value ,
                         secondary:"All"
        });
        this.props.history.push({
            pathname: `/listing/${this.state.category}/${this.state.subcategory}`,
            search: `?location=${event.target.value}&secondary=All&search=1`
        })
        
        

       }else if (event.target.name === "secondary"){

        this.setState({ [event.target.name]: event.target.value ,
            
            });

        this.props.history.push({
            pathname: `/listing/${this.state.category}/${this.state.subcategory}`,
            search: `?location=${this.state.country}&secondary=${event.target.value}&search=1`
        })
        

       } 
       else if (event.target.name === "category"){

        this.setState({ [event.target.name]: event.target.value ,
            subcategory:"All"
            });

            this.props.history.push({
                pathname: `/listing/${event.target.value}`,
                search: `?location=${this.state.country}&secondary=${this.state.secondary}&search=1`
            })


       } else{

        this.setState({[event.target.name]:event.target.value})

        this.props.history.push({
            pathname: `/listing/${this.state.category}/${event.target.value}`,
            search: `?location=${this.state.country}&secondary=${this.state.secondary}&search=1`
        })
       }

      
       
      };


      handleblur = (event) =>{

        
      }

      componentDidMount(){
          console.log("==>fromListControl",this.props)
          
          
      }
    

      render(){
        const {queryParameters} = this.props
    

       return(
        <div>
            <div className="first-select">
            <FormControl required  color="white" >
             
             <Select style={{color:"white"}}
               value={this.state.country}
               onChange={this.handleChange}
               onBlur={this.handleblur}
               displayEmpty
               name="country"
               inputProps={{
                 name: "country",
                 id: "country-simple"
               }}
               
             >
                 
                 
               <MenuItem value="USA">USA</MenuItem>
               <MenuItem value="Australia">Australia</MenuItem>
               <MenuItem value="Nepal">Nepal</MenuItem>
              
               
               )
               
           
               
             

             </Select>
            
           </FormControl>

              {/* <h8 style={{paddingLeft:10}}>⚫</h8> */}

             </div>
             <div className="second-select">

           <FormControl required  color="secondary" >
             
             <Select style={{color:"white"}}
               value={this.state.secondary}
               onChange={this.handleChange}
               onBlur={this.handleblur}
               displayEmpty
               name="secondary"
               inputProps={{
                 name: "secondary",
                 id: "secondary-simple"
               }}
               
             >
                 
                 
               
               
                 {
                  STATE_CITY_DICT[this.state.country].map((item)=>{
                     return <MenuItem key={item} value={item}>{item}</MenuItem>



                })

              }
               
             

             </Select>
            
           </FormControl>

            {/* <h8 style={{paddingLeft:10}}>></h8> */}
           </div>
           <div  className="third-select">
           <FormControl required  color="secondary">
             
             <Select style={{color:"white"}}
               value={this.state.category}
               onChange={this.handleChange}
               onBlur={this.handleblur}
               displayEmpty
               name="category"
               inputProps={{
                 name: "category",
                 id: "category-simple"
               }}
               
             >
                 
                 {
                     Category_LIST.map((item,id) => {

                    return (<MenuItem key = {id} value={item}>{item}</MenuItem>)

                    })

                    }
                                
           
               
             

             </Select>
            
           </FormControl>
           {/* <h8 style={{paddingLeft:10}}>></h8> */}
           </div>
           
           <div className="fourth-select">
           <FormControl required  color="secondary" >
             
             <Select style={{color:"white"}}
               value={this.state.subcategory}
               onChange={this.handleChange}
               onBlur={this.handleblur}
               displayEmpty
               name="subcategory"
               inputProps={{
                 name: "subcategory",
                 id: "subcategory-simple"
               }}
               
             >
                 
                 {

                        Sub_Category_LIST_ALL[this.state.category].subitems.map((item,id) => {

                        return (<MenuItem key = {id} value={item.name}>{item.name}</MenuItem>)

                    })


                    }
               
           
               
             

             </Select>
            
           </FormControl>
           </div>

        </div>


       )

      }


}



export default ListControl