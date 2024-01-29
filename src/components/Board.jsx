import React from 'react'

function Board() {
  return (
    <>
          <div className='first'>
            <h2 style={{color:"white",textAlign:"center"}}>Board</h2>

        </div>
        <div className='secound'>
            <div className='BLOCKS' style={{textAlign:"center"}}>
                <span className='TITLE'>TO-DO</span>
                <div className='tasks'></div>
                <div className='tasks'></div>

                </div>
            <div className='BLOCKS' style={{textAlign:"center"}}>
                <span className='TITLE'>IN-PROGRESS</span>
                <div className='tasks'></div>
                <div className='tasks'></div>
                <div className='tasks'></div>

                </div>
            <div className='BLOCKS' style={{textAlign:"center"}}>
                <span className='TITLE'>IN-REVIEW</span>
                <div className='tasks'></div>
                <div className='tasks'></div>
                </div>
            <div className='BLOCKS' style={{textAlign:"center"}}>
                <span className='TITLE'>DONE</span>
                <div className='tasks'></div>
                <div className='tasks'></div>
                <div className='tasks'></div>
                <div className='tasks'></div>

                </div>

        </div>
    </>
  )
}

export default Board