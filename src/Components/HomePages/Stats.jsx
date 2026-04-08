import React from 'react';
import { motion } from "framer-motion"

import { Download, Star, Zap } from "lucide-react";

const stats = [
  { icon: Download, label: "Total Downloads", value: "80M+" },
  { icon: Star, label: "Total Reviews", value: "328k" },
  { icon: Zap, label: "Total Apps", value: 16 },
];

const Stats = () => {
    return (
        <section className="container mx-auto -mt-6 ">
      <motion.div 
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.9, delay: 0.1}}

      className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div
          
            key={stat.label}
            className="flex items-center gap-4 bg-white rounded-xl border border-gray-200 shadow-md p-6 "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2980]/20">
              <stat.icon className="h-6 w-6 text-[#1a2980]" />
            </div>
            <div>
              <p className="text-2xl font-bold ">{stat.value}</p>
              <p className="text-sm font-semibold text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
    );
};

export default Stats;