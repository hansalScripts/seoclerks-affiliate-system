import React from 'react';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

export default function Navbar() {

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
        <MDBNavbarBrand to='/'>
          <img src='assets/img/logo.png' alt='' style={{ height: '40px', width: '120px' }} />
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar >
  );
}