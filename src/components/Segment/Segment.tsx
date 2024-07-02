import React from 'react'
import './Segment.css';
import Form from '../Form/Form';
const Segment:React.FC<any> = () => {
    const segmentNameChange =(e:Event)=>{
        console.log('eventChanged-->',e);
    };
  return (
    <div className='container-fluid'>
        <p>Enter the Name of the Segment</p>
        <div className="form-group">
        <input className='form-control' type="text" placeholder='Name of segment' name="segment_name" id="segment_name" onChange={(e)=>segmentNameChange}/>
        </div> 
        <p style={{marginTop:'20px'}}>To Save your segment ,you need to add the schemas to build the query</p>
            
        <Form></Form>
        </div>
  )

}
export default Segment;