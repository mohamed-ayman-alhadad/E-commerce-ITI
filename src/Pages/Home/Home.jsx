import Main from "../../components/MainContent/Main";
import FlashSales from "../../components/flashSales/FlashSales";
import Categories from "../../components/Categories/Categories";
import BestSelling from "../../components/BestSelling/BestSelling";
import Featured from "../../components/Featured/featured";
import moneyBack from "../../assets/Images/moneyBack.png";
import bus from "../../assets/Images/Services (1).png";
import headphone from "../../assets/Images/headphone.png";

function Home() {
  return (
    <div>
      <Main />
      <div className="page-container">
        <FlashSales />
        <Categories />
        <BestSelling />
        <Featured />
      </div>

      <section className="page-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-8" aria-label="Shopping features">
          <div className="flex flex-col items-center text-center p-4">
            <img src={bus} className="w-16 h-16 mb-4" alt="" />
            <h2 className="font-bold text-lg mb-2">CLEAR DELIVERY DETAILS</h2>
            <p className="text-sm text-gray-600">Shipping costs are shown in your cart and checkout.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <img src={headphone} className="w-16 h-16 mb-4" alt="" />
            <h2 className="font-bold text-lg mb-2">PRODUCT DETAILS THAT HELP</h2>
            <p className="text-sm text-gray-600">Ratings and availability appear when the catalog provides them.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <img src={moneyBack} className="w-16 h-16 mb-4" alt="" />
            <h2 className="font-bold text-lg mb-2">YOUR SHOPPING TOOLS</h2>
            <p className="text-sm text-gray-600">Keep a wishlist and adjust your cart as you browse.</p>
          </div>
      </section>
    </div>
  );
}

export default Home;
