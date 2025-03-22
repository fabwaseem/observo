import Image from "next/image";
import Rating from "../common/Rating";
import { motion } from "framer-motion";

interface TestimonialProps {
  rating: number;
  comment: string;
  author: {
    name: string;
    followers: string;
    image: string;
  };
  delay?: number;
}

const Testimonial = ({
  rating,
  comment,
  author,
  delay = 0,
}: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-4 max-w-md mx-auto text-primary-content"
    >
      <div className="rating !flex justify-center">
        <Rating
          fillColor="fill-primary-content/80 stroke-primary-content/80"
          initialRating={rating}
        />
      </div>
      <div className="leading-relaxed space-y-2 max-w-md mx-auto text-center">
        <p>{comment}</p>
      </div>
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
        className="flex justify-center items-center gap-3 md:gap-4"
      >
        <Image
          alt={author.name}
          loading="lazy"
          width={48}
          height={48}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          src={author.image}
        />
        <div>
          <p className="font-semibold">{author.name}</p>
          <p className="opacity-80 text-sm">{author.followers}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
