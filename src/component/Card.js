import { Component } from 'react';
import image from '../assets/image.jpg'
import './style.css'
/*

//function component
function Card(prop){
    return(
        
        <div className='card'>
                <img src={image} alt="" />
            
            <div className='item'>
                <h1>Hi,I'm {prop.name}</h1>
                <p>{prop.profession}</p>
                <hr />
            </div>
            <div className='item'>
                <p>Founder of DotRex. Professional UI/Ux designer and web developer based on Location.Sometimes works as freelancer</p>
            </div>
        </div>
    )
    
}
*/


// class base component
class Card extends Component{
    render(){
        return(
        
            <div className='card'>
                    <img src={image} alt="" />
                
                <div className='item'>
                    <h1>Hi,I'm {this.props.name}</h1>
                    <p>{this.props.profession}</p>
                    <hr />
                </div>
                <div className='item'>
                    <p>Founder of DotRex. Professional UI/Ux designer and web developer based on Location.Sometimes works as freelancer</p>
                </div>
            </div>
        )
    }
}
export default  Card;