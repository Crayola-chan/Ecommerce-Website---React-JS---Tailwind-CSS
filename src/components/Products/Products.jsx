import Image1 from "../../assets/comingSoon/CODMWIII.jpg";
import Image2 from "../../assets/comingSoon/diabloIV.jpg";
import Image3 from "../../assets/comingSoon/witcher3.jpg";

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Call of Duty®: Modern Warfare® III",
        description: "An epic adventure is about to begin. Stay tuned!",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Image2,
        title: "Diablo® IV",
        description: "Prepare for a thrilling experience coming soon.",
        aosDelay: "200"
    },
    {
        id: 3,
        img: Image3,
        title: "The Witcher 3: Wild Hunt",
        description: "The next big hit is just around the corner. Don't miss it!",
        aosDelay: "400"
    }
];

const Products = () => {
  return (
    <div className="mt-14 mb-12 ">
      <div className="bg-slate-800 container rounded-md p-8">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-3xl font-bold text-slate-200">Coming Soon</p>
            <p data-aos="fade-up" className="text-s text-slate-400 ">
                Are you ready for the next big games? Stay tuned for the latest updates!
            </p>
        </div>
        {/* Body section */}
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 place-items-center gap-12">
                {/* Card Section */}
                {ProductsData.map((data) => (
                    <div 
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={data.id}
                    >
                        <div 
                            >
                            <img src={data.img} alt="" 
                                className="h-[220px] w-[500px] object-cover rounded-md"
                            />
                        </div>
                        <div className="p-1">
                            <h3 className="font-semibold text-lg text-slate-300">{data.title}</h3>
                            <p className="text-s text-gray-400">{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
