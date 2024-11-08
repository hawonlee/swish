import '../App.css'
import Menu from '../components/Menu';
import { push, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { database } from '../firebaseConfig';
import { set } from 'firebase/database';
import Logo from '/logo_white.svg';
import Phone from '../components/Phone'

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
        <div className="h-screen overflow-hidden px-32 pt-12">
            <Menu />

            <div className="flex flex-row">
                <div>
                    <div className="h-44"></div>
                    <div className="flex flex-col">
                        <div className="text-7xl leading-extra-tight">
                            Simplify shopping <br></br>
                            <span className="text-[#3584ED]">Scan</span> in store <br></br>
                            <span className="text-[#3584ED]">Save</span> for later <br></br>
                        </div>
                    </div>
        
                    <div className="text-base mt-6 mb-6">A place to keep track of all your in-person purchases</div>
                    
        
                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 text-sm sm:text-base md:text-base font-normal">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email Address"
                          className="w-56 sm:w-80 md:w-80 p-2 pl-4 rounded-full transition-all duration-100 focus:outline-0 text-[#262883] border border-[#C6C6C6]"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                          type='submit'
                          className="flex justify-center items-center pr-5 pl-4 mt-0 rounded-full bg-[#3584ED] text-white duration-150 hover:duration-150 hover:bg-[#275FAB] hover:border-0 hover:border-[#5C5ED2]">
                          <img src={Logo} alt={"logo"} className="w-[18px] h-[18px] mr-2"/>
                          Join Waitlist
                        </button>
                      </div>
                    </form>
                </div>
            
                <div className="mt-10 ml-40"><Phone /></div>
            </div>
        </div>
    )
}

export default HomePage;