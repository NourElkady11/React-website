import React, { Fragment,useEffect, useState } from "react";
// import  "./home.module.css"
import axios from "axios";
import { useParams } from "react-router-dom";

const Products=()=>{
    // let params=useParams();
    // const userid=params.id;
    // console.log(userid);
    // const [user,Setuser]=useState(0)
    // useEffect(()=>{
    //     axios.get(`https://dummyjson.com/users/${userid}`).then((res)=>Setuser(res.data))
    // },[])
    // console.log(user);
    return(
        <Fragment>
            <h1>Productssssssssss</h1>
                {/* <div id="coco">
                    <div className="cocoimg"><img src={user.image}/></div>
                </div> */}
        </Fragment>
    )
}
export default Products