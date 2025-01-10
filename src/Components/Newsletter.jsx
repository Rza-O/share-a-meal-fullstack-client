import { useState } from "react";
import newsletter from '../assets/Email campaign-bro.svg'
import { GoMail } from "react-icons/go";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const Newsletter = () => {
   const [email, setEmail] = useState('');

   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const name = email.split('@')[0]
      toast.success(`Welcome to our newsletter, ${name}!`)
   };

   const handleUnsubscribe = () => {
      toast.success('You have unsubscribed from our newsletter.')
   }
   

   const placeHolder = <>
      <div className="flex">
         <GoMail className="h-5 w-5"></GoMail>
         Your email
      </div>
   </>

   return (
      <section className="bg-gray-100 pt-1">
         <h2 className="font-lobster text-5xl text-green-800 font-bold text-center my-6">Newsletter</h2>
         <div className="2xl:w-10/12 w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center py-6">
            {/* text */}
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 100 }}
               className="flex flex-col justify-between gap-5 text-center lg:text-left lg:w-1/2 2xl:pl-12">
               {/* heading and subtitle */}
               <div className="space-y-3">
                  <h1 className="text-3xl font-bold">Stay in the loop</h1>
                  <p className="max-w-2xl"> Join our newsletter and stay connected with the latest donators updates, expert advice, and community designed to reduce food waste. Be the first to access exclusive content and tips that help our community everyday!</p>
               </div>
               {/* form */}
               <div className="flex items-center w-full ">
                  <form onSubmit={handleSubmit} className="w-full">
                     <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full max-w-xl" required />
                  <button type="submit" className="my-2 btn bg-primary text-white hover:bg-primary hover:text-secondary hover:scale-110">Subscribe</button>
                  </form>
               </div>
               {/* Terms and condition */}
               <div className="space-y-2">
                  <div>
                     <p className="mt-8 text-sm">
                        You agree to the terms of service. <br />
                        You'll receive the latest updates and tips. Unsubscribe anytime.
                     </p>
                  </div>
                  <div>
                     <p onClick={handleUnsubscribe} className="text-sm mt-2 underline font-bold cursor-pointer">
                        Unsubscribe
                     </p>
                  </div>
               </div>
            </motion.div>
            {/* image */}
            <motion.div
               initial={{opacity: 0, x: 20}}
               whileInView={{ opacity: 1, x:0 }}
               transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
               className="lg:w-1/2 flex items-center justify-center">
               <img src={newsletter} className="w-[600px]" alt="" />
            </motion.div>
         </div>
      </section>
   );
};

export default Newsletter;