import React, { Fragment } from 'react'
import { SignDeadEnd } from 'react-bootstrap-icons'
import { Link, NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import {Fade,Zoom,Slide} from "react-slideshow-image"
import banner1 from "../img/banner1.jpg";
import banner2 from "../img/banner2.jpg";
import banner3 from "../img/banner3.jpg";
import "../CSS/home.css";

import "bootstrap/js/dist/collapse";
const Home = () => {
  const navigate=useNavigate();
  const slider=[
    {
      URL:banner1,
      caption:" Living Room Collection",
      caption1:"Taking your Viewing Experience to Next Level",
      caption2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc"

    },
    {
      URL:banner2,
      caption:"Unique Furniture Style",
      caption1:"Starting $90.00",
      caption2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc"

    },
    {
      URL:banner3,
      caption:"Quality Furniture",
      caption1:"Get up to 50% off Today Only!",
      caption2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc"
    }
  ]

  return (
    <Fragment>
        <div className='slide-container'>
          <Fade>
            {
              slider.map((image,index)=>
              <div key={index}>
                <div className='sowar' style={{display:"flex",marginTop:"0px",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh",backgroundSize:"cover",backgroundImage:`url(${image.URL})`}}>
                <div className='layer'> </div>
                  <span className='desc down' style={{fontSize:"20px",marginBottom:"20px",color:"white",zIndex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>{image.caption1}</span>
                <h2 className='desc down' style={{fontSize:"70px",marginBottom:"20px",color:"white",zIndex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>{image.caption}</h2>
                <span className='desc up' style={{fontSize:"20px",width:"600px",marginBottom:"20px",color:"white",zIndex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>{image.caption2}</span>
                <button className='Btnn desc up' onClick={()=>navigate("login")}>Shop now</button>
                </div>
              </div>
              )

            }
          </Fade>
        </div>
    </Fragment>
  )
}

export default Home