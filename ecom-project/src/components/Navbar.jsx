export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black py-4 px-16 text-gray-300">
      <div className="flex gap-8 justify-center items-center">
        <div className="text-xl text-white">ShopEase</div>
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:underline">Shop</li>
          <li className="cursor-pointer hover:underline">Best Sellers</li>
          <li className="cursor-pointer hover:underline">Deals</li>
        </ul>
      </div>
      <ul className="md:flex gap-4 justify-center items-center hidden">
        <li className="flex gap-1 cursor-pointer hover:underline">
          <img src="/assets/cart-icon.svg" alt="cart-icon" />
          <span>Cart</span>
        </li>
        <li className="cursor-pointer hover:underline">Help</li>
        <li className="cursor-pointer hover:underline">Login</li>
        <li className="text-black bg-white rounded-full py-2 px-3 cursor-pointer">
          Sign up
        </li>
      </ul>
    </nav>
  );
};
