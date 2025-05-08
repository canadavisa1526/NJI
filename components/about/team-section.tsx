"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "./section-header";
import { teamMembers } from "@/data/aboutData";
import { TeamMemberCard } from "./team-member-card";

export function TeamSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#AFC1DB]/10 dark:from-[#13294E] dark:to-[#13294E]/90 overflow-hidden">
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
              key={member.name}
              index={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              location={member.location}
              phone={member.phone}
              image={member.image}
              socialLinks={member.socialLinks}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
