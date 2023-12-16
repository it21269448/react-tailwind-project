import React from 'react';
import image1 from '../assets/image 1.png'; 
import image2 from '../assets/image 2.png'; 

function ServicesSection() {
  const handleClick = () => {
    console.log('Learn more clicked!');
  };
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center max-w-6xl mx-auto py-12 space-y-12">

        {/* Service 2 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <img src={image2} alt="Service 2" className="w-414px h-414px" />
          <div>
            <h3 className="text-2xl font-semibold" style={{ color: '#6A44F2' }}>Digital Strategy Consulting</h3>
            <p className="text-base text-gray-700">
              Your digital strategy should complement the overall marketing strategy for the company. Business needs a different approach, we provide a custom and strategic overview to find the most efficient model for your business.
            </p>
            <button className="bg-yuzu-jam text-white py-1 px-3 rounded hover:bg-[#c9772a] transition duration-300">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Service 1 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 md:flex-row-reverse">
          <img src={image1} alt="Service 1" className="w-414px h-414px" />
          <div>
            <h3 className="text-2xl font-semibold" style={{ color: '#6A44F2' }}>Web & Mobile App Development</h3>
            <p className="text-base text-gray-700">
              Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
            </p>
            <button className="bg-yuzu-jam text-white py-1 px-3 rounded hover:bg-[#c9772a] transition duration-300" onClick={handleClick}>
              LEARN MORE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ServicesSection;
