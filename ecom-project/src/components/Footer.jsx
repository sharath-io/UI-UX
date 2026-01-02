import { APP_STORE_IMG_URL, PLAY_STORE_IMG_URL } from "../utils/app.constants";

export const Footer = () => {
  return (
    <div className="lg:w-[80%] mx-auto mt-16 p-20 md:px-36 text-white gap-5 flex flex-col">
      <h2 className="text-lg font-medium">Shop Ease</h2>
      <p className="hover:underline cursor-pointer">Visit Help Center</p>
      <div className="w-full flex justify-between flex-wrap gap-2">
        <ul className="flex flex-col gap-3 mt-2"> 
          <li className="text-lg font-medium">Company</li>
          <li>About us</li>
          <li>Our offerings</li>
          <li>newsroom</li>
          <li>Investors</li>
        </ul>
       <ul className="flex flex-col gap-3 mt-2"> 
          <li className="text-lg font-medium">Quick Links</li>
          <li>Home</li>
          <li>Shop</li>
          <li>Best Sellers</li>
          <li>Deals</li>
        </ul>
       <ul className="flex flex-col gap-3 mt-2"> 
          <li className="text-lg font-medium">Customer Support</li>
          <li>FAQs</li>
          <li>Shipping & Delivery</li>
          <li>Privacy Policy</li>
        </ul>
       <ul className="flex flex-col gap-3 mt-2"> 
          <li className="text-lg font-medium">Follow Us</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter/X</li>
          <li>Linkedin</li>
        </ul>
      </div>

      <div className="mt-7 flex gap-4">
        <img className="h-10 w-30" src={PLAY_STORE_IMG_URL} alt="play-store"/>
        <img className="h-10 w-30"  src={APP_STORE_IMG_URL} alt="app-store"/>
      </div>
      <p className="text-gray-400">2025 Shopease Technologies Inc.</p>
    </div>
  );
};
