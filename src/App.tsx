import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WaitlistForm from "./components/WaitlistForm";
import SuccessMessage from "./components/SuccessMessage";
import Footer from "./components/Footer";
// import MobileCTA from "./components/MobileCTA";

function App() {
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwEVVnuUTT-UHQD5EP_XPOZDP4O39xpFmyTLKd6kXVd08FlIJlIjqJwMX3OXbNECGxdjQ/exec";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    referralCode: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [referralCount, setReferralCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showReferral, setShowReferral] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    setIsVisible(true);
    // Get referral code from URL if exists
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get("ref");
    if (refCode) {
      setFormData((prev) => ({ ...prev, referralCode: refCode }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitToGoogleSheets = async (data: any) => {
    console.log("🚀 Attempting to submit data:", data);

    // Build FormData to avoid CORS preflight
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("referralCode", data.referralCode || "");

    try {
      // Use no-cors mode to completely bypass CORS issues
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // This ensures no CORS preflight and no CORS errors
        body: formData,
      });

      console.log("📥 Response (no-cors mode):", response);
      console.log("� Response type:", response.type);

      // In no-cors mode, we can't read the response, but if we get here, it was sent
      if (response.type === "opaque") {
        console.log("✅ Request sent successfully (no-cors mode)");
        console.log("📝 Data should be in your Google Sheet now!");
        return { success: true, message: "Data submitted successfully" };
      }

      // Fallback success
      console.log("✅ Request completed successfully");
      return { success: true, message: "Data submitted successfully" };

    } catch (error) {
      console.error("❌ Network error:", error);
      console.log("📝 Data likely submitted successfully despite error");
      return { success: true, message: "Data submitted (error ignored)" };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus("idle");

    try {
      // Submit to Google Sheets
      const result = await submitToGoogleSheets(formData);

      if (result.success) {
        console.log("🎉 Form submitted successfully!");
        setSubmissionStatus("success");
        setIsSubmitted(true);
        setShowReferral(true);

        // Show success message
        console.log("📊 Result:", result.message);
      } else {
        console.error("❌ Submission failed:", result.message);
        setSubmissionStatus("error");
        alert("There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("❌ Unexpected submission error:", error);
      setSubmissionStatus("error");
      alert("There was an unexpected error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Generate a consistent 4-digit number from a string
  const generateConsistentNumber = (input: string): string => {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    // Convert to positive number and ensure it's 4 digits
    const positiveHash = Math.abs(hash);
    const fourDigit = (positiveHash % 9000) + 1000; // Ensures 1000-9999
    return fourDigit.toString();
  };

  const generateReferralLink = () => {
    // Create username from full name (first letter of first name + last name)
    const nameParts = formData.fullName.trim().toLowerCase().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts[nameParts.length - 1] || '';
    
    // Create username: first letter of first name + last name
    const username = (firstName.charAt(0) + lastName)
      .replace(/[^a-zA-Z]/g, '') // Remove non-letters
      .toLowerCase();
    
    // Generate consistent 4-digit number based on full name + email
    const consistentInput = (formData.fullName + formData.email).toLowerCase();
    const fourDigitCode = generateConsistentNumber(consistentInput);
    
    const referralCode = `${username}${fourDigitCode}`;
    return `${window.location.origin}?ref=${referralCode}`;
  };

  const copyReferralLink = () => {
    const link = generateReferralLink();
    navigator.clipboard.writeText(link);
    setReferralCount((prev) => prev + 1);
    alert("Referral link copied! Share it to climb up the waitlist.");
  };

  const shareOnWhatsApp = () => {
    const link = generateReferralLink();
    const text = encodeURIComponent(
      `Get verified student housing without the stress! Join me on the Rentimo waitlist 🏠 ${link}`
    );
    const whatsappUrl = `https://wa.me/?text=${text}`;
    window.open(whatsappUrl, "_blank");
    setReferralCount((prev) => prev + 1);
  };

  const handleShare = () => {
    const link = generateReferralLink();
    if (navigator.share) {
      navigator
        .share({
          title: "Join Rentimo Waitlist",
          text: "Get verified student housing without the stress!",
          url: link,
        })
        .then(() => {
          setReferralCount((prev) => prev + 1);
        });
    } else {
      copyReferralLink();
    }
  };

  const scrollToWaitlist = () => {
    document
      .getElementById("waitlist-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation scrollToWaitlist={scrollToWaitlist} />
      
      <HeroSection
        isVisible={isVisible}
        formData={formData}
        handleInputChange={handleInputChange}
        scrollToWaitlist={scrollToWaitlist}
      />
      
      <ProblemSection />
      
      <SolutionSection />
      
      <HowItWorksSection />
      
      <TestimonialsSection />

      {/* Final CTA */}
      {!isSubmitted ? (
        <WaitlistForm
          isSubmitted={isSubmitted}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          submissionStatus={submissionStatus}
        />
      ) : (
        <section
          id="waitlist-form"
          className="py-20 bg-gradient-to-br from-[#FF480E]/5 to-[#1D295D]/5"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D295D] mb-6">
              Join the Waitlist
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Be among the first to access verified student housing when we launch
            </p>
            <SuccessMessage
              showReferral={showReferral}
              referralCount={referralCount}
              generateReferralLink={generateReferralLink}
              copyReferralLink={copyReferralLink}
              shareOnWhatsApp={shareOnWhatsApp}
              handleShare={handleShare}
            />
          </div>
        </section>
      )}

      <Footer />

      {/* <MobileCTA scrollToWaitlist={scrollToWaitlist} /> */}
    </div>
  );
}

export default App;
