import React from "react";

const Footer=(props)=>{
    return<div class="" style={{marginTop:'5px ',marginLeft:'5px'}}>
    
    <div class="card-columns row">
      
      <div class="card bg-light" style={{width:'970px', height:'320px'}}>
        <div class="card-body">
          <div class='row'>
            <div class='col-sm-8'>
              <h2><small>Product Sale</small></h2>
              <small><small>product Name</small></small>
            </div>
            <div class="col-sm-4">
              <input type="text" style={{width:'160px'}} placeholder="search"/>
              <select style={{marginLeft:'3px', height:'40%'}}>
                <option>last 30 days</option>
                <option>last 60 days</option>
              </select>
              <table><tr>
                <th>stock</th>
              <th>price</th>
              <th>Total sales</th></tr></table>
            </div>
            <div class='col-sm-12'>
              <hr/>
            </div>
              <div class="col-sm-2">
              <img src="https://img.freepik.com/free-vector/triangle-background-with-vivid-colors_23-2148384580.jpg?w=740&t=st=1697359609~exp=1697360209~hmac=444a367f0977ac821cc217229adce0200bd971a4ad619df2a7ee6d3675e9ca13" alt="abstract" style={{height:'30px',borderradius:'5px',width:'55px',marginTop:'10px'}}/>
              </div>
              <div class="col-sm-6">
              <h6>Abstract3d </h6>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
              </div>
              <div class="4">
                <table>
                  <tr>
                    <td>32 in stock</td>
                    <td>$45.99</td>
                    <td>20</td>
                  </tr>
                </table>
              </div>
              <div class="col-sm-2" style={{marginTop:'5px'}}>
              <img src="https://4kwallpapers.com/images/walls/thumbs_3t/8292.jpg" alt="sarphen" style={{height:'30px',}}/>
              </div>
              <div class="col-sm-6" style={{marginTop:'5px'}}>
              <h6>sarphens illustrations </h6>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
              </div>
              <div class="4"style={{marginTop:'5px'}}>
                <table>
                  <tr>
                    <td>{props.stock} in stock</td>
                    <td>${props.price}</td>
                    <td>{props.sales}</td>
                  </tr>
                </table>
              </div>
            
            
            
            
          </div>
        </div>
      </div>
            
    </div>
  </div>
  

}

export default Footer;