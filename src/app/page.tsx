import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Rajat</Heading>
      {/* <Paragraph className="max-w-xl mt-4">
        I&apos;m a Senior Front-End Developer and Co-Founder of <Link href="https://westack.ai/" target="_blank"><Highlight>Westack.ai</Highlight></Link> <br/>
        <Highlight>4+ years of experience</Highlight>, I specialize in building scalable,<br/> high-performance web applications that are both visually appealing and impactful, aiming to reach millions of users.
      </Paragraph> */}
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a senior software engineer with{" "}
        <Highlight>4+ years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking. <br/>
        As a co-founder of <Link href="https://westack.ai/" target="_blank"><Highlight className="underline">westack.ai</Highlight></Link>, I am passionate about creating impactful solutions that reach millions.
      </Paragraph>
      <TechStack />
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />      
    </Container>
  );
}
