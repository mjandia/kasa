import React from "react";
import '../styles/Banner.css'
import BannerHome from '../image/Banner.png'
import Background1 from '../image/Background1.png'

function BannerPresentation () {
    const bannerPath = window.location.pathname;

    if (bannerPath === '/') {
    return (
        <div>
        <img src={BannerHome} alt='' className='Banner' />
        <h2 className='everywhere'>Chez vous, partout et ailleurs</h2>
        </div> 
        );
    }
    else if (bannerPath === '/propos') {
        return (
        <div>
        <img src={Background1} alt='' className='Banner' />
        <h2 className='everywhere'>Chez vous, partout et ailleurs</h2>
        </div>
        );
    }

};


export default BannerPresentation