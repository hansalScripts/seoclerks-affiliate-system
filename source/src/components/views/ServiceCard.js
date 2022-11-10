import React, { useEffect, useState } from 'react';
import Endpoint from '../model/Endpoint';
import HCard from './HCard';
import VCard from './VCard';

const ServiceCard = ({ searchParams }) => {

    const [listStyle, setListStyle] = useState(false);

    const [services, setServices] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const viewHorizontal = (services) => {
        return Array.isArray(services) && services.map(item => {
            return (
                <div className='col-xl-4 col-md-6' key={item.id}>
                    {item.id && <HCard item={item} />}
                </div>
            );
        });
    }

    const viewVertical = (services) => {
        return Array.isArray(services) && services.map(item => {
            return (
                <div className='col-xl-12' key={item.id}>
                    {item.id && <VCard item={item} />}
                </div>
            );

        });
    }


    useEffect(() => {
        Endpoint([searchParams]).then(response => {
            setIsLoading(false);
            response.data && setServices(Object.values(response.data));
        });

    }, [searchParams]);

    return (
        <div className='container position-relative'>
            {isLoading && <i className='fas fa-spin fa-spinner fa-xl position-absolute' style={{ top: "50px", left: "50%" }}></i>}
            <div className='header_wrapper my-2 p-2 bg-default d-flex flex-end'>
                <button type='button'
                    className={listStyle ? "btn btn-default btn-sm  bg-dark" : "btn btn-default btn-sm "}
                    onClick={() => setListStyle(true)}>
                    <i className='fas fa-list-alt'></i>
                </button>
                <button type='button' className={listStyle ? "btn btn-default btn-sm " : "btn btn-default btn-sm bg-dark"} onClick={() => setListStyle(false)}>
                    <i className='fas fa-list'></i>
                </button>
            </div>
            <div className='row'>
                {listStyle ? viewHorizontal(services) : viewVertical(services)}
                <div id="loadMoreContainer"></div>
            </div>
        </div>
    )
}

export default ServiceCard;