import React, { useEffect, useState } from 'react'
import './Segment.css';
import { useDispatch, useSelector } from 'react-redux';
import {addSegment} from '../SegmentReducer';
import axios from 'axios';


const Segment:React.FC<any> = () => {
  const [segmentName, setSegmentName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [account, setAccount] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e:any) =>{
    e.preventDefault();
    dispatch(addSegment({
      segment_name:segmentName,
      schema:[
        {first_name : firstName},
        {last_name : lastName},
        {age : age},
        {account_name : account},
        {city : city},
        {state: state}
      ]
    }))
  } 
  return (
    <form onSubmit={handleSubmit} className='form'>
    <div className="formSegment">
    <p>Enter the Name of the Segment</p>
    <div className="form-group">
      <input className='form-control' type="text" placeholder='Name of segment' name="segment_name" id="segment_name" onChange={(e)=>setSegmentName(e.target.value)}/>
    </div> 
    <p style={{marginTop:'20px'}}>To Save your segment ,you need to add the schemas to build the query</p>
     <div className='form-group'>
          <span className='tune'></span>
          <input className='form-control' type="text" name='last_name' placeholder='Last Name' onChange={e=>setLastName(e.target.value)}/>
     </div>
     <div className='form-group'>
         <span className='tune' style={{backgroundColor:'lightgreen'}}></span>
         <input className='form-control' type="text" name='age' placeholder='Age' onChange={e=>setAge(e.target.value)}/>
     </div>
     <div className='form-group'>
         <span className='tune' style={{backgroundColor:'lightgrey'}}></span>
         <input className='form-control' type="text" name='account_name' placeholder='Account Name' onChange={e=>setAccount(e.target.value)}/>
     </div>
     <div className='form-group'>
         <span className='tune' style={{backgroundColor:'violet'}}></span>
         <input className='form-control' type="text" name='city' placeholder='City' onChange={e=>setCity(e.target.value)}/>
     </div>
     <div className='form-group'>
         <span className='tune' style={{backgroundColor:'orange'}}></span>
         <input className='form-control' type="text" name='state' placeholder='State' onChange={e=>setState(e.target.value)}/>
     </div>
     <button className='addSection' type='reset'>+Add new schema</button>
     </div>
     <div className='saveButton'>
     <button className="ssb" type='submit'>
          Save the Segment
      </button>
      <button className='cancel'>Cancel</button>
      </div> 
    </form>
  )

}
export default Segment;