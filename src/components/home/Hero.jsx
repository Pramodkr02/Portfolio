import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroVisualCard } from "./HeroVisualCard";
import { CanvasParticles } from "@/components/effects/CanvasParticles";

const ThreeHeroScene = lazy(() =>
  import("@/components/effects/ThreeHeroScene").then((module) => ({
    default: module.ThreeHeroScene,
  }))
);

const socialLinks = {
  github: "https://github.com/Pramodkr02",
  linkedin: "https://www.linkedin.com/in/pramodkr02/",
  twitter: "https://x.com/Pramodkr02",
};

export const Hero = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1CVM_K3iApcu92mf91dLVk8V31HGj2196/view?usp=sharing",
      "_blank"
    );
  };

  const title = "Frontend Developer";
  const name = "Pramod Kumar";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <CanvasParticles />
      <Suspense fallback={null}>
        <ThreeHeroScene />
      </Suspense>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-4"
          >
            <motion.h2
              variants={letterVariants}
              className="text-xl md:text-2xl font-medium text-accent-secondary"
            >
              Hello, I'm
            </motion.h2>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight">
              <span className="sr-only">{name}</span>
              <motion.div
                aria-hidden="true"
                className="flex flex-wrap justify-center lg:justify-start gap-x-4"
              >
                {name.split(" ").map((word, i) => (
                  <span key={i} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, j) => (
                      <motion.span
                        key={j}
                        variants={letterVariants}
                        className="inline-block text-gradient-accent"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.div>
            </h1>

            <motion.p
              variants={letterVariants}
              className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Full-Stack Developer skilled in building modern, scalable web
              applications with React, Next.js, and end-to-end engineering.
              Combining Generative AI expertise with strong data analytics to
              create intelligent, data-driven digital experiences.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="group cursor-pointer"
              onClick={handleResumeClick}
              download
            >
              Download Resume
              <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex gap-6 pt-4"
          >
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href={Object.values(socialLinks)[i]}
                className="text-text-tertiary hover:text-accent-primary hover:scale-110 transition-all duration-200"
                aria-label="Social Link"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="flex justify-center lg:justify-end perspective-1000">
          <HeroVisualCard />
        </div>
      </div>
    </section>
  );
};
