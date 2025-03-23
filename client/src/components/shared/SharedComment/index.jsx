import React from 'react'
import dayjs from 'dayjs'

const SharedComment = ({PersonName, Time, Title,email}) => {
  return (
    <div>
         <section className="bg-gray-100 py-8">
  <div className="container mx-auto px-4">

    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center mb-2">
          <div>
            <h3 className="font-semibold">{PersonName}</h3>
            <p className="text-sm text-gray-500">Posted on {
                dayjs(Time).format('DD.MM.YYYY')
                }</p>
          </div>
        </div>
        <p className="text-gray-700">{Title}</p>
        <div className="flex items-center mt-2">
          <p>{email}</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default SharedComment