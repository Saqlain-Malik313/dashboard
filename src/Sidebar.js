import React from 'react'
import  {BsSearch,BsPersonWorkspace,BsExclamationOctagon}from 'react-icons/bs'
import  {AiFillCodeSandboxSquare,AiOutlineWallet}from 'react-icons/ai'
import { TbHexagonLetterD ,TbSquareKey} from "react-icons/tb"; 
import { MdOutlineLiveHelp} from "react-icons/md"; 
import Profile from './profile';


function Sidebar({openSidebarToggle,}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
                <h2 style={{marginTop:'20px',marginLeft:'20px', color:'white'}}><TbHexagonLetterD className=''/> Dashboard</h2>

        
        <div className="dropdown sidebar-list">
            <h3 style={{marginTop:'20px',marginLeft:'40px', fontSize:'20px',color:'white'}}><TbSquareKey className='icon '/>Dashboard</h3>
                <button type="" className="btn dropdown-toggle sidebar-list-item" data-toggle="dropdown ">
                    <AiFillCodeSandboxSquare className='icon' />PRODUCTS
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Link 1</a>
                    <a className="dropdown-item" href="#">Link 2</a>
                    <a className="dropdown-item" href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown sidebar-list">
                <button type="" className="btn dropdown-toggle sidebar-list-item" data-toggle="dropdown ">
                    <BsPersonWorkspace className='icon' />Customers
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Link 1</a>
                    <a className="dropdown-item" href="#">Link 2</a>
                    <a className="dropdown-item" href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown sidebar-list">
                <button type="" className="btn dropdown-toggle sidebar-list-item" data-toggle="dropdown ">
                    <AiOutlineWallet className='icon' />Income
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Link 1</a>
                    <a className="dropdown-item" href="#">Link 2</a>
                    <a className="dropdown-item" href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown sidebar-list">
                <button type="" className="btn dropdown-toggle sidebar-list-item" data-toggle="dropdown ">
                    <BsExclamationOctagon className='icon' />Promote
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Link 1</a>
                    <a className="dropdown-item" href="#">Link 2</a>
                    <a className="dropdown-item" href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown sidebar-list">
                <button type="" className="btn dropdown-toggle sidebar-list-item" data-toggle="dropdown ">
                    <MdOutlineLiveHelp className='icon' />Help
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Link 1</a>
                    <a className="dropdown-item" href="#">Link 2</a>
                    <a className="dropdown-item" href="#">Link 3</a>
                </div>
            </div>
            <div className='sidebar-list' style={{marginTop:'150px', width:'100px' }}>
                <Profile/>
            </div>


        
    </aside>
  )
}

export default Sidebar;