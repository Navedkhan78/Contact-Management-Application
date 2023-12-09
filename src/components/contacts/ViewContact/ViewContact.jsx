import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContactServices } from '../../../services/ContactService'
import Spinner from '../../Spinner/Spinner'

const ViewContact = () => {
  let {contactId}=useParams()
  let [state,setState]=useState({loading:false,contact:{},errorMessage:"error"})
  useEffect(()=>{
    let pro = new Promise((res,rej)=>{
      setState({...state,loading:true})
      let response=ContactServices.getContact(contactId)
      res(response)
      rej("error")
    })
    pro.then((res)=>{
      console.log(res.data);
      setState({...state,loading:false,contact:res.data})
    }).catch(()=>{
      alert("error while fetching the data !!!")
      setState({...state,loading:false,errorMessage:"error"})
    })
  },[contactId])
  let {loading,contact,errorMessage}=state
  return (
    <div>
      <React.Fragment>
        {/* <h1>{contactId}</h1> */}
        {
          loading?<Spinner/>:<React.Fragment>
          {
            Object.keys(contact).length>0 && (
          <>
            <section className="view-contact-intro p-3">
          <div className="container">
            <div className="row">
              <p className='h3 text-warning fw-bold'>View Contact</p>
              <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia in repellendus id fugit eius nobis, autem, tempora veniam, ut dolor vel doloribus a consequatur nisi eaque harum adipisci asperiores voluptas.</p>
            </div>
          </div>
        </section>
        <section className="view-contact">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
              <img src={contact.photo} alt="" srcset="" className='img-fluid' height='200px' width='200px'/>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-8">
              <ul className='list-group'>
                        <li className='list-group-item list-group-item-action'>Name : <span className='fw-bold'>{contact.name}</span></li>
                        <li className='list-group-item list-group-item-action'>Contact : <span className='fw-bold'>{contact.mobile}</span></li>
                        <li className='list-group-item list-group-item-action'>Email: <span className='fw-bold'>{contact.email}</span></li>
                        <li className='list-group-item list-group-item-action'>Company : <span className='fw-bold'>{contact.company}</span></li>
                        <li className='list-group-item list-group-item-action'>Title : <span className='fw-bold'>{contact.title}</span></li>
                        <li className='list-group-item list-group-item-action'>Group: <span className='fw-bold'>{contact.group}</span></li>
              </ul>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
              <Link to={'/contacts/list'} className='btn btn-warning ms-2'>Back</Link>
              </div>
            </div>
          </div>
        </section>
        </>
            )}
            </React.Fragment>
        }
        
      </React.Fragment>
      
    </div>
  )
}

export default ViewContact