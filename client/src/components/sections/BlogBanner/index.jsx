import React from 'react'
import './style.css'

const BlogBanner = () => {
    
  return (
    <div>
        <div className='shopbanner'>
        <div className='products'>News</div>
        <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2">
        <li class="inline-flex items-center">
            <a href="/" class="text-gray-700 hover:text-gray-900 inline-flex items-center">
                Home
            </a>
        </li>
        <li>
            <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
                <a href="/shop" class="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">News</a>
            </div>
        </li>
    </ol>
</nav>
        </div>
    </div>
  )
}

export default BlogBanner