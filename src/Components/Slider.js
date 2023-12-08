import React, { useState, useEffect } from 'react';

function Slider({ images }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div>
            <img src={images[index]} alt="Slide" />
        </div>
    );
}

export default Slider;
