import React from 'react';
import "../CSS/jira.css";
import { Link, Outlet } from 'react-router-dom';

function Jira() {
  return (
    <div className='big'>

  
    <div className='Dashbord'> 
        <h3 style={{color:"white",alignSelf:"flex-start"}}>Planning</h3>
        <div className='items' style={{textAlign:"center",zIndex:"1"}} >Timeline</div>
        <Link to="backlog"><div className='items' style={{textAlign:"center",zIndex:"1"}}>Backlog</div></Link>
        <div className='items' style={{textAlign:"center",zIndex:"1"}}>Board</div>
        <div className='items' style={{textAlign:"center",zIndex:"1"}}>Reports</div>
        <div className='items' style={{textAlign:"center",zIndex:"1"}}>issues</div>
        <h3 style={{color:"white",alignSelf:"self-start"}}>Development</h3>
        <div className='items' style={{textAlign:"center",zIndex:"1"}}>Code</div>
        <div className='items' style={{textAlign:"center",zIndex:"1"}}>Releases</div>
        <div className='items' style={{textAlign:"center",zIndex:"1",width:"75px"}}>shourtcut</div>
        <div className='items' style={{textAlign:"center",zIndex:"1" }}>Settings</div>
    
    </div>
    <div className='containerr'>
          <Outlet/>
        
    </div>
    </div>
  )
}

export default Jira