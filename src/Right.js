import React from "react";
import Sec from "./component/sec";
import Footer from "./component/footer";
import Header from "./component/Header";
import Chartbar from "./component/chartbar";

const Right=()=>{
    return<div className="">
    <Header  name="Malik's" />
    <Sec earn='$198k' order='$2.4k' balance='$2.4k' total='$89k'/>
    <Chartbar/>
    <Footer stock="32" price="45.99" sales="20"/>
</div>}


export default Right;