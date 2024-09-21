"use client";

import { useState } from "react";
import * as motion from "framer-motion/client";

export default function Motion() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  //feat1

  //node 2

  //1231312
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="flex justify-center space-x-3">
        <div>
          <motion.div
            animate={{ x, y, rotate }}
            className="w-[200px] h-[200px] rounded-md border-dotted border-4 border-red-500"
            transition={{ type: "spring" }}
          />
        </div>
        <div>
          <div>
            <input
              type="range"
              onChange={(e) => setX(Number(e.target.value))}
              min={-200}
              max={200}
            />
            {x}
          </div>
          <div>
            <input
              type="range"
              onChange={(e) => setY(Number(e.target.value))}
              min={-200}
              max={200}
            />
            {y}
          </div>
          <div>
            <input
              type="range"
              onChange={(e) => setRotate(Number(e.target.value))}
              min={-180}
              max={180}
            />
            {rotate}
          </div>
        </div>
      </div>
    </div>
  );
}
