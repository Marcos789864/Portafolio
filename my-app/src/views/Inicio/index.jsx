import React, { useEffect, useState } from 'react';
import persona from '../../imgs/hello3.svg';
import wave from '../../imgs/wave-bg.svg';

const Inicio = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, 300); 
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <div className={`containerW ${loaded ? 'loaded' : ''}`}>
                <img src={persona} alt="Persona" />
                 
                
                <div className='c'>
                <h3>Hola!</h3>
                    <h1> Soy Marcos Martinez</h1>
                </div>
            </div>
            <div className={`containerW2 ${loaded ? 'loaded' : ''}`}>
                <img src={wave} className='Wave' alt="Wave" />
            </div>
        </div>
    );
}

export default Inicio;