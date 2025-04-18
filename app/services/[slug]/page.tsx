"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  CheckCircle,
  Send,
  Phone,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
  MapPin,
  Globe,
  Check,
  Sparkles,
  Star,
  Users2,
  Trophy,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services, testimonials } from "@/data/services-data";
import { ShapePattern } from "@/components/shape-patterns";
// import { TestimonialCard } from "@/components/testimonial-card";
import { Badge } from "@/components/ui/badge";
import { formatPhoneNumber } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const ServicePage = () => {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: slug,
    message: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: slug,
    }));
  }, [slug]);

  const service = services.find((s) => s.slug === slug);
  const relatedTestimonials = testimonials
    .filter((t) => t.service === slug)
    .slice(0, 2);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
            <p className="mb-6 text-muted-foreground">
              The service you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild className="w-full">
              <a href="/services">Browse All Services</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const stats = [
    { icon: Users2, value: "98%", label: "Success Rate" },
    { icon: Trophy, value: "15K+", label: "Cases Handled" },
    { icon: Clock, value: "24/7", label: "Support" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Your inquiry has been submitted successfully! We'll contact you soon."
    );
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.images[0]}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />

          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
              {service.description}
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-2 mt-6"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              {service.countries &&
                service.countries.map((country, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Badge
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm text-white border-white/20 flex items-center gap-1"
                    >
                      <MapPin size={12} /> {country}
                    </Badge>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 border-2 border-white rounded-full p-1"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto animate-scroll" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-background to-orange-50/5 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                variants={scaleIn}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-orange-100 dark:bg-orange-900/30 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-600 rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 relative overflow-hidden">
        <ShapePattern variant="circles" className="z-0" color="orange" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="prose dark:prose-invert max-w-none">
                {service.details.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-muted-foreground leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {service.benefits && (
                <motion.div
                  className="mt-10"
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerChildren}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                    Key Benefits
                  </h3>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start"
                      >
                        <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Inquiry Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-xl border border-border/50 relative overflow-hidden"
            >
              <ShapePattern variant="dots" className="z-0" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Inquire About This Service
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input
                        placeholder="Your Name"
                        className="pl-10"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input
                        placeholder="Phone Number"
                        className="pl-10"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        required
                      />
                    </div>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.slug} value={s.slug}>
                            {s.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-muted-foreground h-5 w-5" />
                      <Textarea
                        placeholder="Your Message"
                        className="pl-10 min-h-[120px]"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Inquiry
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
    </div>
  );
};

export default ServicePage;
