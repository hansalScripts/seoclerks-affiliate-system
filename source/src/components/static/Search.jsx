import React, { useState } from 'react';
import { MDBBtn, MDBInput, MDBRange, MDBCheckbox } from 'mdb-react-ui-kit';


export default function Search({handleSubmit}) {

    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

    const [formData, setFormData] = useState({});

    function toggleSearchText() {
        if (showAdvancedSearch) {
            return 'Hide Advanced Search'
        }
        return 'Advanced Search';
    }

    function setFormInput(e) {
        const formValue = e.target.value;
        const formName = e.target.name;
        setFormData({ ...formData, [formName]: formValue });
    }

    function renderAdvancedSearch() {
        if (showAdvancedSearch) {
            return <div className='col-xl-12'>
                <div className='row'>
                    <div className='col-xl-12'>
                        <select className='form-control' name='st' onChange={setFormInput}>
                            <option>Services</option>
                            <option>Software</option>
                            <option>Tweets</option>
                            <option>Articles</option>
                            <option>Blog Reviews</option>
                            <option>Ebooks</option>
                            <option>Themes</option>
                        </select>
                    </div>
                    <div className='col-xl-12'>
                        <MDBInput label='Search Users' name='by' type='search' onChange={setFormInput} />
                    </div>
                    <div className='col-xl-12'>
                        <select className='form-control' name='ul' onChange={setFormInput}>
                            <option>User Level</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                            <option>Level X</option>
                        </select>
                    </div>
                    <div className='col-xl-12'>
                        <MDBRange defaultValue={40} max={40} min={1} name='ul' label='Maximum result of services' onChange={setFormInput} />
                    </div>
                    <div className='col-xl-12'>
                        <MDBRange defaultValue={1000} max={1000} min={1} name='p' label='Maximum services prize' onChange={setFormInput} />
                    </div>
                    <div className='col-xl-12'>
                    </div>
                    <div className='col-xl-12'>
                        <MDBCheckbox name='ins' id='flexCheckDefault' label='Instant Download Only' onChange={setFormInput} />
                    </div>
                    <div className='col-xl-12'>
                        <MDBCheckbox name='g' id='flexCheckDefault1' label='Guaranteed Only' onChange={setFormInput} />
                    </div>
                    <div className='col-xl-12'>
                        <MDBCheckbox name='sub' id='flexCheckDefault2' label='Subscription Only' onChange={setFormInput} />
                    </div>

                    <div className='col-xl-12'>
                        <MDBCheckbox name='os' id='flexCheckDefault3' label='On Sale Only' onChange={setFormInput} />
                    </div>

                    <div className='col-xl-12'>
                        <MDBCheckbox name='oh' id='flexCheckDefault4' label='Order in ASC' onChange={setFormInput} />
                    </div>

                    <div className='col-xl-12'>
                        <select className="form-control" id="oby" name="oby" onChange={setFormInput}>
                            <optgroup label="All">
                                <option value="">Randomly</option>
                            </optgroup>
                            <optgroup label="Services">
                                <option value="totalorders">Total Orders</option>
                                <option value="update">Last Update</option>
                                <option value="bookmarks">Total Bookmarks</option>
                                <option value="ratings">Positive Ratings</option>
                            </optgroup>
                            <optgroup label="WTB/WTT">
                                <option value="maxprice">Max Price</option>
                                <option value="biddingdays">Bidding Days</option>
                                <option value="bidstart">Start Date</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
        }

        return null;
    }

    return (
        <div className='search_card'>
            <div className='row mt-3'>
                <div className='col-xl-12'>
                    <MDBInput label='Search Items' name='s' id='search_item' type='search' onChange={setFormInput} />
                </div>
                {renderAdvancedSearch()}
                <div className='col-xl-12'>
                    <small className='text-primary' onClick={() => setShowAdvancedSearch(!showAdvancedSearch)} style={{ cursor: 'pointer' }}>
                        {toggleSearchText()}
                    </small>
                </div>
                <div className='col-xl-12'>
                    <MDBBtn color='primary' onClick={() => handleSubmit(formData)}>
                        <i className='fas fa-search'></i> Filter
                    </MDBBtn>
                </div>
            </div>
        </div>
    );
}