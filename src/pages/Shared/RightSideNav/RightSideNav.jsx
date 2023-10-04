import { FcGoogle } from 'react-icons/fc';
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';



const RightSideNav = () => {
    return (
      <div>
          <div className='p-4 space-y-3 mb-6'>
           <h2 className="text-2xl">Login with</h2> 
           <button className="btn btn-outline w-full">
            <FcGoogle className='text-2xl'></FcGoogle>
            Login With Google
          </button>
           <button className="btn btn-outline w-full">
            <FaGithub className='text-2xl'></FaGithub>
            Login With Github
          </button>
        </div>
        <div className='p-4 mb-6'>
           <h2 className="text-2xl mb-3">Find Us On</h2> 
         <a href='' className='p-4 flex items-center text-xl border rounded-t-lg'><FaFacebook className='mr-3 text-blue-500'></FaFacebook>
         <span>Facebook</span>
         </a>
         <a href='' className='p-4 flex items-center text-xl border-x rounded-t-lg'><AiFillTwitterCircle className='mr-3 text-blue-500'></AiFillTwitterCircle>
         <span>Twitter</span>
         </a>
         <a href='' className='p-4 flex items-center text-xl border rounded-b-lg'><AiOutlineInstagram className='mr-3 text-pink-600'></AiOutlineInstagram>
         <span>Instagram</span>
         </a>
        </div>
        {/* Q zone */}
        <div className='p-4 space-y-3 mb-6 bg-gray-100'>
           <h2 className="text-2xl mb-4">Q Zone</h2> 
           <img src={qzone1} alt="" />
           <img src={qzone2} alt="" />
           <img src={qzone3} alt="" />
        </div>
      </div>
    );
};

export default RightSideNav;