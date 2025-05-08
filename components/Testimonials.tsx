"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Patel Axay",
      content:
        "When I decided to apply for my PGWP, I turned to New Journey Immigration, and I’m so glad I did. The team made the entire process straightforward and stress-free. They were meticulous with every detail, kept me updated regularly, and provided clear instructions. What really stood out was their transparency — no hidden information, unlike some other agents I’ve dealt with. Everything was out in the open, which made me feel confident throughout the entire application. Highly recommend their services to anyone needing immigration support.",
      rating: 5,
      href: "https://maps.app.goo.gl/jdHv4GzwNJjHUcim8",
    },
    {
      name: "Yash Pandit",
      content:
        "Very great experience with them. They helped me a lot, and I got my visa in just 1 month. The team is very helpful and experienced. I'm extremely happy and fully satisfied with their work, paperwork, and document filing. Thank you so much, New Journey Immigration, for my best visa experience.",
      rating: 5,
      href: "https://g.co/kgs/bSsYgNq",
    },
    {
      name: "Jil Patel",
      content:
        "I had an excellent experience working with Karan from New Journey Immigration. From the beginning, Karan was extremely knowledgeable, patient, and supportive throughout the entire immigration process. He explained every step clearly, answered all my questions promptly, and made sure all my documents were properly organized and submitted on time.\n\nWhat stood out the most was Karan’s dedication and genuine care for his clients. He went above and beyond to ensure that everything was handled professionally and efficiently. Thanks to his guidance, my application process was smooth and stress-free.\n\nI highly recommend Karan and the team at New Journey Immigration to anyone looking for trustworthy and reliable immigration support.",
      rating: 5,
      href: "https://g.co/kgs/ZVHSpc6",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#13294e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#13294e] dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#13294e]/80 dark:text-gray-300 max-w-3xl mx-auto">
            Read about the experiences of people we've helped achieve their
            immigration goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#AFC1DB]/20 dark:bg-white/5 border border-[#AFC1DB]/30 dark:border-white/10 rounded-xl p-6 shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-[#faa71a] fill-current"
                  />
                ))}
              </div>
              <p className="text-[#13294e]/80 dark:text-gray-300 mb-4 italic line-clamp-2">
                {testimonial.content}
              </p>
              <div>
                <p className="font-semibold text-[#13294e] dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[#13294e]/60 dark:text-gray-400">
                  <a
                    href={testimonial.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#faa71a] transition-colors"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
