import { GoogleLogin } from "@react-oauth/google";

interface LogInModalProps {
  toggleModal: () => void;
}

const LogInDialog = ({ toggleModal }: LogInModalProps) => {
  return (
    <div onClick={toggleModal} className="absolute flex justify-center items-center h-screen w-screen text-white bg-[rgba(0,0,0,0.5)]">
      <div onClick={(e) => e.stopPropagation()} className='flex flex-col relative h-screen w-screen bg-zinc-900 z-1 lg:w-100 lg:h-200 lg:rounded'>
        <button onClick={toggleModal} className='bg-zinc-800 w-8 item-end rounded-full self-end p-2 float-right mt-6 mr-3 cursor-pointer'>
          <svg fill='white' height={16} width={16} viewBox="0 0 20 20">
            <path d='m11.06 10 6.22-6.22a.771.771 0 0 0-.015-1.046.771.771 0 0 0-1.045-.014L10 8.94 3.78 2.72a.771.771 0 0 0-1.042.018.771.771 0 0 0-.018 1.042L8.94 10l-6.22 6.22a.758.758 0 0 0-.02 1.08.758.758 0 0 0 1.08-.02L10 11.06l6.22 6.22a.771.771 0 0 0 1.041-.018.771.771 0 0 0 .019-1.042L11.06 10Z'></path>
          </svg>
        </button>
        <div className="flex flex-col relative top-4 text-white items-center gap-4">
          <h3 className='text-2xl font-bold mb-2'>Log In</h3>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("An error occured")
            }}
          >
          </GoogleLogin>
          <div className="flex items-center w-90">
            <div className="grow border-t-1 border-t-zinc-400"></div>
            <span className="flex-shrink mx-4 text-white text-xs">OR</span>
            <div className="grow border-t-1 border-t-zinc-400"></div>
          </div>
          <div className="w-90 h-12 bg-zinc-800 rounded-2xl">
            <input type='text' placeholder='Email or username' className='h-full w-80 ml-3 !outline-none' />
          </div>
          <div className="w-90 h-12 bg-zinc-800 rounded-2xl">
            <input type='text' placeholder='Password' className='h-full w-80 ml-3 !outline-none' />
          </div>
        </div>
        <button className='absolute self-center bottom-4 w-90 p-2 bg-zinc-800 rounded-full cursor-pointer'>
          Log In
        </button>
      </div>
    </div>
  )
}

export default LogInDialog