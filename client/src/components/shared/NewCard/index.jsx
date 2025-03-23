import React from 'react';

const NewCard = ({ title, price, image }) => {
  const imageUrl = image;

  return (
    <div className=" bg-white rounded-xl overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0 rounded-xl">
          <div className='w-[140px] h-[180px] rounded-xl overflow-hidden'>
          <img
            className="h-40 w-full object-cover md:h-full md:w-48"
            src={imageUrl}
            alt={title}
          />
          </div>
        </div>
        <div className="p-8">
          <div className="text-xl text-black">
            {title}
          </div>
          <p className="mt-2 text-2xl text-[#c98060]">
            {`$${price}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
