import React from 'react';

import './homepage.styles.scss'


const HomePage = () => (
    <div className= 'homepage'>
        <div className= 'directory-menu'>
            <div className= 'menu-item'>
                <div className= 'content'>
                    <h1 className = 'title'> Tortas </h1>
                    <span className='subtitle'> Ordene ahora</span>
                </div>
            </div>
            <div className= 'menu-item'>
                <div className= 'content'>
                    <h1 className = 'title'> Marquesas </h1>
                    <span className='subtitle'> Ordene ahora</span>
                </div>
            </div>
            <div className= 'menu-item'>
                <div className= 'content'>
                    <h1 className = 'title'> Pie </h1>
                    <span className='subtitle'> Ordene ahora</span>
                </div>
            </div>
            <div className= 'menu-item'>
                <div className= 'content'>
                    <h1 className = 'title'> Cupcakes </h1>
                    <span className='subtitle'> Ordene ahora</span>
                </div>
            </div>
            <div className= 'menu-item'>
                <div className= 'content'>
                    <h1 className = 'title'> Besos de coco </h1>
                    <span className='subtitle'> Ordene ahora</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;