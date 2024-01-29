import React, { useState } from 'react'
import { Kady } from './Slice'
import { useSelector } from 'react-redux'
import "../CSS/shop.css";

function Cart(){
  let data=useSelector((val)=>val?.productsslice?.productslist);
  let tot=[];
  let sum=0;
  let item;
  const [newdata, setnewdata] = useState(data);
  function remove(id){ 
    alert(`item ${id} Removed`);
    if(sum>0){
      sum -= data[id-1].price;
    }
    else{
      alert("your check is already zeroo")
    }  
    alert(`Your total cost is ${sum} `)
  }
  async function Add(id){
    // const x=data.map((e)=>{
    //   if(e.id==id){
    //     alert("okaay")
    //     return e
    //   }
    // })
    // alert(x)
    // for(i=0;i<data.lenght;i++){
    //   sum+=data[i].price
    // }
    // item=await data.filter((e)=>e.id==id)
    // alert(item.id)
      alert(`item ${id} Added`);
      sum += data[id-1].price;
      alert(`Your total cost is ${sum}`)
  }
  function Check(){
    sum=0;
    alert(`your total price is 0`);
  }
 console.log(data)
  return (
    <div>
      <h1 style={{marginTop:"90px"}} className='d-flex justify-content-center align-items-center'>Your cart</h1>
       <div className='continer-cart'>
        {
          data?.map((c)=><div className='cartitem'>
            <div className='sora'>
            <div className='img'><img src={c.Image}/></div>
            </div>
            <div className='kala'>
                <div className='desc'>
                  <div><h3>Item {c.id}:</h3></div>
                  <div><h5 style={{color:"white",fontFamily:"sans-serif",fontWeight:"bold"}} >{c.name}</h5></div>
                  </div>
                  <div className='desc'>
                  <div><h3>price:</h3></div>
                  <div><h5 style={{color:"green",fontFamily:"sans-serif"}}>{c.price}$</h5></div>
                  </div>

            </div>
            <div className='down'>
            <button className="Btn" onClick={()=>Add(c.id)}>
                    Add
                    <svg class="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
                  </button>
                  <button className="Btn" onClick={()=>remove(c.id)}>
                    Remove
                    <svg class="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
                  </button>
            </div>
        
          
            
          </div>
         

          )
        }

          <button onClick={Check}>Reset</button>
      </div>
     
      
      
    </div>

  )
}

export default Cart