import React from 'react'
import spinnerImg from '../../components/asset/img/spinner.gif'

const Spinner = () => {
  return (
    <div>
        <React.Fragment>
            <img src={spinnerImg} alt='' className='d-flex m-auto' style={{width:"200px"}} />
        </React.Fragment>
    </div>
  )
}

export default Spinner