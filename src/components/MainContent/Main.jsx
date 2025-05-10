import frame from '../../assets/Images/Frame.png'

function Main() {
  return (
    <div className="w-full p-2 sm:p-4 md:p-6">
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg shadow-lg">
        <img 
          src={frame} 
          alt="Main banner" 
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="text-white p-4 sm:p-6 md:p-8 max-w-[90%] sm:max-w-xl">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">Discover Amazing Products</h1>
            <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-6 opacity-90">Shop the latest trends with our exclusive collection</p>
            <button className="bg-red-600 text-white px-4 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base rounded-md hover:bg-red-700 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;