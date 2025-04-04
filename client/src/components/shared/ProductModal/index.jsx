import React from "react";
import './style.css'

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]
">
  <div className="bg-white dark:bg-gray-800 max-w-4xl w-full shadow-lg p-6 relative">
    <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 dark:text-white text-xl">✕</button>
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px]  bg-gray-300 dark:bg-gray-700 mb-4 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={product?.image}
            alt="Product"
          />
        </div>

      </div>
      <div className="md:flex-1 px-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {product?.desc}
        </h2>
        <div className="text-gray-600 dark:text-gray-300 mb-4">{product?.longDesc}</div>
        <div className="modalprice">
        ${product?.price}
        </div>

        <div>
                    <p class="descrip">
                    Captivate with this shirt’s versatile urban look that works as well at happy hour as it does in the back yard. The real mother of pearl buttons and embroidered crocodile complete its elegant appeal.Lorem ipsum dolor sit ...
                    </p>
                </div>
                <div class="flex space-x-2 my-8">
            <label class="text-center">

                <input type="radio"
                    class="flex items-center justify-center w-10 h-10 accent-violet-600 bg-gray-100 rounded-lg dark:bg-gray-600"
                    name="size" value="xs"/>XS
            </label>
            <label class="text-center">
                <input type="radio" class="flex items-center justify-center w-10 h-10 accent-violet-600" name="size"
                    value="s"/>S
            </label>
            <label class="text-center">
                <input type="radio" class="flex items-center justify-center w-10 h-10 accent-violet-600" name="size"
                    value="m"/>M
            </label>
            <label class="text-center">
                <input type="radio" class="flex items-center justify-center w-10 h-10 accent-violet-600" name="size"
                    value="l"/>L
            </label>
            <label class="text-center">
                <input type="radio" class="flex items-center justify-center w-10 h-10 accent-violet-600" name="size"
                    value="xl"/>XL
            </label>
            </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
              Add to Cart
            </button>
          </div>
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ProductModal;
