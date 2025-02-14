import FooterBanner from '../../assets/footer-banner2.png'
import FooterLogo from '../../assets/logo.png'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${FooterBanner})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
};

const FooterLinks = [
    {
        title: 'Home',
        link: '/#',
    },
    {
        title: 'About',
        link: '/#about',
    },
    {
        title: 'Contact',
        link: '/#contact',
    },
    {
        title: 'FAQ',
        link: '/#faq',
    }
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white py-6 opacity-90">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-12 items-start">
            
            {/* Company Details */}
            <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center gap-4">
                <img src={FooterLogo} alt="Electro Gaming" className="max-w-[300px] max-h-[180px]" />
                <h1 className="text-5xl font-bold">Electro Gaming</h1>
                </div>
            </div>
            
            {/* Links Section */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Important Links */}
                <div className="flex flex-col space-y-2">
                    <h1 className="text-2xl font-bold">Important Links</h1>
                    <ul className="space-y-2">
                    {FooterLinks.map((link) => (
                        <li key={link.title} className="cursor-pointer hover:text-slate-300 text-lg hover:translate-x-1 duration-300">
                        {link.title}
                        </li>
                    ))}
                    </ul>
                </div>

                {/* Additional Links */}
                <div className="flex flex-col space-y-2">
                    <h1 className="text-2xl font-bold">Links</h1>
                    <ul className="space-y-2">
                    {FooterLinks.map((link) => (
                        <li key={link.title} className="cursor-pointer hover:text-slate-300 text-lg hover:translate-x-1 duration-300">
                        {link.title}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>

            {/* social links */}
            <div className='flex flex-col space-y-4'>
                <div className="flex items-center space-x-3">
                    <a href="#">
                        <FaInstagram className='text-3xl'/>
                    </a>
                    <a href="#">
                        <FaFacebook className='text-3xl'/>
                    </a>
                    <a href="#">
                        <FaLinkedin className='text-3xl'/>
                    </a>
                </div>
                <div className='space-y-3'>
                    <div className='flex items-center gap-3'>                        
                        <FaLocationArrow className='text-2xl'/>
                        <p className='text-xl'>Kingston, Jamaica</p>                        
                    </div>
                    <div className='flex items-center gap-3'>                        
                        <FaMobileAlt className='text-2xl'/>
                        <p className='text-xl'>+1(876)123-4567</p>                        
                    </div>
                </div>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default Footer
