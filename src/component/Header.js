import React from "react";
import { MdWavingHand } from "react-icons/md";


const Header=(props)=>{
    return( 
      <div style={{marginTop:'10px',marginLeft:'15px'}}>
        <div className="row" >
            <div className="col-sm-8">
                <h4 style={{marginLeft:'5px', color:'black'}}>Hello {props.name} <MdWavingHand className="hand"/></h4>
            </div>
            <div className="col-sm-4">
                <input type="text"  placeholder="search" style={{width:'200px',marginLeft:'80px'}}/>
            </div>

        </div>
      </div>  
    )
}





export default Header;