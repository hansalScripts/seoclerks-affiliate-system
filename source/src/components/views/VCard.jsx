import React from 'react'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn,
} from 'mdb-react-ui-kit';



export default function VCard({ item }) {
    return (
        <MDBCard className='my-2'>
            <MDBRow className='g-0'>
                <MDBCol md='4' className='p-1 position-relative'>
                    {item.featured ? <span className='featured_icon'>Featured</span> : ''}
                    <MDBCardImage src={item.image_med} alt='...' fluid style={{ height: "140px", width: "100%" }} />
                </MDBCol>
                <MDBCol md='8'>
                    <MDBCardBody className='p-1 px-2'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <MDBCardTitle>
                                    <a href={item.service_url} className="text-dark">
                                    {(item.title).substring(0, 41)}....
                                    </a>
                                </MDBCardTitle>
                                <MDBCardText>
                                    {(item.description).substring(0, 67).toLowerCase()}...
                                </MDBCardText>
                            </div>
                            <div>
                                <MDBCardTitle>{item.price}$</MDBCardTitle>
                            </div>
                        </div>
                        <hr className='p-0 my-2'/>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <button type='button' className='btn btn-default border border-info text-success bg-none mx-2'>
                                    <i className='fas fa-heart'></i> {item.positive_ratings}
                                </button>
                                <MDBBtn href={item.order_url}>
                                    <i className='fas fa-shopping'></i>
                                    Order Now
                                </MDBBtn>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <a href={item.seller_profile}>
                                <img src={item.seller_avatar_thumb} className="rounded bg-dark" alt="" height="35px" width="35px" />
                                </a>
                                <div><a href={item.seller_profile} className="d-block text-dark">{item.seller_username}</a>
                                    <small className='text-primary d-block'>level {item.seller_userlevel} </small>
                                </div>
                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </MDBCard>
    )
}
