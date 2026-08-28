"use client";
import React from "react";
import { motion } from "motion/react";

export type TestimonialItem = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 sm:p-8 rounded-3xl border border-ivory-200/80 dark:border-chocolate-850/60 bg-white dark:bg-[#26201B] shadow-lg shadow-black/5 dark:shadow-none max-w-xs w-full transition-all duration-300"
                  key={i}
                >
                  <div className="text-chocolate-850 dark:text-ivory-200 font-sans text-sm leading-relaxed">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-ivory-200/50 dark:border-chocolate-800/40">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border border-[#DFB283]/40"
                    />
                    <div className="flex flex-col">
                      <div className="font-serif font-semibold text-chocolate-900 dark:text-ivory-100 text-sm tracking-tight leading-5">
                        {name}
                      </div>
                      <div className="font-sans text-xs text-chocolate-700/70 dark:text-ivory-300/70 leading-5 tracking-tight">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
