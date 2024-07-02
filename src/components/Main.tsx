import React from 'react'
import '../App.css';
const Main : React.FC= () => {


  return (
    <div >
        {/* ---header--- */}
        <div className='header'>
          <button className='headerButton'>
            <i className="fa-solid fa-chevron-left"></i>
            <h3>View Audience</h3>
          </button>
        </div>
        <div className='saveSegment'>
          <button className='saveSegmentButton'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
              Save Segment
          </button>
        </div>
        {/* Modal declaration */}
        <div className="offcanvas offcanvas-end" data-bs-scroll="true"  id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanvas-header" >
          <div className='header'>
                  <button className='headerButton'>
                    <i className="fa-solid fa-chevron-left" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                    <h3  data-bs-dismiss="offcanvas" aria-label="Close">Save Segment</h3>
                  </button>
            </div>
          </div>
          <div className="offcanvas-body">
            
          </div>
          <div className="offcanvas-footer">
            <button className="ssb">
                Save the Segment
            </button>
            <button className='cancel'>Cancel</button>
          </div>
        </div>
    </div>
  )
}

export default Main