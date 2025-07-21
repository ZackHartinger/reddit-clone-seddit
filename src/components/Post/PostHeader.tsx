const PostHeader = () => {
    return (
        <div className='flex'>
            <div className="flex items-center">
                <div className="bg-indigo-600 w-10 h-10 m-2 rounded-full"></div>
                <h4 className='text-gray-400 font-bold text-sm px-2'>r/goodnews</h4>
                <div className='bg-gray-400 w-1 h-1 rounded-full'></div>
                <div className="text-gray-500 px-2">3 hr. ago</div>
            </div>
            <div className="flex items-center ml-auto">
                <button className='rounded-full bg-orange-500 px-4 text-white'>Join</button>
                <button className='w-auto shrink-0 items-center px-2'>
                    <svg fill="white" height="20" icon-name="overflow-horizontal-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 10a1.751 1.751 0 1 1-3.502.003A1.751 1.751 0 0 1 5.75 10ZM10 8.25a1.75 1.75 0 1 0-.003 3.502A1.75 1.75 0 0 0 10 8.25Zm6 0a1.751 1.751 0 1 0-.002 3.502A1.751 1.751 0 0 0 16 8.25Z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default PostHeader