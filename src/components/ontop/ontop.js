import React, {Component} from 'react';
import './ontop.css';
import $ from 'jquery';
class OnTop extends Component{

    constructor(props){
        super(props);
        this.state = {
            scroll: true
        }
    }

    onClick = () => {
        $("html, body").animate({ scrollTop: 0}, 1000);
    }   
    
    render(){
        var {scroll} = this.state;
        return(
            <i className={`fas fa-arrow-circle-up text-right fixed-bottom m-5 ontop ${scroll ? '' : 'd-none'}`} onClick={this.onClick}></i>
            
        )
    }
}

export default OnTop;