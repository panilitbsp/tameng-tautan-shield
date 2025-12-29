import { AlertTriangle, X, ExternalLink } from "lucide-react";

const PhoneMockup = () => {
  return (
    <div className="relative animate-float">
      {/* Phone Frame */}
      <img src="/images/handphone.png" alt="handphone" />
      {/* Glow Effect */}
      <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full -z-10" />
    </div>
  );
};

export default PhoneMockup;
