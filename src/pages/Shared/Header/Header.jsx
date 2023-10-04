import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center space-y-3'>
           <img className='mx-auto pt-4' src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;