import React from 'react'

import NotFoundImg from '../components/404.jpg';

export const NotFound = () =>{
    
    return (<section>
                <img className='movie-card-img'src={NotFoundImg} alt='page not found'/>
            </section> 
    )
}