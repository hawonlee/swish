import '../App.css'
import Menu from '../components/Menu';
import { push, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { database } from '../firebaseConfig';
import { set } from 'firebase/database';
import Logo from '/logo_white.svg';
import Phone from '../components/Phone'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import blur from '/swishBlur.png'
import Carousel from '../components/Carousel'

function HomePage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userRef = ref(database, 'emails');
      const newDataRef = push(userRef);

      set(newDataRef, {
        email: email,
      });
      setEmail("");
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className="h-[calc(100vh+13rem)] lg:h-screen overflow-hidden px-20 lg:px-32 pt-8">
      <Menu />

      <div className="z-10 flex flex-col justify-center text-center lg:text-left lg:flex-row">
        <div>
          <div className="h-20 lg:h-36"></div>
          <div className="flex flex-col items-center lg:items-start lg:w-11/12">
            <div className="flex flex-col">
              <div className="text-4xl lg:text-6xl leading-extra-tight">
                <span className="">Simplify shopping </span><br></br>
                <span className="text-[#3584ED]">Scan</span> in store <br></br>
                <span className="text-[#3584ED]">Save</span> for later <br></br>
                <span className="text-[#3584ED]">subscribe</span> for perks <br></br>
              </div>
            </div>

            <div className="text-base w-9/12 lg:w-full mt-6 mb-6">Swish is a place to digitally track, share, and receive updates on all your in-person purchases once you've left the store</div>

          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center lg:justify-start sm:flex-row space-x-0 sm:space-x-2 text-sm sm:text-base md:text-base font-normal">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-72 text-sm lg:w-80 p-2 pl-4 rounded-full transition-all duration-100 focus:outline-0 text-[#262883] border border-[#C6C6C6]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type='submit'
                className="flex text-sm justify-center items-center pr-5 pl-4 mt-0 rounded-full bg-[#3584ED] text-white duration-150 hover:duration-150 hover:bg-[#275FAB] hover:border-0 hover:border-[#5C5ED2]">
                <img src={Logo} alt={"logo"} className="w-[18px] h-[18px] mr-2" />
                Join Waitlist
              </button>
            </div>
          </form>
        </div>

        <div className="z-10 mt-10 lg:ml-40"><Phone /></div>

      </div>
      <div class="invisible lg:visible z-0 absolute bottom-0 right-0 w-full">
        <img src={blur}/>
      </div>
    </div>
  )
}

export default HomePage;