import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './PhoneData.css'

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black"}}
      onClick={onClick}
    />
  );
}
function PhoneData() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };
  return (

    <div id='BannerParentContainer'>
      
    <div className='MobileDatacontainer'>
     <h2 style={{fontSize:"20px",fontWeight:"bolder"}}>Best Deals SmartPhones</h2>
    <Slider {...settings}>
    <div className='mobileDataContainer' >
      <img src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=70" alt="" />
      <div style={{textAlign:"center"}}>
        <h3>moto edge 40 neo</h3>
        <h2>incl of offer</h2>
      </div>
    </div>
    <div className='mobileDataContainer'>
      <img src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70" alt="" />
      <div style={{textAlign:"center"}}>
        <h3>vivo t2 Pro 5G</h3>
        <h2>incl of offer</h2>
      </div>
    </div>
    <div className='mobileDataContainer'>
      <img src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/s/9/i/m6-pro-5g-mzb0eqjin-poco-original-imags3e7dazavyje.jpeg?q=70" alt="" />
      <div style={{textAlign:"center"}}>
      <h3>Poco M6 Pro</h3>
        <h2>incl of offer</h2>
      </div>
    </div>
    <div className='mobileDataContainer'>
      <img src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/u/v/h/-original-imagxaqtzmqgtfen.jpeg?q=70" alt="" />
     <div style={{textAlign:"center"}}>
     <h3>Readme 12 5G</h3>
        <h2>incl of offer</h2>
     </div>
    </div>
    <div className='mobileDataContainer'>
      <img src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/n/z/4/-original-imagz5g9gyhmgusp.jpeg?q=70" alt="" />
     <div style={{textAlign:"center"}}> 
     <h3>Poco X6 Neo 5G</h3>
        <h2>incl of offer</h2>
     </div>
    </div>
    <div className='mobileDataContainer'>
      <img  src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/d/3/g/-original-imagy2v5ggthbvfe.jpeg?q=70" alt="" />
      <div style={{textAlign:"center"}}>
     <h3>Poco M6 5G</h3>
        <h2>incl of offer</h2>
     </div>
    </div>

    <div className='mobileDataContainer'>
      <img src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/w/i/d/-original-imagwzrguaee4pz6.jpeg?q=70" alt="" />
      <div style={{textAlign:"center"}}>
     <h3>Poco X6  Pro</h3>
        <h2>incl of offer</h2>
     </div>
    </div>

    <div className='mobileDataContainer'>
      <img src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/9/x/f/-original-imagxtnehfg5pcwt.jpeg?q=70" alt="" />
      <div style={{textAlign:"center"}}>
     <h3>I Phone 15</h3>
        <h2>incl of offer</h2>
     </div>
    </div>
  </Slider>
  </div>
  <div id="mobileBanner">
    <img src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/9845b97107ced583.png?q=20" alt="" />
  </div>
  </div>
  )
}

export default PhoneData