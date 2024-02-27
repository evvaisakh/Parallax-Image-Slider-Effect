import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Imgslider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/10571/1689673096346/front-left-side-47.jpg" alt="" width={'100%'} />
          </div>
          <div>
            <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X1/10064/1683261436040/front-left-side-47.jpg" alt="" width={'100%'} />
          </div>
          <div>
            <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X5-2023/10452/1688992642182/front-left-side-47.jpg" alt="" width={'100%'} />
          </div>
          <div>
            <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/Z4/10183/1685003672330/front-left-side-47.jpg" alt="" width={'100%'} />
          </div>
          <div>
            <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/XM/10570/1689672872537/front-left-side-47.jpg" alt="" width={'100%'} />
          </div>
          <div>
            <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/i7/8972/1675664292256/front-left-side-47.jpg" alt="" width={'100%'} />
          </div>
          <div>
            <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/iX/8704/1639388226683/exterior-image-168.jpg" alt="" width={'100%'} />
          </div>
          <div>
            <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/M3/8048/1601093599918/exterior-image-167.jpg" alt="" width={'100%'} />
          </div>
        </Slider>
      </div>
    </>
  )
}
export default Imgslider