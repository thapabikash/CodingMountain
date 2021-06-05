// class base Component
import React from 'react';
class Imagerender extends React.Component {
    increment_index=0;
    /**
     * @param {object} props 
     * @param {value} increment_index
     * @Set_Next_Image - fuction which change/update image_url
     */

    constructor(props){
        super(props);
        this.state = {
            image_url:this.props.image[0].url 
          };
          this.Set_Next_Image=this.Set_Next_Image.bind(this);   
    }

    Set_Next_Image(){
        this.increment_index++
         this.setState({
            image_url:  this.props.image[this.increment_index].url
         })
    }



    render(){
        return (
            <img  src={this.state.image_url} onError={this.Set_Next_Image}/> 
        )
    }

}
export default Imagerender;