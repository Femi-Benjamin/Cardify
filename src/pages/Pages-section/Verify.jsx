import pana from '../../assets/pana.svg';
import alert from '../../assets/alert.svg';
import Vect from '../../assets/vect.png';
import { CustomButton } from "../../static/button";

const Verify = () => {
  return (
    <div className='px-4 md:px-20' style={{ backgroundImage: `url(${Vect})`, backgroundSize: '', backgroundPosition: 'center' }}>
      <div className='flex flex-col items-center md:flex-row md:justify-around'>
        <div className='mb-8 md:mb-0'>
          <img src={pana} alt="" className='max-w-full h-auto' />
        </div>
        <div className='bg-white w-full md:w-96 rounded-xl p-6 md:p-10'>

          <div className='border rounded-xl p-2 md:p-3 flex flex-col md:flex-row justify-between mb-5 items-center'>
            <label htmlFor="cardType" className='mb-2 md:mb-0'>Select Card Type</label>
            <select className='p-1 md:p-1 outline-none' id="cardType" name="cardType">
              <option value="mastercard"></option>
              <option value="wallmartVisa">Wallmart Visa</option>
              <option value="eBay">eBay</option>
              <option value="mastercard">Master Card</option>
              <option value="amazon">Amazon</option>
            </select>
          </div>

          <div className='flex flex-col md:flex-row justify-between items-center mb-5'>
            <div className='mb-4 md:mb-0'>
              {/* <label htmlFor="currency">Select Currency:</label> */}
              <select className='w-full md:w-auto border rounded-xl p-2 md:p-[13.5px] outline-none' id="currency" name="currency">
                <option value="GBP"></option>
                <option value="GBP">GBP</option>
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
              </select>
            </div>

            <div>
              <input
                className='w-full border rounded-xl p-2 md:p-3 outline-none'
                placeholder='Card Amount'
                type="alphanumeric"
              />
            </div>
          </div>

          <div>
            <input
              className='w-full border rounded-xl p-2 md:p-3 outline-none mb-5'
              placeholder='Gift card pin'
              type="number"
            />
          </div>

          <div>
            <input
              className='w-full border rounded-xl p-2 md:p-3 outline-none mb-5'
              placeholder='Redemption code'
              type="number"
            />
          </div>

          <div className='flex flex-col md:flex-row items-center mb-6'>
            <img src={alert} alt="" className='mb-4 md:mb-0 md:mr-4' />
            <div>
              <p className='text-xs md:text-base'>Please make sure the redemption code is the original scratched code</p>
            </div>
          </div>

          <div className='flex justify-center'>
            <CustomButton
              width="100%"
              content="Verify Card"
              onClick={() => console.log("Button clicked")}
              backgroundColor="#004CB8"
              textColor="#FFFFFF"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Verify;
