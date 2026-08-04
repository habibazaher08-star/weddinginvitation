import { motion, AnimatePresence } from "motion/react";
import cover from "../assets/cover.jpg";

export default function CoverScreen({
  onOpen,
}: {
  onOpen: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex justify-center bg-white cursor-pointer"
        onClick={onOpen}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full max-w-[430px] h-full">
          <img
            src={cover}
            alt="Wedding Invitation Cover"
            className="w-full h-full object-cover"
          />

          <motion.p
            className="absolute bottom-24 left-0 right-0 text-center text-[#D4AF37] text-lg tracking-[0.3em] uppercase italiana-regular"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Tap To Open
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}