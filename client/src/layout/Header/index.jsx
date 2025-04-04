import React, { useEffect, useState } from 'react'
import './style.css'
import { useAuthStore } from '../../store/AuthStore';
import { getAPi, getAPiData } from '../../http/api';
import Search from "../../components/sections/Search";

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [userData, setUserData] = useState(null);

    const {authData} = useAuthStore((state) => state)

    const UserData = authData()
    console.log("User", UserData)
    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    };
    useEffect(() => {
        if (UserData?.token) {
            getAPi("user", {
                headers: {
                    Authorization: `${UserData.token}`
                }
            }).then((data) => {
                setUserData(data)
            })
        }
    }, [UserData?.token])
    console.log("UserDataa", UserData)
  return (
    <div className="container mx-auto">
        <nav className="bg-white border-gray-200 py-10 dark:bg-gray-900">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
            <div className='w-[110px] h-[40px] overflow-hidden'>
            <img src="https://emax-demo.myshopify.com/cdn/shop/files/logo_new_110x@2x.png?v=1695886397" alt="" />
            </div>
        </a>
        <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>

            <div className='flex'>
                <ul className='flex gap-4 text-2xl font-normal'>
                    <li><i
            className="ri-search-line"
            style={{ cursor: "pointer" }}
            onClick={() => setIsSearchOpen(true)}
          ></i></li>
            {isSearchOpen && <Search closeSearch={() => setIsSearchOpen(false)} />}
                    <li><a href="/checkout"> <i className="ri-shopping-bag-4-line"></i></a></li>
                    <li className="relative">
                    <i className="ri-user-3-line" onClick={handleDropdownToggle}></i>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <p className="account">Account</p>
                            <hr />
                            <ul>
                                {
                                    !UserData?.token && <>
                                    <li><a href="/login">Login</a></li>
                                    <li><a href="/signin">Create Account</a></li></>
                                }
                                {
                                    UserData?.token && <>
                                    <li><a href="/dashboard">{UserData?.user?.username}</a></li>
                                    <button className='bg-black text-white rounded-full w-10 h-10 '>
                                    {UserData?.user?.username?.charAt(0)}
                                </button>
                                    <li><a href="/logout">Logout</a></li>
                                    </>
                                }
                            </ul>
                        </div>
                    )}
                </li>
                </ul>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button"
				className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mobile-menu-2" aria-expanded="true">
				<span className="sr-only">Open main menu</span>
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clipRule="evenodd"></path>
				</svg>
				<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"></path>
				</svg>
			</button>
        </div>
        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="/"
                        className="block py-2 pl-3 pr-4 text-gray-700  rounded lg:bg-transparent  lg:p-0 dark:text-white"
                        aria-current="page">Home</a>
                </li>
                <li className="relative group">
                    <a
                        href="/shop"
                        className="block py-2 pl-3 pr-4 text-gray-700  lg:bg-transparent lg:p-0 dark:text-white"
                        aria-current="page"
                    >
                        Shop
                    </a>
                    <div className="absolute left-1/2 transform -translate-x-[35%] z-10 top-[77px] hidden w-screen max-w-5xl p-6 mt-2 bg-white shadow-lg group-hover:flex  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                        <div className="grid grid-cols-4 gap-8 w-full">
                        <div>
                            <h3 className="font-semibold mb-2">Necklaces</h3>
                            <ul className="space-y-1 text-[#000000] font-[400] text-sm">
                            <li><a href="#" className="hover:underline">Pendant</a></li>
                            <li><a href="#" className="hover:underline">Choker</a></li>
                            <li><a href="#" className="hover:underline">Layered</a></li>
                            <li><a href="#" className="hover:underline">Chain</a></li>
                            <li><a href="#" className="hover:underline">Pearl</a></li>
                            <li><a href="#" className="hover:underline">Beaded</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold  mb-2">Bracelets</h3>
                            <ul className="space-y-1 text-[#000000] font-[400] text-sm">
                            <li><a href="#" className="hover:underline">Cuff</a></li>
                            <li><a href="#" className="hover:underline">Charm</a></li>
                            <li><a href="#" className="hover:underline">Beaded</a></li>
                            <li><a href="#" className="hover:underline">Bangle</a></li>
                            <li><a href="#" className="hover:underline">Friendship</a></li>
                            <li><a href="#" className="hover:underline">Tennis</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold  mb-2">Earrings</h3>
                            <ul className="space-y-1 text-[#000000] font-[400] text-sm">
                            <li><a href="#" className="hover:underline">Stud</a></li>
                            <li><a href="#" className="hover:underline">Hoop</a></li>
                            <li><a href="#" className="hover:underline">Drop</a></li>
                            <li><a href="#" className="hover:underline">Dangle</a></li>
                            <li><a href="#" className="hover:underline">Clip-on</a></li>
                            <li><a href="#" className="hover:underline">Threader</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold  mb-2">Gold Rings</h3>
                            <ul className="space-y-1 text-[#000000] font-[400] text-sm">
                            <li><a href="#" className="hover:underline">Engagement</a></li>
                            <li><a href="#" className="hover:underline">Wedding</a></li>
                            <li><a href="#" className="hover:underline">Statement</a></li>
                            <li><a href="#" className="hover:underline">Stackable</a></li>
                            <li><a href="#" className="hover:underline">Midi</a></li>
                            <li><a href="#" className="hover:underline">Signet</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </li>

                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Categories </a>
                </li>
                <li>
                    <a href="/blog"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Pages</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Header