import React from 'react';
import { Link } from 'react-router-dom';

const CardInfoChef = ({item}) => {
    return (
        <div className='col-12 col-md-6 col-lg-4'>
        <div className='cardTeam mb-4'>
            <div className='imgTeam'>
                <img src={item.image} alt="" />
                <div className='redesChef'>
                    <div>
                        <button as={Link} to={"/"} className='linkRedes'>
                            <i className="bi bi-instagram"></i>
                        </button>
                        <button as={Link} to={"/"} className='linkRedes'>
                            <i className="bi bi-facebook"></i>
                        </button>
                        <button as={Link} to={"/"} className='linkRedes'>
                            <i className="bi bi-twitter-x"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column pt-2 fs-5'>
                <span>{item.nombre}</span>
                <p className='text-secondary'>{item.apellido}</p>
            </div>
        </div>
    </div>
    );
};

export default CardInfoChef;