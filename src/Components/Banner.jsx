import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import bannerImg from '../assets/bannerImg.jpg';

const Banner = () => {
    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8  mx-auto bg-primary">
            <div>
                <span className="block mb-4 text-xs md:text-sm text-secondary font-medium">
                    Better every day
                </span>
                {/* <h3 className="text-4xl md:text-6xl font-semibold text-secondary">
                    Let's change it up a bit
                </h3> */}
                {/* { Fighting Hunger and Reducing Food Waste – Every Meal Counts} */}
                <h1 className="max-w-2xl text-left text-5xl leading-snug text-secondary">
                    Join Us{" "}
                    <span className="relative">
                        Spreading
                        <svg
                            viewBox="0 0 286 73"
                            fill="none"
                            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
                        >
                            <motion.path
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{
                                    duration: 1.25,
                                    ease: "easeInOut",
                                }}
                                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                                stroke="#FACC15"
                                strokeWidth="3"
                            />
                        </svg>
                    </span>{" "}
                    Love, Every Meal Matters
                </h1>
                <p className="text-base md:text-lg  my-4 md:my-6 text-accent">
                    Every year, millions of meals go to waste while countless people go to bed hungry. Our mission is simple: bridge the gap between surplus and need.
                </p>
                <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
                    Find a class
                </button>
            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs=",
    },
    {
        id: 2,
        src: "https://img.freepik.com/free-photo/medium-shot-volunteers-with-food-donations_23-2149182005.jpg",
    },
    {
        id: 3,
        src: "https://plus.unsplash.com/premium_photo-1682092588009-51eacb1d03ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5nb3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1554796104-5c39d0551b52?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5nb3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 5,
        src: "https://plus.unsplash.com/premium_photo-1723485635064-37739fd9918e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG5nb3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFmcmljYW4lMjBjYW1wfGVufDB8fDB8fHww",
    },
    {
        id: 7,
        src: "https://annamrita.org/wp-content/uploads/2023/03/Feeding-India-How-Food-NGOs-Support-Indias-Fight-Against-Hunger_.jpg",
    },
    {
        id: 8,
        src: "https://media.istockphoto.com/id/472165353/photo/little-girl-holding-bowl-at-soup-kitchen-or-food-bank.jpg?s=612x612&w=0&k=20&c=_25T4X2NL96SQmkZemBPSPo0n5azVrWOARl4JxuxeuU=",
    },
    {
        id: 9,
        src: "https://hips.hearstapps.com/hmg-prod/images/volunteers-serving-healthy-hot-meal-at-soup-kitchen-royalty-free-image-1599593367.jpg",
    },
    {
        id: 10,
        src: "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/image1170x530cropped_52.jpg",
    },
    {
        id: 11,
        src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/ee/2c/24/caption.jpg?w=500&h=400&s=1",
    },
    {
        id: 12,
        src: "https://transitiontogether.org.uk/wp-content/uploads/2022/11/Made-Up-Kitchen-preparing-for-a-Peoples-Kitchen-feast-Credit-Made-Up-Kitchen.jpg",
    },
    {
        id: 13,
        src: "https://cdn-ch-prod-bqhwa0ewbpg6eyc2.z01.azurefd.net/prod-img-cache/CDN-ik-images/image/24983620371954143904156283517209159/4786/ajax_CDN-ik-images24e1cda28bd9472884ca51819bdd0b77-untitled_3751.jpg",
    },
    {
        id: 14,
        src: "https://media.licdn.com/dms/image/v2/C4E1BAQGq6IDX9oFwWQ/company-background_10000/company-background_10000/0/1585843357909/the_stop_community_food_centre_cover?e=2147483647&v=beta&t=w9_29Ni_7PIjWK6zPvN1mNqBxpeRW-6Z4Z0Dcf6msl4",
    },
    {
        id: 15,
        src: "https://images.stockcake.com/public/c/d/d/cddd24d6-f285-457e-848c-8a815d9a7fdd_large/community-food-sharing-stockcake.jpg",
    },
    {
        id: 16,
        src: "https://www.shutterstock.com/image-photo/muslim-family-having-iftar-dinner-600nw-2253082433.jpg",
    },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default Banner;