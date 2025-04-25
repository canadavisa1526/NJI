"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "./section-header";
import { teamMembers } from "@/data/aboutData";
import { TeamMemberCard } from "./team-member-card";

export function TeamSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 overflow-hidden">
      <Container>
        <SectionHeader
          title="Our Leadership Team"
          subtitle="Meet the experts who make your immigration journey successful with years of experience and dedication to client success."
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              index={index}
              name={member.name}
              role={member.role}
              image={member.image}
              
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}