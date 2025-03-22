import { BoardTheme } from "@/types";
import UpVoteButton from "../common/UpVoteButton";
import { motion } from "framer-motion";

interface ThemeCardProps {
  theme: BoardTheme;
  zIndex: string;
  position: string;
  extraClasses?: string;
  delay?: number;
}

const ThemeCard = ({
  theme,
  zIndex,
  position,
  extraClasses = "",
  delay = 0,
}: ThemeCardProps) => {
  const feedbackItems = [
    {
      title: "Clickable cards",
      description: "Make cards more accessible",
      votes: Math.floor(Math.random() * 100),
      upvoted: Math.random() > 0.5,
    },
    {
      title: "Bigger images",
      description: "Make cards more accessible",
      votes: Math.floor(Math.random() * 100),
      upvoted: Math.random() > 0.5,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rotate-[6deg] bg-base-200 text-base-content w-72 h-72 rounded-xl p-4 ${zIndex} ${position} ${extraClasses} transition-all duration-300`}
      data-theme={theme.toLowerCase()}
    >
      <div className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3">
        Trending feedback
      </div>
      <div className="space-y-2">
        {feedbackItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + 0.1 * (index + 1) }}
            className="p-4 bg-base-100 rounded-box flex justify-between"
          >
            <div>
              <p className="font-semibold mb-1">{item.title}</p>
              <p className="opacity-80">{item.description}</p>
            </div>
            <UpVoteButton initialCount={item.votes} upvoted={item.upvoted} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ThemeCard;
