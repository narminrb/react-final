import React from "react";
import Feedback from "../../shared/Feedback";

const FeedbackSection = () => {
  return (
    <div className="container mx-auto max-w-screen-xl my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Feedback
          image="https://emax-demo.myshopify.com/cdn/shop/files/cl1_100x.png?v=1695906019"
          desc={`"I am delighted with my purchase, and my partner absolutely adores the stunning necklace."`}
        />
        <Feedback
          image="https://emax-demo.myshopify.com/cdn/shop/files/cl3_100x.png?v=1695906255"
          desc={`"I highly recommend Sparkling Gems Jewelry Store to anyone in search of top-notch jewelry."`}
        />
      </div>
    </div>
  );
};

export default FeedbackSection;
