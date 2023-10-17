import React from "react";
import { CgProfile} from "react-icons/cg"; 


const Profile=()=>{
    return<div className="row ">
        <div className="col-sm-3">
            <CgProfile className="i"/>
        </div>
        <div className="col-sm-9">
        <button type="" className="btn dropdown-toggle item" data-toggle="dropdown ">
                Evaon
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Link 1</a>
                    <a className="dropdown-item" href="#">Link 2</a>
                    <a className="dropdown-item" href="#">Link 3</a>
                </div>
        </div>

    </div>

}


export default Profile;