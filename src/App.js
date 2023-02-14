import logo from './logo.svg';
import './App.css';
import user from './user.jpg';
import message from "./message.jpg"

function App() {
  return (
    <div className=''>
      <div className="bg-purple-400 w-full h-screen items-center text-center flex flex-col sm:px-auto px-5 ">
        <div className='mt-32 text-white ]' >
          <p className='font-extrabold text-[42px]'>Feedback</p>
          <p className='mb-3 animate-pulse font-bold'>Should you have face any issues. feel free to contact  <br className='sm:block hidden'/> we would get back to you as soon as we can !</p></div>
        <form className='w-[100%]rounded-2xl sm:px-auto px-5'>
          <div className=' w-[100%] bg-white mb-20 rounded-2xl'>
            <div className='flex  px-4 '>  <p className='pr-5 my-2'><img src={user} className='w-10 h-10 mt-4 animate-bounce' /></p>
              <input type='text' placeholder='Name' className='border-b-black w-full mb-4 required  ' />
            </div>
            <div className='flex mb-4 px-4 '><p className='pr-5 my-2'><img src={message} className='w-10 h-10 mt-4 ' /></p><input type='email' className='w-full mb-4' placeholder='Email' required /></div>
            <div className='flex  px-4 '><p className='pr-5 my-2'><img src={message} className='w-10 h-10 ' /></p>
              <input type='password' className='w-full  mb-4'placeholder='Password' required /> </div>
            <div className='items-end    ml-44 sm:ml-48 my-10 '> <button className='border-2 sm:mr-10 mr-5 rounded-full px-8 py-2  bg-purple-400'>Send</button></div>
          </div>

        </form>
      </div>

    </div>
  );
}

export default App;
