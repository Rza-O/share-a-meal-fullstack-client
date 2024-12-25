import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "Share-A-Plate is extraordinary experience. It's amazing. I love it.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCo5rBr2N6uQKaltnIgwzmdJxCBRhodVB-sQ&s",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. Share-A-Plate Rules, This is amazing.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEd2zxEc_4IQ1jHyniHLECu15zRjkHTBJzA&s",
    },
    {
        name: "John",
        username: "@john",
        body: "We need this type of initiative more. This is astonishing. I love it.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i_qZtrjSgoPCyIOywhlX8MKOzRIaQbKU0A&s",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "Donating food feels amazing. Outer body experience. I love it.",
        img: "https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1596588225004-L6KFDNJZNB6JB2BH9J9F/corporate+profile+headshot.jpg?format=500w",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I recently came across this platform and was deeply touched.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3-b6hE_5K-l4bv_gBuFtF5zWoPEhSkLsuw&s",
    },
    {
        name: "James",
        username: "@james",
        body: "The process of donating surplus food was seamless, and it felt amazing",
        img: "https://i1.sndcdn.com/artworks-WcO23SCnVhx0I8zM-5Tdpkg-t500x500.jpg",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-accent hover:bg-secondary",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function MarqueeReviews() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-primary md:shadow-xl mt-6">
            <h1 className="text-4xl font-bold text-secondary font-lobster mb-7">Check Out Our Reviews</h1>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/40 "></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/40 "></div>
        </div>
    );
}