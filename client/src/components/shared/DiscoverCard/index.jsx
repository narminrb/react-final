import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getAPiData } from '../../../http/api';
import { QueryKeys } from '../../../constants/QueryKeys';

const DiscoverCard = () => {
  const { data: cardData, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.DISCOVERCARD],
    queryFn: async () => await getAPiData('discovercards?populate=*'),
  });

  // Debugging: Check the data structure
  //console.log(cardData);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="relative isolate flex flex-col justify-end overflow-hidden px-8 pb-8 pt-40  mx-auto mt-8 group">
        {cardData?.data?.map((el, index) => {
             const imageUrl2 = el?.image?.url || '/fallback-image.jpg';
            return (
                <div key={index} >
                <img
                src={`http://localhost:1337${imageUrl2}`}
                alt={el?.title || "Discover Card Image"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="relative z-10 p-6 flex flex-col justify-end ">
                <h3 className="mt-3 text-3xl font-bold text-white">
                  {el?.title || "Default Title"}
                </h3>
                <p className="text-sm leading-6 text-gray-300">
                  {el?.desc || "City of love"}
                </p>
              </div>
            </div>
            )
})}
      </div>
    </div>
  );
};

export default DiscoverCard;
