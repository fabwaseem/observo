import { motion } from "framer-motion";
import Image from "next/image";
interface ChatMessageProps {
  content: string;
  author: string;
  date: string;
  className?: string;
  delay?: number;
}
const ChatMessage = ({
  content,
  author,
  date,
  className = "",
}: ChatMessageProps) => (
  <motion.div
    className={`px-6 py-4 bg-neutral-content text-neutral rounded-box ${className}`}
  >
    <div className="mb-2 whitespace-pre-wrap">{content}</div>
    <div className="text-neutral/80 flex items-center gap-2 text-sm">
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-7 rounded-full">
            <Image
              alt="user"
              loading="lazy"
              width={32}
              height={32}
              src="/images/user2.png"
            />
          </div>
        </div>
        <div className="">{author}</div>
      </div>
      •<div>{date}</div>
    </div>
  </motion.div>
);

export default ChatMessage;
