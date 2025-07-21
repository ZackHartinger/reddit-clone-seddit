import React from 'react'

const PostBody = () => {
    return (
        <div className='flex px-2 gap-1 lg:flex-col'>
            <div className="flex-2 shrink-0">
                <h3 className='text-white font-bold visited:text-gray-500'>Trump in Full Panic, Claims All Epstein Files Are Fake, Created by Obama</h3>
                <p className="truncate w-50 text-white"><a className='underline text-blue-600' href="https://dailyboulder.com/trump-in-full-panic-claims-all-epstein-file-are-fake-created-by-obama.com">https://dailyboulder.com/trump-in-full-panic-claims-all-epstein-file-are-fake-created-by-obama.com</a></p>
            </div>
            <div className="flex-1 shrink-0">
                <img className='aspect-auto rounded border-1 border-gray-800 lg:w-full' src={'/src/assets/images/dump.jpeg'} alt="Post Photo" />
            </div>
        </div>
    )
}

export default PostBody