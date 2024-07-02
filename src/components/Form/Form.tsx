import React from 'react';
import './Form.css'
const Form:React.FC = () => {
  const handleSubmit = (e:any) =>{
    console.log('form--->',e);
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
           <div className='form-group'>
                <span className='tune'></span>
                <input  className='form-control' type="text" name='first_name' placeholder='First Name'/>
           </div>
           <div className='form-group'>
                <span className='tune'></span>
                <input className='form-control' type="text" name='last_name' placeholder='Last Name'/>
           </div>
           <div className='form-group'>
               <span className='tune'></span>
               <input className='form-control' type="text" name='age' placeholder='Age'/>
           </div>
           <div className='form-group'>
               <span className='tune'></span>
               <input className='form-control' type="text" name='account_name' placeholder='Account Name'/>
           </div>
           <div className='form-group'>
               <span className='tune'></span>
               <input className='form-control' type="text" name='city' placeholder='City'/>
           </div>
           <div className='form-group'>
               <span className='tune'></span>
               <input className='form-control' type="text" name='state' placeholder='State'/>
           </div>
        </form>
    </div>
  )
}

export default Form