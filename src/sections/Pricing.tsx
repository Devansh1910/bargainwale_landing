"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 60,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Essential tools for managing orders and invoices",
      "Ideal for single-business operations needing streamlined solutions.",
      "Simplified dashboard for smooth, day-to-day management.",
      "Basic analytics to keep track of transaction progress.",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 80,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Advanced analytics and multi-business management in one platform",
      "Automate billing reminders to avoid missed deadlines and penalties",
      "Seamlessly manage multiple branches with unified control",
      "Enhanced dashboard for deeper insights and efficient coordination"
    ]
  },
  {
    title: "Business",
    monthlyPrice: 100,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Comprehensive suite with custom alerts and detailed transaction reports",
      "Built for large-scale operations needing full data visibility",
      "Priority support and tailored solutions for complex needs",
      "Real-time, in-depth analytics for smarter, faster decisions"
    ]
  },
];

export const Pricing = () => {
  const handleSignUp = () => {
    // Redirect to the external sign-up page
    window.location.href = "https://accounts.bargainwale.com/sign-up";
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-des mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, features, inverse }) => (
            <div
              key={title}
              className={twMerge(
                "p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
                inverse === true && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", inverse && "text-white/60")}>
                  {title}
                </h3>
                {popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      animate={{
                        backgroundPositionX: "-100%",
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      }}
                      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                    >
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                <span className="tracking-tight font-bold text-black/50">/month</span>
              </div>
              <button
                onClick={buttonText === "Sign up now" ? handleSignUp : undefined}
                className={twMerge("btn btn-primary w-full mt-[30px]", inverse && "bg-white text-black")}
              >
                {buttonText}
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature) => (
                  <li key={feature} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
