import React, { useState } from 'react'
import './Segment.css';
import { useDispatch } from 'react-redux';
import {addSegment} from '../SegmentReducer';


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
    }));
    resetform();
  } 
  const resetform =()=>{
    setSegmentName('')
    setFirstName('')
    setLastName('')
    setAge('')
    setAccount('')
    setCity('')
    setState('')
  }
  return (
    <form  className='form'>
    <div className="formSegment">
    <p>Enter the Name of the Segment</p>
    <div className="form-group">
      <input className='form-control' type="text" placeholder='Name of segment' value={segmentName} name="segment_name" id="segment_name" onChange={(e)=>setSegmentName(e.target.value)}/>
      <i className='fa fa-chevron-down'></i>
    </div> 
    <p style={{marginTop:'20px'}}>To Save your segment ,you need to add the schemas to build the query</p>
    <div className='form-group'>
          <span className='tune'></span>
          <input className='form-control' type="text" name='first_name' value={firstName} placeholder='Enter First Name' onChange={e=>setFirstName(e.target.value)}/>
          <i className='fa fa-chevron-down'></i>
     </div>
     <div className='form-group'>
          <span className='tune' style={{backgroundColor:'lightgreen'}}></span>
          <input className='form-control' type="text" name='last_name' value={lastName} placeholder='Enter Last Name' onChange={e=>setLastName(e.target.value)}/>
          <i className='fa fa-chevron-down'></i>
     </div>
     <div className='form-group'>
         <span className='tune' style={{backgroundColor:'lightgrey'}}></span>
         <input className='form-control' type="number" min={0} max={100} value={age} name='age' placeholder='Enter Age' onChange={e=>setAge(e.target.value)}/>
         <i className='fa fa-chevron-down'></i>
     </div>
     <div className='form-group'>
         <span className='tune' style={{backgroundColor:'violet'}}></span>
         <input className='form-control' type="text" name='account_name' value={account} placeholder='Enter Account Name' onChange={e=>setAccount(e.target.value)}/>
         <i className='fa fa-chevron-down'></i>
     </div>
     <div className='form-group'>
         <span className='tune' style={{backgroundColor:'yellow'}}></span>
         <input className='form-control' type="text" name='city' value={city} placeholder='Enter City' onChange={e=>setCity(e.target.value)}/>
         <i className='fa fa-chevron-down'></i>
     </div>
     <div className='form-group'>
         <span className='tune' style={{backgroundColor:'orange'}}></span>
         <input className='form-control' type="text" name='state' value={state} placeholder='Enter State' onChange={e=>setState(e.target.value)}/>
         <i className='fa fa-chevron-down'></i>
     </div>
     <button className='addSection' type='reset' onClick={resetform}>+Add new schema</button>
     </div>
     <div className='saveButton'>
     <button className="ssb" type='button' onClick={handleSubmit}>
          Save the Segment
      </button>
      <button className='cancel'>Cancel</button>
      </div> 
    </form>
  )

}
export default Segment;