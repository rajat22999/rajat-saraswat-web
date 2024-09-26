"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";
import { Heading } from "./Heading";
import Link from "next/link";
import { Highlight } from "./Highlight";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}    
      </div>

      <div className="max-w-4xl">
        <Paragraph className="font-bold text-lg">What I Do</Paragraph>
        <Paragraph className=" mt-2">
          I&apos;m a Senior Software Engineer with over 4 years of experience specializing in building scalable, high-performance web applications. I focus on creating clean, responsive user interfaces that offer an exceptional user experience while ensuring robust functionality behind the scenes.<br/> As a co-founder of <Link href="https://westack.ai/" target="_blank"><Highlight className="underline">westack.ai</Highlight></Link>, I also lead innovative projects aimed at transforming the digital landscape.
        </Paragraph>
        <Paragraph className="font-bold text-lg mt-4">My Passion</Paragraph>
        <Paragraph className=" mt-1">
          I love solving complex problems through code. Whether it&apos;s optimizing performance or ensuring seamless user experiences, I thrive on the challenges that come with building impactful digital products. My goal is always to craft solutions that can scale and stand the test of time.
        </Paragraph>

        <Paragraph className="font-bold text-lg mt-4">Hobbies & Interests</Paragraph>        
        <Paragraph className=" mt-1">
        When I&apos;m not coding, you&apos;ll likely find me traveling to new places or exploring local cultures. Travel fuels my creativity and gives me fresh perspectives on life and work. I also enjoy reading about the latest advancements in tech and continuously refining my skills in both front-end and back-end development.
        </Paragraph>

        <Paragraph className="font-bold text-lg mt-4">Values & Vision</Paragraph>  
        <Paragraph className=" mt-1">
        I believe in continuous growth, both personally and professionally. My journey has always been about staying curious, pushing boundaries, and working towards making technology more accessible and impactful. I&apos;m excited to build products that make a difference in people&apos;s lives.
        </Paragraph>
        <Paragraph className=" mt-4">
        Through this website, I aim to share my insights, experiences, and creations with you. Whether you&apos;re a fellow developer seeking solutions, a tech enthusiast in search of inspiration, or someone who simply appreciates the finer aspects of design, you&apos;ll find something here for you.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
      </div>
    </div>
  );
}
