import React from 'react';
import { Helmet } from 'react-helmet-async';

const OurWork = () => {
   return (
      <div className='bg-gray-50'>
         <Helmet>
            <title>Our Work | Share-A-Meal</title>
         </Helmet>
         <section className="bg-primary text-center text-white px-6 py-10 md:px-16 md:py-20">
            <div className="max-w-5xl mx-auto">
               <h1 className="text-3xl md:text-5xl text-secondary font-bold leading-tight font-lobster">
                  A World Where No One Goes Hungry
               </h1>
               <p className="mt-4 text-lg md:text-xl">
                  Hunger is a big challenge, but together we can solve it. We approach
                  ending food insecurity from every angle.
               </p>
            </div>
         </section>

         <section className="px-6 py-10 md:px-16 md:py-20">
            <div className="max-w-5xl mx-auto">
               <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
                  Building a Hunger-Free World
               </h2>
               <p className="mt-4 text-gray-700">
                  We all deserve to have enough food to eat without worrying about if
                  we can afford it. At Share A Meal, we are working to make this a
                  reality by:
               </p>
               <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                     <span className="text-green-600 text-xl mr-4">&#x2713;</span>
                     <p className="text-gray-700">
                        Ensuring everyone can get the food they need with respect and
                        dignity.
                     </p>
                  </li>
                  <li className="flex items-start">
                     <span className="text-green-600 text-xl mr-4">&#x2713;</span>
                     <p className="text-gray-700">
                        Advocating for policies that improve food security for
                        everyone.
                     </p>
                  </li>
                  <li className="flex items-start">
                     <span className="text-green-600 text-xl mr-4">&#x2713;</span>
                     <p className="text-gray-700">
                        Partnering to address the root causes of food insecurity.
                     </p>
                  </li>
               </ul>
            </div>
         </section>


         <section className="bg-gray-100 px-6 py-10 md:px-16 md:py-20">
            <div className="max-w-5xl mx-auto">
               <h2 className="text-2xl md:text-3xl text-center font-bold text-primary">
                  Working with Local Food Banks
               </h2>
               <p className="mt-4 text-gray-700">
                  When you support Share A Meal, you are helping a nationwide network
                  of food banks, food pantries, and meal programs provide resources
                  so people facing hunger can put food on the table.
               </p>
               <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white rounded-lg shadow">
                     <h3 className="text-xl font-bold text-green-800">Rescuing Food</h3>
                     <p className="mt-4 text-gray-700">
                        We work with the food industry to rescue food that would
                        otherwise go to waste.
                     </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow">
                     <h3 className="text-xl font-bold text-green-800">Storing Food</h3>
                     <p className="mt-4 text-gray-700">
                        Network food banks collect, store, and distribute food to local
                        pantries and meal programs.
                     </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow">
                     <h3 className="text-xl font-bold text-green-800">Distributing Food</h3>
                     <p className="mt-4 text-gray-700">
                        The network's food pantries and meal programs distribute food
                        to their communities.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="px-6 py-10 md:px-16 md:py-20">
            <div className="max-w-5xl mx-auto">
               <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
                  How We End Hunger
               </h2>

               <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                     <img
                        src="https://cdn2.cincinnatimagazine.com/wp-content/uploads/sites/5/2020/07/AdobeStock_219800382-copy-scaled.jpg"
                        alt="Food Access"
                        className="w-full h-40 object-cover rounded-lg"
                     />
                     <h3 className="mt-4 text-lg font-bold text-green-800">
                        Food Access
                     </h3>
                     <p className="mt-2 text-gray-700">
                        Helping communities access the food they need to thrive.
                     </p>
                  </div>

                  <div className="text-center">
                     <img
                        src="https://goeco.org.nz/wp-content/uploads/2016/02/food-rescue-1-e1695682073601.png"
                        alt="Food Rescue"
                        className="w-full h-40 object-cover rounded-lg"
                     />
                     <h3 className="mt-4 text-lg font-bold text-green-800">
                        Food Rescue
                     </h3>
                     <p className="mt-2 text-gray-700">
                        Rescuing food from waste to feed more people.
                     </p>
                  </div>

                  <div className="text-center">
                     <img
                        src="https://convoyofhope.org/wp-content/uploads/2023/08/web-08-24-23-Hawaii-Fires-DS-IMG_6822.jpg.webp"
                        alt="Disaster Response"
                        className="w-full h-40 object-cover rounded-lg"
                     />
                     <h3 className="mt-4 text-lg font-bold text-green-800">
                        Disaster Response
                     </h3>
                     <p className="mt-2 text-gray-700">
                        Supporting communities during disasters.
                     </p>
                  </div>

                  <div className="text-center">
                     <img
                        src="https://nap.nationalacademies.org/cover/18516/450"
                        alt="Hunger Research"
                        className="w-full h-40 object-cover rounded-lg"
                     />
                     <h3 className="mt-4 text-lg font-bold text-green-800">
                        Hunger Research
                     </h3>
                     <p className="mt-2 text-gray-700">
                        Researching to end hunger effectively.
                     </p>
                  </div>
               </div>
            </div>
         </section>

      </div>
   );
};

export default OurWork;