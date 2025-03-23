import React from 'react'
import './style.css'

const Subscribe = () => {
  return (
    <div>
        <section>
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="p-8 text-center sm:p-10 md:p-16">
        <h2 className="head">Subscribe Newsletter</h2>
        <form name="email-form" method="get" className="relative mx-auto mb-4 flex w-full max-w-4xl flex-col items-center justify-center  sm:flex-row">
            <input type="email" className="block h-7 w-full bg-[#f6f6f6;] px-6 py-6 text-sm text-[#333333] outline-none" placeholder="email@example.com" required="" />
            <button className='subbtn'>Subscribe</button>
        </form>
        </div>
  </div>
</section>
    </div>
  )
}

export default Subscribe