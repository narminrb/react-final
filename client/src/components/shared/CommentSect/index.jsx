import React, { useState } from 'react'
import SharedComment from '../SharedComment'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAPiData, postApiData } from '../../../http/api'
import { useParams } from 'react-router'
import { QueryKeys } from '../../../constants/QueryKeys'

const CommentSect = () => {
  const { id } = useParams()
  const queryClient = useQueryClient()

  const {data:blogData, isLoading:blogIsLoading, isError:blogIsError, error:blogError} = useQuery({
    queryKey: [QueryKeys.BLOGS,id],
    queryFn: async () => await getAPiData(`/blogs?populate=*&filters[id]=${id}`)
})
  const [form, setForm] = useState({
    name: '',
    email: '',
    desc: '',
    blog:id
  })

  const handleChange = (e) => {
    setForm({
      ...form, 
      [e.target.name]: e.target.value })
  }

  const {mutate, isPending} = useMutation({
    mutationKey:["Add comment"],
    mutationFn:() => postApiData('/comments', 
      {
        data: {
          ...form
        }
      }
    ),
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.productsModal)
      setForm({
          name: '',
          desc: '',
          email: '',
          blog: id
      })
  }
  })
  console.log(form)
  return (
    <div>
       {
          blogData?.data[0]?.comments?.map((el, index) => (
          <SharedComment key={index}
           PersonName={el?.name}
            Title={el?.desc}
            email={el?.email}
             />
                                ))
                            }

        <main className="w-full items-center dark:bg-gray-900">
  <div className="dark:bg-gray-950 dark:text-white">
    <form 
      onSubmit={(e) => {
        e.preventDefault()
        mutate()}
      }
    className=" w-full rounded" action="/submit-comment" method="post">
      <h2 className="text-xl mb-4 tracking-wider font-lighter text-gray-900 dark:text-gray-200">Leave a Comment</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="mb-2">
          <input
          onChange={handleChange}
          value={form.name}
        type="text"
        id="name"
        name="name"
        className="w-full px-3 py-4 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid"
        placeholder="Name"
        required
      />
        </div>
        <div className="mb-4">
          <input
          onChange={handleChange}
          value={form.email}
        type="email"
        id="email"
        name="email"
        className="w-full px-3 py-4 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid"
        placeholder="Email"
        required
      />
        </div>
        <div className="mb-4 col-span-1 md:col-span-3">
          <textarea
          onChange={handleChange}
          value={form.desc}
        id="desc"
        name="desc"
        className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid resize-none"
        placeholder="Message"
        rows="10"

        required
      ></textarea>
        </div>
      </div>
      <div className="flex justify-start">
        <button
        type="submit"
        className="py-4 px-6 bg-black text-[18px] text-white hover:bg-[#c98060] focus:outline-none"
      >
        Post Comment
      </button>
      </div>
    </form>
  </div>
</main>
    </div>
  )
}

export default CommentSect