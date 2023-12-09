import React from 'react'
import { Link } from 'react-router-dom'

const EditContact = () => {
  return (
    <div>
      <React.Fragment>
        <section className='edit-contact'>
          <div className="container p-3">
            <div className="row">
              <p className='text-primary h4 fw-bold'>Edit Contact</p>
              <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, accusantium deleniti. Id aspernatur recusandae voluptatem illo, eligendi aliquid repellat ipsum modi nisi fugiat accusantium nesciunt similique officiis, debitis, nam earum?</p>
            </div>
            <div className="row d-flex align-items-center">
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
                  <input type="submit" value="Update" className='btn btn-primary'/>
                  <Link to={'/contacts/list'} className='btn btn-danger ms-2'>Cancel</Link>
                </div>
                </form>
              </div>
              <div className="col-md-8">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ne7oVV6Lx9uAnmJDUZrrLcGy8yzo1sXdpQ&usqp=CAU" alt="" srcset="" className='img-fluid' height='200px' width='200px'/>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    </div>
  )
}

export default EditContact