import React from 'react';
import "../../style/view/Equipo.css"
import { infoChef } from '../../helper/InfoEquipo';
import CardInfoChef from '../CardInfoChef';

const Team = () => {
    return (
        <div>
            <div className='portadaIeam'>
                <img src="https://images.pexels.com/photos/5779787/pexels-photo-5779787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div>
                    <h2 className='display-2 fw-bold' data-aos="fade-up">Nuestro Equipo</h2>
                    <p data-aos="fade-up">Conoce a las personas detrás de nuestro éxito y descubre las habilidades y
                        talentos únicos <br /> que hacen de nuestro equipo una fuerza imparable en
                        nuestra industria.
                    </p>
                </div>
            </div>
            <div className='container my-5'>
                <div className='row' data-aos="fade-up">
                    {
                        infoChef.map((item)=>(
                            <CardInfoChef item={item} key={item.id}></CardInfoChef>
                        ))
                    }
                </div>
            </div>
            <div className='container my-5' data-aos="fade-up">
                <h3 className='display-5'>Un Poco de nuestra Historia</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga et atque possimus
                    perspiciatis nemo nam quod saepe libero iusto. Quia saepe quasi animi accusantium excepturi
                    odit ipsam error dolorum culpa et ipsa nisi ea consequatur reprehenderit, exercitationem ad,
                    quibusdam nesciunt officiis nam eos! Dicta sequi corrupti aliquam praesentium facilis quam cum!
                    Dolores neque beatae ipsa fugiat architecto quia, rem repellendus, perferendis non sapiente cumque?
                    Tempora earum officiis similique explicabo sed atque quaerat cum, consequuntur aliquid ullam
                    architecto exercitationem voluptatem, molestias libero, rerum velit? Fuga, nam fugiat doloremque,
                    necessitatibus quae beatae quia expedita, voluptatum ducimus sunt quas optio rerum autem!
                </p>
            </div>
        </div>
    );
};

export default Team;