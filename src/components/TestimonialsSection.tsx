import { Star } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatar: string;
}

interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", className = "", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  const displayed = useTransform(springValue, (latest) => {
    if (value % 1 !== 0) {
      return latest.toFixed(1);
    }
    return Math.round(latest).toString();
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  return (
    <div ref={ref} className={`text-3xl font-bold mb-1 ${className}`}>
      <motion.span>{displayed}</motion.span>
      {suffix}
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      text: "Finding a hostel has always been stress — Rentimo makes it simple.",
      name: "Chika Adebayo",
      role: "200L Student",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b9e1b92c?w=60&h=60&fit=crop&crop=face",
    },
    {
      text: "No more fake agents or hidden fees. This is the future.",
      name: "Kunle Johnson",
      role: "300L Student",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    },
    {
      text: "Finally, a platform I can trust. My parents love the transparency!",
      name: "Amara Okon",
      role: "100L Student",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    },
    {
      text: "Saved me weeks of searching! The verification process gives me peace of mind.",
      name: "Tunde Fashola",
      role: "400L Student",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    },
    {
      text: "Best platform for student housing. Quick, reliable, and trustworthy!",
      name: "Blessing Okoro",
      role: "300L Student",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D295D] mb-6">
            Trusted by Students
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the hundreds of students who trust Rentimo for their housing
            needs
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <motion.div 
            className="bg-white p-6 rounded-xl text-center border border-gray-100 hover:border-[#FF480E]/20 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter value={500} suffix="+" className="text-[#1D295D]" />
            <p className="text-gray-600 text-sm">Students on waitlist</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-xl text-center border border-gray-100 hover:border-[#FF480E]/20 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter value={15} suffix="+" className="text-[#FF480E]" />
            <p className="text-gray-600 text-sm">Verified hostels</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-xl text-center border border-gray-100 hover:border-[#FF480E]/20 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter value={100} suffix="%" className="text-[#1D295D]" />
            <p className="text-gray-600 text-sm">Verified listings</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-xl text-center border border-gray-100 hover:border-[#FF480E]/20 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter value={4.9} suffix="★" className="text-[#FF480E]" />
            <p className="text-gray-600 text-sm">Student rating</p>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div 
          className="relative overflow-hidden py-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-6 animate-infinite-scroll">
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#FF480E]/20 transition-colors min-w-[350px] max-w-[350px] flex-shrink-0"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#FF480E] fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-[#1D295D] text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
