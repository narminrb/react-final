import React from 'react'
import { useCartContext } from '../../providers/CartContext'
import { withAuthCheck } from '../../HOC/AuthCheck'

const CheckOut = () => {
     const { addToCart,
            removeFromCart,
            carts,
            removeFromCartFully,
            totalAmount } = useCartContext()
  return (
    <div>
       <section className="w-full bg-white  dark:bg-[#0A2025] py-9 px-8">
  <h1
    className="text-center text-[#191919] dark:text-white text-[32px] font-semibold leading-[38px]"
  >
    My Shopping Cart
  </h1>
  <div className="flex mx-auto justify-center mt-8 gap-6">
    <div className="bg-white p-4 w-full rounded-xl">
      <table className="w-full bg-white rounded-xl">
        <thead>
          <tr
            className="text-center border-b border-gray-400 w-full text-[#7f7f7f] text-sm font-medium uppercase leading-[14px] tracking-wide"
          >
            <th className="text-left px-2 py-2">Product</th>
            <th className="px-2 py-2">price</th>
            <th className="px-2 py-2">Quantity</th>
            <th className="px-2 py-2">Subtotal</th>
            <th className="w-7 px-2 py-2"></th>
          </tr>
        </thead>
        <tbody>
          { carts && carts?.map((el,index) => (
            <tr 
            key={index}
            className="text-center">
            <td className="px-2 py-2 text-left align-top">
              <img
                src={`http://localhost:1337${el.image.url}`}
                alt="test"
                className="w-[100px] mr-2 inline-block h-[100px]"
              /><span>{el.desc}</span>
            </td>
            <td className="px-2 py-2">${el.discountprice}</td>
            <td
              className="p-2 mt-9 bg-white rounded-[170px] border border-[#a0a0a0] justify-around items-center flex"
            >
              <svg
              onClick={() => removeFromCart(el)}
                width="14"
                height="15"
                className="cursor-pointer"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path

                  d="M2.33398 7.5H11.6673"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path></svg
              ><span
                className="w-10 text-center text-[#191919] text-base font-normal leading-normal"
                >{el.quantity}</span>
                <svg
                onClick={() => addToCart(el)}
                className="cursor-pointer relative"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.33398 7.49998H11.6673M7.00065 2.83331V12.1666V2.83331Z"
                  stroke="#1A1A1A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </td>
            <td className="px-2 py-2">${el.discountprice * el.quantity}</td>
            <td className="px-2 py-2">
              <svg
              onClick={() => removeFromCartFully(el)}
                width="24"
                className="cursor-pointer"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
                  stroke="#CCCCCC"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M16 8.5L8 16.5"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16 16.5L8 8.5"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </td>
          </tr>
          ))}
          
        </tbody>
        <tfoot>
          <tr className="border-t border-gray-400">
            <td className="px-2 py-2" colspan="3">
              <button
                className="px-8 cursor-pointer py-3.5 bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold classNameName leading-[16px]"
              >
                <a href="/shop">Return to shop</a>
              </button>
            </td>
            <td className="px-2 py-2" colspan="2">
              <button
                className="px-8 py-3.5 cursor-pointer bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold classNameName leading-[16px]"
              >
                Update Cart
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
 
  </div>
</section>
    </div>
  )
}

export default withAuthCheck(CheckOut)