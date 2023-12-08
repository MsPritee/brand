import React, { useEffect, useState } from 'react'
import './Homepage.css'
import avtar from './Images/first/avtar.png'
import first1 from './Images/first/1.png'
import first2 from './Images/first/5.png'
import first3 from './Images/first/6.png'
import first4 from './Images/first/7.png'
import first5 from './Images/first/Rectangle.svg'
import slide1 from './Images/second/Property 1=Variant2.png'
import slide2 from './Images/second/Property 1=Variant3.png'
import slide3 from './Images/second/Property 1=Variant4.png'
import slide4 from './Images/second/Property 1=Variant5.png'
import slide5 from './Images/second/Property 1=Variant6.png'
import slide6 from './Images/second/Property 1=Variant7.png'
import thirdS1 from './Images/third/Property 1=Default.png'
import thirdS2 from './Images/third/Property 1=Variant2.png'
import thirdS3 from './Images/third/Property 1=Variant3.png'
import thirdS4 from './Images/third/Property 1=Variant4.png'
import thirdS5 from './Images/third/Property 1=Variant5.png'
import thirdS6 from './Images/third/Property 1=Variant6.png'
import forS3 from './Images/fourth/Rectangle (2).png';
import forS4 from './Images/fourth/Rectangle.png';
import forS5 from './Images/fourth/11.png';
import forS6 from './Images/fourth/Untitled11.png';
import forS7 from './Images/fourth/Untitled3.png';
import fiveS1 from './Images/fifth/Group 23.png';
import fiveS2 from './Images/fifth/1.png';
import fiveS3 from './Images/fifth/344201-PAOSF6-481-removebg-preview 1.png';
import fiveS4 from './Images/fifth/3784896 1.png';
import fiveS6 from './Images/fifth/Gamification-marketing-feat (1)-PhotoRoom 1.png';
import fiveS7 from './Images/fifth/Group 3.png';
import fiveS8 from './Images/fifth/Rectangle__1_-removebg-preview.png';
import fiveS9 from './Images/fifth/removal 1.png';
import fiveS10 from './Images/fifth/flat-woman-taking-selfie_23-2149003610 1.png';
import Slider from './Slider';
import Footer from './Footer'
import HorizontalScroll from './HorizontalScroll'
import Sidebar from './Sidebar'



export default function Homepage() {


    const [showSidebar, setShowSidebar] = useState(false);

    const handleClick = () => {
        setShowSidebar(true);
    };

    const secImages = [slide1, slide2, slide3, slide4, slide5, slide6]
    const thirdImages = [thirdS1, thirdS2, thirdS3, thirdS4, thirdS5, thirdS6]
    const fourthImages = [forS4]
    const text = ["grab at tention", "drive sales", "ignite buzz", "drive sales"]

    document.addEventListener("DOMContentLoaded", function () {
        var circle = document.querySelector('.circle');
        circle.addEventListener("click", function () {
            circle.style.border = "2px solid red";
        });
    });


    return (
        <div className='webpage'>
            <div className='first'>
                <div className=' flex flex-col'>
                    <div className='flex h-fit'>
                        <div className='w-full   '>
                            <div className='logo-box   flex flex-col text-center w-fit  justify-center'>
                                <img className='avtar ' src={avtar} />
                                <h1 className='avtar-txt w-full z-10  bottom-0 pl-2'>activatr</h1>
                            </div>
                            <div className='main flex flex-row h-1/2 ml-8 justify-between ' >
                                <div className='left-main h-full  flex flex-col gap-18 ' >
                                    <div className='flex-1 z-0 h-fit'>
                                        <h1 className='main-txt-1 text-1 '>
                                            Make your
                                        </h1>
                                    </div>
                                    <div className='flex-1 flex items-center relative h-36 '>
                                        {/* <div className='  '> */}
                                        <h1 className='main-txt-1  text-2 text-9xl '>
                                            BRAND
                                        </h1>
                                            <img className=' down2 ' src={first5} />
                                        {/* </div> */}
                                    </div>
                                    <div className='flex-1 z-0 h-fit'>
                                        <h1 className='main-txt-1 text-3 flex-3'>
                                            Standout
                                        </h1>
                                    </div>
                                </div>
                                <div className='middle-main relative ' >
                                    <img className=' down3 ml-32  z-10 absolute ' src={first3} />
                                    <img className='z-0' src={first1} />
                                </div>
                            </div>
                            <div className='relative'>
                                <img className=' down1 absolute z-0 ' src={first2} />
                                <div className='relative'>
                                <h3 className='brd-power   mt-12 z-20  '>
                                    Unleash Your Brand's Power!
                                </h3>
                                
                                <img className=' down z-10 absolute ' src={first4} />
                                </div>

                            </div>

                        </div>
                        <div className='right-main sidebar justify-center cursor-pointer flex flex-col' onClick={handleClick}>
                            <h1 className=' sidebar-txt w-12 ml-2'>

                            </h1>
                            <h1 className='  ml-2 w-8 h-3 sidebar-txt justify-start'>

                            </h1>
                            <h1 className='  ml-2 h-3 w-12 sidebar-txt'>

                            </h1>
                            {showSidebar && <Sidebar />}
                        </div>

                    </div>
                    <div className='border '>
                        <HorizontalScroll items={text} />
                    </div>
                </div>
            </div>


            <div className='second '>
                <div className=' flex flex-col mt-12  items-center '>

                    <div className='sec-heading   '>
                        {/* <img src={compIdea} /> */}
                        <h1 className='main-txt-3 text--3 text-9xl '>
                            Campaign Idea
                        </h1>
                    </div>
                    <div className='center-box'>

                        <Slider images={secImages} />
                    </div>
                    <div className='sec-btn-box ' >
                        <button className='know-mor-btn'>Know More</button>
                    </div>
                </div>
            </div>
            <div className='third h-1/2 w-1/3'>
                <Slider images={thirdImages} />
            </div>
            <div className='fourth'>
                <div className=' flex flex-col mt-12 items-center '>
                    <div className='sec-heading   '>
                        <h1 className='main-txt-4 text-4 text-9xl '>
                            Create Campaign
                        </h1>
                    </div>
                    <div className='center-box'>
                        <Slider images={fourthImages} />
                    </div>
                    <div className='flex mb-8 '>
                        <div className='relative '>
                            <img className=' absolute arrow left-52 top-20 h-12 z-20' src={forS6} />

                            <img className=' absolute rounded-full circle left-12 top-3  z-0' src={forS7} />

                            <img className=' left-2  h-72  z-10' src={forS3} />

                        </div>
                        <img className='z-0 rounded' src={forS5} />
                    </div>

                </div>
            </div>
            <div className='fifth'>
                <div className='flex'>
                    <div className='mt-5 flex gap-10  flex-col ml-14 '>
                        <div className='fiveS2'>
                            <img src={fiveS2} />
                        </div>
                        <img className='h-1/2' src={fiveS1} />
                    </div>
                    <div className='flex-auto flex flex-col px-8 py-3 bg-white rounded-xl m-5'>
                        <h4 className='text-3xl font-extrabold text-center'> Select Campaign Type </h4>
                        <div className='row1 flex py-5 px-8 justify-between '>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='box1 h-32 w-32 bg-orange-400 flex justify-center items-center rounded-lg' >
                                    <img className='h-28' src={fiveS10} />
                                </div>
                                <p className='font-bold text-xl'>Pictivatr</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='box1 flex justify-center items-center h-32 w-32 bg-orange-400 rounded-lg' >
                                    <img className='h-28 w-32' src={fiveS7} />
                                </div>
                                <p className='font-bold text-xl'>Pledge</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='box1 h-32 w-32 bg-orange-400 rounded-lg' >
                                    <img src={fiveS8} />
                                </div>
                                <p className='font-bold text-xl'>Survey</p>
                            </div>
                        </div>

                        <div className='row1 flex py-5 px-8 justify-between '>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='box1 h-32 w-32 bg-orange-400 rounded-lg' >
                                    <img src={fiveS3} />
                                </div>
                                <p className='font-bold text-xl'>Quiz</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='box1 h-32 w-32 bg-orange-400 rounded-lg' >
                                    <img src={fiveS9} />
                                </div>
                                <p className='font-bold text-xl'>Video based Quiz</p>
                            </div>
                            <div className='flex flex-col text-center items-center'>
                                <div className='box1 h-32 w-32 bg-orange-400 rounded-lg' >
                                    <img src={fiveS6} />
                                </div>
                                <p className='font-bold text-xl'>Gamification</p>
                            </div>
                        </div>

                        <div className='row1 flex py-5 px-8 justify-between '>
                            <div className='flex flex-col  items-center justify-center'>
                                <div className='box1 flex  items-center justify-center h-32 w-32 bg-orange-400 rounded-lg'  >
                                    <img className='w-28' src={fiveS4} />
                                </div>
                                <p className='font-bold text-xl'>Educational Ideas</p>
                            </div>


                        </div>
                        <div className='justify-center flex'>
                            <button className=' next-btn  h-9 w-32 '>Next</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}
