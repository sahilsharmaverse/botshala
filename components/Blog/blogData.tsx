import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Botshala - Humanoid Robot",
    paragraph:
      "Meet our Humanoid Robot – built at Botshala to inspire the next generation of innovators. Designed with intelligent motion, real-time interaction, and human-like gestures, it's a perfect blend of engineering and creativity in action.",
    image: "/images/blog/WhatsApp Image 2025-04-08 at 14.51.51_e2bc07bc.jpg",
    author: {
      name: "Botshala Team ( Hemanshu bhande , palak soni , kushi , saloni)",
      image: "/images/blog/humanoid_bot.jpg",
      designation: "Interns",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Mind control Bots",
    paragraph:
      "Welcome to the future of gaming—a revolutionary mind-controlled game developed at Botshala, where your brainwaves become your joystick . ✅ Neuro-technology in Action     🎮 Real-Time Game Control",
    image: "/images/blog/Screenshot 2025-05-05 183333.png",
    author: {
      name: "Gautam Soni",
      image: "/images/testimonials/gautam.jpg",
      designation: "Student",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Circuit Craft.",
    paragraph:
      "Circuit Craft is intended to simplify robotics and electronics by providing easy access to circuits, simulation tools, and educational content.",
    image: "/images/blog/cc.jpg",
    author: {
      name: "Sahil Sharma",
      image: "/images/blog/sahil.jpg",
      designation: "CTO",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
