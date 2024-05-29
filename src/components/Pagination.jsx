import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'

 const Pagination = () => {
    const {page,handleChnagePage,totalPages} = useContext(AppContext);
  return (
    <div className='fixed bottom-0 flex w-full py-3 bg-white border justify-evenly'>
        <div className='flex gap-1'>
            { page > 1 &&
                    <div>
                        <button className='px-4 py-2 text-sm font-medium bg-white border rounded-md ' onClick={() => handleChnagePage(page-1)}>Previous</button>
                    </div>
            }
            { page < totalPages &&
                    <div>
                        <button className='px-4 py-2 text-sm font-medium bg-white border rounded-md' onClick={() => handleChnagePage(page+1)}>Next</button>
                    </div>
            }
        </div>

        <p className='text-sm font-bold'>Page <span>{page}</span> of <span>{totalPages}</span></p>
    </div>
  )
}

export default Pagination;
