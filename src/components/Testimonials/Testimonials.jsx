import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    img: "https://picsum.photos/101/101",
    name: "John Doe",
    testimony: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nostrum mollitia laboriosam enim soluta. Voluptates blanditiis ipsa id consectetur iusto?"
  },
  {
    id: 2,
    img: "https://picsum.photos/102/102",
    name: "Jane Doe",
    testimony: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nostrum mollitia laboriosam enim soluta. Voluptates blanditiis ipsa id consectetur iusto?"
  },
  {
    id: 3,
    img: "https://picsum.photos/103/103",
    name: "Kimberly Lee",
    testimony: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nostrum mollitia laboriosam enim soluta. Voluptates blanditiis ipsa id consectetur iusto"
  },
  {
    id: 4,
    img: "https://picsum.photos/104/104",
    name: "Mary",
    testimony: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nostrum mollitia laboriosam enim soluta. Voluptates blanditiis ipsa id consectetur iusto"
  },
  {
    id: 5,
    img: "https://picsum.photos/105/105",
    name: "Jake Jones",
    testimony: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nostrum mollitia laboriosam enim soluta. Voluptates blanditiis ipsa id consectetur iusto"
  }
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScrol: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initalSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return ( 
    <div className="py-10 mb-1">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-5xl font-bold text-slate-800 ">Testimonials</h1>
            <p data-aos="fade-up" className="text-s  text-slate-400">See what our customers have to say</p>
        </div>
        {/* Testimonial cards */}
        <div>
          <Slider {... settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 round-xl bg-slate-50 relative">
                  <div className="mb-4">
                    <img src={data.img} alt=""
                    className="rounded-full w-20 h-20" />
                  </div>
                  <div className="flex flex-col items-center gap-4 ">
                    <div className="space-y-2">
                      <p className="text-s text-gray-500">{data.testimony}</p>
                      <h1 className="text-xl font-bold text-slate-700">{data.name}</h1>
                    </div>
                  </div>   
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>               
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
