import React from 'react'
import { Link } from 'react-router-dom'

const AddContact = () => {
  return (
    <div>
      <React.Fragment>
        <section className='add-contact'>
          <div className="container p-3">
            <div className="row">
              <p className='text-success h4 fw-bold'>Create Contact</p>
              <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, accusantium deleniti. Id aspernatur recusandae voluptatem illo, eligendi aliquid repellat ipsum modi nisi fugiat accusantium nesciunt similique officiis, debitis, nam earum?</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <form action="">
                  <div className="mb-2">
                    <input type="text" placeholder='Name' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="text" placeholder='Photo Url' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="number" placeholder='Mobile' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="email" placeholder='Email' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="text" placeholder='Company Name' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <input type="text" placeholder='Title' className='form-control' />
                  </div>
                  <div className="mb-2">
                    <select name="" id="" className='form-control'>
                      <option value="">Select a Group</option>
                    </select>
                  </div>
                
                <div className="mb-2">
                  <input type="submit" value="Create" className='btn btn-success'/>
                  <Link to={'/contacts/list'} className='btn btn-danger ms-2'>Cancel</Link>
                </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    </div>
  )
}

export default AddContact