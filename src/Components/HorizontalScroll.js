import React, { useEffect, useRef } from 'react';
import './HorizontalScroll.css'


const HorizontalScroll = ({ items }) => {

    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const sliderWidth = slider.scrollWidth;
        const viewWidth = slider.clientWidth;

        let scrollPos = 0;
        const speed = 1; // Adjust the speed of scrolling

        const scroll = () => {
            scrollPos += 1;
            if (scrollPos >= sliderWidth - viewWidth) {
                scrollPos = 0;
            }
            slider.scrollTo(scrollPos, 0);
        };

        const interval = setInterval(scroll, speed);

        return () => clearInterval(interval);
    }, [items]);

    return (
        <div className='scroll-container flex  w-full h-16 ' >
            <div ref={sliderRef} className='scroll-content overflow-hidden  whitespace-nowrap   font-bold text-3xl'>
                {items.map((item, index) => (
                    <div className='px-40 scroll-item ' key={index} >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HorizontalScroll;
