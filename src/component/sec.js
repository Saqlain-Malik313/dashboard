import React from 'react'
import { SlHandbag } from "react-icons/sl";
 import { AiOutlineDollar,AiOutlineArrowUp,AiOutlineArrowDown } from "react-icons/ai";
 import { PiWallet } from "react-icons/pi";
 import { CgList } from "react-icons/cg";





function Sec(props) {
  return (
    <main className='main-container'>
        <div className='main-cards'>
            <div className='card'>
            <div class="card-body ">
                <p class="card-text">
                    <div className="row">
                        <div className="col-3">< AiOutlineDollar className="icons earn"/></div>
                        <div className="col-9 text-center"><small style={{color:'black'}}>Earning</small>
                        <h1 style={{color:'black'}}>{props.earn}</h1>
                        <h6 style={{color:'black', fontSize:'11px'}}><AiOutlineArrowUp class='up'/> 32.8% this month's</h6></div>
                        
            </div></p>
        </div>
            </div>
            <div className='card'>
            <div class="card-body ">
                <p class="card-text">
                    <div className="row">
                        <div className="col-3">< CgList className="icons order"/></div>
                        <div className="col-9 text-center"><small style={{color:'black'}}>Order</small>
                        <h1 style={{color:'black'}}>{props.order}</h1>
                        <h6 style={{color:'black', fontSize:'12px'}}> <AiOutlineArrowDown class='down'/>2% this month's</h6></div>
            </div></p>
        </div>
            </div>
            <div className='card'>
            <div class="card-body ">
                <p class="card-text">
                    <div className="row">
                        <div className="col-3">< PiWallet className="icons wallet"/></div>
                        <div className="col-9 text-center"><small style={{color:'black'}}>Balance</small>
                        <h1 style={{color:'black'}}>{props.balance}</h1>
                        <h6 style={{color:'black', fontSize:'12px'}}><AiOutlineArrowDown class='down'/> 2% this month's</h6></div>
            </div></p>
        </div>
            </div>
            <div className='card'>
            <div class="card-body ">
                <p class="card-text">
                    <div className="row">
                        <div className="col-3">< SlHandbag className="icons bag"/></div>
                        <div className="col-9 text-center"><small style={{color:'black'}}>Total sales</small>
                        <h1 style={{color:'black'}}>{props.total}</h1>
                        <h6 style={{color:'black', fontSize:'12px'}}><AiOutlineArrowUp class='up'/> 11% this week</h6></div>
            </div></p>
        </div>
            </div>
        </div>

        
    </main>
  )
}

export default Sec