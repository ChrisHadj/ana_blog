const Navbar = () => {
  return (
    <nav className="">
      <div className="flex justify-between pt-[50px] pb-[20px] max-w-[540px] m-auto md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
        <div className="">logo</div>
        <div className="flex">
          <p>Home</p>
          <p>About</p>
          <p>Blog</p>
          <p>Archives</p>
          <p>Pages</p>
          <p>Contact</p>
        </div>
        <div className="flex">
          <div>Search</div>
          <div>dark mode/white mode</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
