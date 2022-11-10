import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';



export default function HCard({ item }) {
    return (
        <MDBCard className='my-3 border border-primary' style={{ minHeight: "350px" }}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay position-relative'>
                {item.featured ? <span className='featured_icon'>Featured</span> : ''}
                <MDBCardImage src={item.image_med} fluid alt='...' style={{ maxHeight: "150px", width: "100%" }} />
                <a href='#!' onClick={(e) => e.preventDefault()}>
                    <span className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></span>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <div className='d-flex align-items-center justify-content-between'>
                    <h4 className='text-primary'>{item.price}$</h4>
                    <div className='d-flex justify-content-center align-items-center'>
                        <a href={item.seller_profile}>
                            <img src={item.seller_avatar_thumb} className="rounded bg-dark" alt="" height="25px" width="25px" />
                        </a>
                        <p><a href={item.seller_profile} className="d-block text-dark">{item.seller_username}</a>
                            <small className='text-primary d-block'>level {item.seller_userlevel} </small>
                        </p>
                    </div>
                </div>
                <MDBCardTitle>
                    <a href={item.service_url} className="text-dark">
                        {item.title && (item.title).substring(0, 41)}....
                    </a>
                </MDBCardTitle>
                <MDBCardText>
                    {item.description && (item.description).substring(0, 51).toLowerCase()}...
                </MDBCardText>
                <MDBBtn href={item.service_url}>Order</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    )
}
