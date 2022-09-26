import { useState, useContext } from "react";
import Link from "next/link";
// import {getCategories} from '../services'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  //const [categories, setCategories] = useState([]);
  const categories = [
    { name: "React", slug: "react" },
    { name: "Web dev", slug: "Web-dev" },
  ];

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Blog Baby
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category.slug`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
