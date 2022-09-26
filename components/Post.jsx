/* eslint-disable @next/next/no-img-element */

const post = [
  { title: 'test 1', excerpt: 'text test 1'},
  { title: 'test 1', excerpt: 'text test 1'},
  { title: 'test 2', excerpt: 'text test 2'}
];

const Post = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-[540px] m-auto md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] gap-[40px]">
      <div>
        <img
        className="hover:grayscale-0"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="lolilol"
        />
        <div className="flex">
          <img
            className="h-[25px] mr-[15px]"
            src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?w=996&t=st=1663542685~exp=1663543285~hmac=eba8b68458d60113491dd6cefc4e33992116285b3c64caaada41ce3167acf666"
            alt=""
          />
          <p>Ana</p>
        </div>
      </div>
      <div  className="hover:grayscale-0">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="lolilol"
        />
        <h1>this is a title</h1>
        <p>this is a text</p>
        <div className="flex">
          <img
            className="h-[25px] mr-[15px]"
            src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?w=996&t=st=1663542685~exp=1663543285~hmac=eba8b68458d60113491dd6cefc4e33992116285b3c64caaada41ce3167acf666"
            alt=""
          />
          <p>Ana</p>
        </div>
      </div>
      <div  className="hover:grayscale-0">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="lolilol"
        />
        <h1>this is a title</h1>
        <p>this is a text</p>
        <div className="flex">
          <img
            className="h-[25px] mr-[15px]"
            src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?w=996&t=st=1663542685~exp=1663543285~hmac=eba8b68458d60113491dd6cefc4e33992116285b3c64caaada41ce3167acf666"
            alt=""
          />
          <p>Ana</p>
        </div>
      </div>
      <div className="hover:grayscale-0">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="lolilol"
        />
        <h1>this is a title</h1>
        <p>this is a text</p>
        <div className="flex">
          <img
            className="h-[25px] mr-[15px]"
            src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?w=996&t=st=1663542685~exp=1663543285~hmac=eba8b68458d60113491dd6cefc4e33992116285b3c64caaada41ce3167acf666"
            alt=""
          />
          <p>Ana</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
