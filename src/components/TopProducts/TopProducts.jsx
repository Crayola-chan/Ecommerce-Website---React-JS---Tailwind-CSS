import Image1 from "../../assets/laptops/rog-strix-g16.png";
import Image2 from "../../assets/laptops/asus-tuff-a15.png";
import Image3 from "../../assets/consoles/ps5.png";
import Image4 from "../../assets/gamesCat/GTAV.jpg";
import Image5 from "../../assets/gamesCat/minecraft.jpg";
import Image6 from "../../assets/accessories/ps5Controller.png";

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "ROG Strix G15 (2024)",
        description: "The Asus ROG Strix G16 is catching up to Razer in powerful, portable gaming laptops well. The Strix G16's Core i9-13980HX and Nvidia GeForce RTX 4070 provided great performance in a  0.89-inch thick chassis.",
    },
    {
        id: 2,
        img: Image2,
        title: "ASUS TUF Gaming A15 (2023)",
        description: "You don't need to spend big on a gaming laptop - especially if you play lighter games. The Asus TUF A15 offers the best price/performance value we've tested.",
    },
    {
        id: 3,
        img: Image3,
        title: "PlayStation 5",
        description: "The PS5 is a powerful gaming console that offers fast load times, a solid game library, and a unique controller that integrates immersive feedback.",
    },
    {
        id: 4,
        img: Image4,
        title: "Grand Theft Auto V",
        description: "Grand Theft Auto V is a modern crime epic featuring a crew of three protagonists rolling through the fictional state of San Andreas.",
    },
    {
        id: 5,
        img: Image5,
        title: "Minecraft",
        description: "Minecraft is a sandbox-style video game that allows players to build and explore a virtual world made up of blocks.",
    },
    {
        id: 6,
        img: Image6,
        title: "DualSense™ Wireless Controller",
        description: "The DualSense controller is a wireless controller designed for the PlayStation 5, featuring haptic feedback and adaptive triggers.",
    }
];

const TopProducts = () => {
  return (
    <div>
      <div className="container p-8 bg-gray-50 rounded-md">
        {/* Header Section */}
        <div className="text-center mb-10">
            <p data-aos="fade-up" className="text-3xl font-bold text-slate-800">Top Products</p>
            <h1 data-aos="fade-up" className="text-2xl text-slate-400 font-semibold">Best Selling</h1>
            <p data-aos="fade-up" className="text-s text-slate-800 ">
                Check out the top products of the month!
            </p>
        </div>
        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 gap-10 place-items-center">
            {ProductsData.map((data) => (
                <div key={data.id} >
                    {/* image section */}
                    <div 
                        data-aos="fade-up"
                        className="rounded-2xl bg-gray-50 hover:bg-gray-200 shadow-xl transition-all duration-300 group w-[400px] h-[530px] flex flex-col">
                        <img src={data.img} alt=""
                        className="w-full h-[60%] object-contain drop-shadow-md duration-300" />
                    
                        {/* details section */}
                        <div className="w-full h-[40%] p-4 text-center">
                            <h1 className="text-xl font-bold text-slate-800">{data.title}</h1>
                            <div className="p-2">
                                <p className="text-gray-400 group-hover:text-slate-600 duration-300
                                    text-sm line-clamp-5 overflow-hidden">
                                    {data.description}
                                </p>
                            </div>
                            <div className="p-2 justify-center items-center">
                                <button className='bg-gradient-to-r from-gray-500 to-gray-700 transition-all duration-300 
                                    text-slate-200 py-2 px-4 rounded-full hover:scale-105 group-hover:bg-gray-700'
                                    //onclick={handleOrderPopup}
                                    >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts
