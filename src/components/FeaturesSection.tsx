import { 
  Eye, 
  Cpu, 
  SlidersHorizontal, 
  Link2, 
  Shield, 
  Zap,
  Lock,
  Bell
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Real-time Detection",
    description: "Background monitoring for WhatsApp, SMS, and other apps. Tameng Tautan watches your screen 24/7."
  },
  {
    icon: Cpu,
    title: "XGBoost Algorithm",
    description: "High-speed, on-device classification without sacrificing privacy. No data leaves your phone."
  },
  {
    icon: SlidersHorizontal,
    title: "Risk Threshold Tuning",
    description: "Customize sensitivity to your needs. Set your own risk score threshold for alerts."
  },
  {
    icon: Link2,
    title: "Short-link Decipher",
    description: "Automatically expands bit.ly, s.id, and other shortened links to inspect the final destination."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All processing happens on your device. Zero data collection, zero tracking, zero cloud uploads."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Analysis completes in under 50ms. You won't even notice it's running in the background."
  },
  {
    icon: Lock,
    title: "Secure by Design",
    description: "Uses Android's accessibility services responsibly with minimal permissions required."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Custom overlay alerts that don't interrupt your workflow. Dismiss or investigate with one tap."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Everything You Need for{" "}
            <span className="text-gradient">Complete Protection</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tameng Tautan combines cutting-edge machine learning with privacy-first design to keep you safe from phishing attacks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-6 hover:bg-muted/20 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-all">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
