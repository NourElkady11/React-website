import React, { Fragment, useEffect, useState } from 'react'
import "../CSS/shop.css"
import axios from 'axios'
import { AiFillStar, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import f1 from "../img/furniture_img1.jpg";
import f2 from "../img/furniture_img2.jpg";
import f3 from "../img/furniture_img3.jpg";
import f4 from "../img/furniture_img4.jpg";
import f5 from "../img/furniture_img5.jpg";
import f6 from "../img/furniture_img6.jpg";
import f7 from "../img/furniture_img7.jpg";
import f8 from "../img/furniture_img8.jpg";
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { Kady } from './Slice';


function Shop() {
// useEffect(()=>{
//   axios.get("https://dummyjson.com/products").then((res)=>setdata(res.data.products)).catch(Error)
//   console.log(data);

// },[])
// const[flag,setflag]=useState(0);
const dispatch=useDispatch();
function state(item){
dispatch(Kady.actions.addproduct(item))
}
const data=useSelector((val)=>val?.productsslice?.productslist);
console.log(data)

  return (
    <Fragment>
      <h1 className='tit'>Our top product</h1>
        <div className='container d-flex mt-4'>
          <div className='row'>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className="card d-flex flex-column align-items-center gap-1">
                <div className='card-img'><img src={f1} alt=''/></div>
                <div className='layerblack'></div>
                <div className='card-desc'> <h6>Itaque earum rerum</h6></div>
                <div className='eletnen-elly-t7t'>
                <div className='d-flex justify-content-center gap-3'><span style={{color:"red",fontWeight:"600"}}>$659.00</span> <del style={{fontWeight:"200",fontSize:"14px"}}>$1100.00</del></div>
                <div className='d-flex justify-content-center color'>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                </div>
                </div>
                <button class="button type1" onClick={()=>state({
                  id:1,
                  name:"Itaque earum rerum",
                  Image:f1,
                  price:659.00, 
                })}>
                    <div className='ss'>
                    <div id='ico'><BsCart3/></div>
                    <span class="btn-txt" >Add to cart</span>
                    </div>
                </button>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className="card d-flex flex-column align-items-center gap-1">
                <div className='card-img'><img src={f2} alt=''/></div>
                <div className='layerblack'></div>
                <div className='card-desc'> <h6>adipisci officia libero</h6></div>
                <div className='eletnen-elly-t7t'>
                <div className='d-flex justify-content-center gap-3'><span style={{color:"red",fontWeight:"600"}}>$880.00</span> <del style={{fontWeight:"200",fontSize:"14px"}}>$1500.00</del></div>
                <div className='d-flex justify-content-center color'>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                </div>
                </div>
                <button class="button type1" onClick={()=>state({
                  id:2,
                  name:"adipisci officia libero",
                  Image:f2,
                  price:880.00, 
                })}>
                    <div className='ss'>
                    <div id='ico'><BsCart3/></div>
                    <span class="btn-txt">Add to cart</span>
                    </div>
                </button>
              </div>
            </div>
            <div className=' col-lg-3 col-md-4 col-sm-6'>
              <div className="card d-flex flex-column align-items-center gap-1">
                <div className='card-img'><img src={f3} alt=''/></div>
                <div className='layerblack'></div>
                <div className='card-desc'> <h6>Internet tend to repeat</h6></div>
                <div className='eletnen-elly-t7t'>
                <div className='d-flex justify-content-center gap-3'><span style={{color:"red",fontWeight:"600"}}>$415.00</span> <del style={{fontWeight:"200",fontSize:"14px"}}>$770.00</del></div>
                <div className='d-flex justify-content-center color'>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                </div>
                </div>
                <button class="button type1" onClick={()=>state({
                  id:3,
                  name:"Internet tend to repeat",
                  Image:f3,
                  price:415.00, 
                })}>
                    <div className='ss'>
                    <div id='ico'><BsCart3/></div>
                    <span class="btn-txt">Add to cart</span>
                    </div>
                </button>
              </div>
            </div>
            <div className=' col-lg-3 col-md-4 col-sm-6'>
              <div className="card d-flex flex-column align-items-center gap-1">
                <div className='card-img'><img src={f4} alt=''/></div>
                <div className='layerblack'></div>
                <div className='card-desc'> <h6>Many desktop publishing</h6></div>
                <div className='eletnen-elly-t7t'>
                <div className='d-flex justify-content-center gap-3'><span style={{color:"red",fontWeight:"600"}}>$780.00</span> <del style={{fontWeight:"200",fontSize:"14px"}}>$1370.25</del></div>
                <div className='d-flex justify-content-center color'>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                </div>
                </div>
                <button class="button type1" onClick={()=>state({
                  id:4,
                  name:"Many desktop publishing",
                  Image:f4,
                  price:780.00, 
                })}>
                    <div className='ss'>
                    <div id='ico'><BsCart3/></div>
                    <span class="btn-txt">Add to cart</span>
                    </div>
                </button>
              </div>
            </div>
            <div className=' col-lg-3 col-md-4 col-sm-6'>
              <div className="card d-flex flex-column align-items-center gap-1">
                <div className='card-img'><img src={f5} alt=''/></div>
                <div className='layerblack'></div>
                <div className='card-desc'> <h6>injected humour repetition</h6></div>
                <div className='eletnen-elly-t7t'>
                <div className='d-flex justify-content-center gap-3'><span style={{color:"red",fontWeight:"600"}}>$772.00</span> <del style={{fontWeight:"200",fontSize:"14px"}}>$1000.25</del></div>
                <div className='d-flex justify-content-center color'>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                </div>
                </div>
                <button class="button type1" onClick={()=>state({
                  id:5,
                  name:"injected humour repetition",
                  Image:f5,
                  price:772.00, 
                })}>
                    <div className='ss'>
                    <div id='ico'><BsCart3/></div>
                    <span class="btn-txt">Add to cart</span>
                    </div>
                </button>
              </div>
            </div>
            <div className=' col-lg-3 col-md-4 col-sm-6'>
              <div className="card d-flex flex-column align-items-center gap-1">
                <div className='card-img'><img src={f6} alt=''/></div>
                <div className='layerblack'></div>
                <div className='card-desc'> <h6>randomised humour words</h6></div>
                <div className='eletnen-elly-t7t'>
                <div className='d-flex justify-content-center gap-3'><span style={{color:"red",fontWeight:"600"}}>$980.00</span> <del style={{fontWeight:"200",fontSize:"14px"}}>$1200.25</del></div>
                <div className='d-flex justify-content-center color'>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                </div>
                </div>
                <button class="button type1" onClick={()=>state({
                  id:6,
                  name:"randomised humour words",
                  Image:f6,
                  price:980.00, 
                })}>
                    <div className='ss'>
                    <div id='ico'><BsCart3/></div>
                    <span class="btn-txt">Add to cart</span>
                    </div>
                </button>
              </div>
            </div>
            <div className=' col-lg-3 col-md-4 col-sm-6'>
              <div className="card d-flex flex-column align-items-center gap-1">
                <div className='card-img'><img src={f7} alt=''/></div>
                <div className='layerblack'></div>
                <div className='card-desc'> <h6>expedita distinctio rerum</h6></div>
                <div className='eletnen-elly-t7t'>
                <div className='d-flex justify-content-center gap-3'><span style={{color:"red",fontWeight:"600"}}>$573.00</span> <del style={{fontWeight:"200",fontSize:"14px"}}>$660.25</del></div>
                <div className='d-flex justify-content-center color'>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                </div>
                </div>
                <button class="button type1" onClick={()=>state({
                  id:7,
                  name:"expedita distinctio rerum",
                  Image:f7,
                  price:573.00, 
                })}>
                    <div className='ss'>
                    <div id='ico'><BsCart3/></div>
                    <span class="btn-txt">Add to cart</span>
                    </div>
                </button>
              </div>
            </div>
            <div className=' col-lg-3 col-md-4 col-sm-6'>
              <div className="card d-flex flex-column align-items-center gap-1">
                <div className='card-img'><img src={f8} alt=''/></div>
                <div className='layerblack'></div>
                <div className='card-desc'> <h6>Itaque earum rerum</h6></div>
                <div className='eletnen-elly-t7t'>
                <div className='d-flex justify-content-center gap-3'><span style={{color:"red",fontWeight:"600"}}>$297.00</span> <del style={{fontWeight:"200",fontSize:"14px"}}>$300.00</del></div>
                <div className='d-flex justify-content-center color'>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                </div>
                </div>
                <button class="button type1" onClick={()=>state({
                  id:8,
                  name:"Itaque earum rerum",
                  Image:f8,
                  price:297.00, 
                })}>
                    <div className='ss'>
                    <div id='ico'><BsCart3/></div>
                    <span class="btn-txt">Add to cart</span>
                    </div>
                </button>
              </div>
            </div>
            {/* """""""""""""""""""""""""""""""""""""" */}
          </div>
        </div>
  
    </Fragment>
  )
}

export default Shop