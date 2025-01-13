import Image1 from '../../assets/gamesCat/cyberpunk.jpg'
import Image2 from '../../assets/gamesCat/elden-ring.jpg'
import Image3 from '../../assets/gamesCat/valhalla.jpg'
import Image4 from '../../assets/laptops/MSI-Titan-18-HX.png'
import Image5 from '../../assets/consoles/ps5.png'
import Image6 from '../../assets/accessories/Asus-ROG-Keris-II-Ace.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageList = [
    {
        id: 1,
        image: Image1,
        title: 'Cyberpunk 2077',
        description: 'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.'
    },
    {
        id: 2,
        image: Image2,
        title: 'Elden Ring',
        description: 'Elden Ring is an upcoming action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment.'
    },
    {
        id: 3,
        image: Image3,
        title: 'Assassin\'s Creed Valhalla',
        description: 'Assassin\'s Creed Valhalla is an action role-playing video game developed by Ubisoft Montreal and published by Ubisoft.'
    },
    {
        id: 4,
        image: Image4,
        title: 'MSI Titan 18 HX',
        description: 'MSI\'s flagship gaming laptop has a gorgeous 18-inch Mini-LED display, an RGB touchpad, and a mechanical keyboard. For gaming, it\'s powered by an Intel Core i9-14900HX and Nvidia GeForce RTX 4090 Laptop GPU, plus luxurious amounts of RAM and storage. The downside? It\'s $5,399.99, putting it out of reach for most.'
    },
    {
        id: 5,
        image: Image5,
        title: 'PlayStation 5',
        description: 'Powered by an eight-core AMD Zen 2 CPU and custom AMD Radeon GPU, the PS5 is offered in two models: with and without a 4K Blu-ray drive. Supporting a 120Hz video refresh, the PS5 is considerably more powerful than the PS4 and PS4 Pro.'
    },
    {
        id: 6,
        image: Image6,
        title: 'Asus ROG Keris II Ace',
        description: 'No gaming PC setup is complete without a great gaming mouse, and the Asus ROG Keris II Ace keeps things simple while delivering a top-notch performance, making for a spectacular partner in all your favorite PC games.'
    }
]

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true
    };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px]
            bg-gray-50 flex justify-center items-center'>
            {/* background pattern */}
            <div className='h-[700px] w-[700px] bg-gray-800
                absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[-8]'>
            </div>
            {/* hero section */}
            <div className='container  max-w-7xl mx-auto px-12 sm:px-16 lg:px-16 overflow-hidden'>
                <Slider {...settings}>
                    {ImageList.map((data, index) => (
                        <div key={index} className="w-full">
                            <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-8'>
                                {/* text content section */}
                                <div className='flex flex-col justify-center gap-4
                                    pt-12 sm:pt-0 text-center sm:text-left'>
                                    <h1 
                                        data-aos='zoom-out'
                                        data-aos-duration='500'
                                        data-aos-once='true'
                                        className='text-5xl sm:text-6xl
                                        lg:text-7xl font-bold'
                                    >
                                        {data.title}
                                    </h1>
                                    <p 
                                        data-aos='fade-up'
                                        data-aos-duration='500'
                                        data-aos-delay='100'
                                        className='text-sm'
                                    >
                                        {data.description}
                                    </p>
                                    <div>
                                        <button 
                                            // onClick={handleOrderPopup}
                                            className='bg-gradient-to-r from-gray-500 to-gray-700 transition-all duration-200 
                                            text-slate-200 py-2 px-4 rounded-full'
                                        >
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                {/* image section */}
                                <div className='flex justify-center order-1 sm:order-2'>
                                    <div 
                                        data-aos='zoom-in'
                                        data-aos-once='true'
                                        className='relative z-10'
                                    >
                                        <img src={data.image} alt="" 
                                            className='w-[300px] h-[300px] 
                                            sm:h-[450px] sm:w-[450px] sm:scale-100
                                            object-contain mx-auto'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero
