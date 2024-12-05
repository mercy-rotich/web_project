import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-between items-center sticky  w-full pb-4">
      <Link to={"/"}>
        <h2 className="text-green-500 tracking-wider font-semibold cursor-pointer text-2xl">
          Shoppy
        </h2>
      </Link>

      <div>
        <Link to={"/cart"}>
          <button className="bg-green-500  px-[30px] py-[10px]  text-white rounded-md cursor-pointer font-semibold">
            Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
