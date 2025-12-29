import { useState } from "react";
import { 
  BookOpen, 
  Rocket, 
  Cog, 
  HelpCircle, 
  ChevronRight,
  Settings,
  Shield,
  Zap
} from "lucide-react";

const docsSections = [
  {
    id: "getting-started",
    icon: Rocket,
    title: "Getting Started",
    content: {
      title: "Getting Started with Tameng Tautan",
      description: "Learn how to set up and configure Tameng Tautan for optimal protection.",
      steps: [
        {
          title: "1. Download and Install",
          content: "Download the APK file from our website and install it on your Android device. You may need to enable 'Install from unknown sources' in your device settings."
        },
        {
          title: "2. Enable Accessibility Service",
          content: "Go to Settings → Accessibility → Tameng Tautan and enable the service. This allows the app to monitor links appearing on your screen."
        },
        {
          title: "3. Grant Overlay Permission",
          content: "When prompted, allow Tameng Tautan to display over other apps. This is required to show security warnings when threats are detected."
        },
        {
          title: "4. You're Protected!",
          content: "Tameng Tautan will now run silently in the background, analyzing every link that appears on your screen."
        }
      ]
    }
  },
  {
    id: "how-it-works",
    icon: Cog,
    title: "How It Works",
    content: {
      title: "Understanding the Technology",
      description: "Dive deep into how Tameng Tautan protects you from phishing attacks.",
      steps: [
        {
          title: "Screen Monitoring",
          content: "Using Android's Accessibility API, Tameng Tautan monitors text content displayed on your screen without capturing any personal data."
        },
        {
          title: "URL Detection",
          content: "Our regex engine identifies URLs in the monitored text, including shortened links from services like bit.ly, s.id, and t.co."
        },
        {
          title: "Link Expansion",
          content: "Shortened URLs are automatically expanded to reveal their true destination, exposing potentially malicious redirects."
        },
        {
          title: "ML Classification",
          content: "The XGBoost model analyzes URL features including domain age, path structure, keyword patterns, and character entropy to calculate a risk score."
        },
        {
          title: "Alert Generation",
          content: "If the risk score exceeds your configured threshold, a warning overlay appears with details about the threat."
        }
      ]
    }
  },
  {
    id: "configuration",
    icon: Settings,
    title: "Configuration",
    content: {
      title: "Customizing Your Protection",
      description: "Learn how to fine-tune Tameng Tautan to match your security preferences.",
      steps: [
        {
          title: "Risk Threshold",
          content: "Adjust the sensitivity slider (0.1 to 0.9) to control when alerts are triggered. Lower values = more alerts, higher values = fewer alerts. Default: 0.5"
        },
        {
          title: "Detection Model",
          content: "Choose between 'Standard' mode for balanced detection or 'Aggressive' mode for maximum security (may produce more false positives)."
        },
        {
          title: "App Whitelist",
          content: "Exclude specific apps from monitoring if you trust them completely. Navigate to Settings → App Whitelist to manage exclusions."
        },
        {
          title: "Notification Style",
          content: "Choose between 'Overlay' (full-screen warning), 'Banner' (compact notification), or 'Silent' (logging only) modes."
        }
      ]
    }
  },
  {
    id: "faq",
    icon: HelpCircle,
    title: "FAQ",
    content: {
      title: "Frequently Asked Questions",
      description: "Answers to common questions about Tameng Tautan.",
      steps: [
        {
          title: "Does Tameng Tautan collect my data?",
          content: "No. All processing happens entirely on your device. We don't collect, store, or transmit any of your personal data or browsing history."
        },
        {
          title: "Why does it need Accessibility permission?",
          content: "The Accessibility Service is required to read text content on your screen so we can detect URLs. We only use this for URL detection, nothing else."
        },
        {
          title: "Does it slow down my phone?",
          content: "No. The XGBoost model is highly optimized and processes URLs in under 50ms. The background service uses minimal battery."
        },
        {
          title: "Can I use it alongside other security apps?",
          content: "Yes! Tameng Tautan is designed to complement existing security solutions. It focuses specifically on real-time phishing detection."
        },
        {
          title: "Is it free?",
          content: "Yes, Tameng Tautan is completely free and open source. No ads, no premium features, no subscriptions."
        }
      ]
    }
  }
];

const DocsSection = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const currentDoc = docsSections.find(s => s.id === activeSection);

  return (
    <section id="docs" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Documentation</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Everything You Need to <span className="text-gradient">Get Started</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive guides to help you set up and use Tameng Tautan effectively.
          </p>
        </div>

        {/* Docs Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-4 sticky top-24">
              <nav className="space-y-2">
                {docsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                      activeSection === section.id
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`}
                  >
                    <section.icon className="w-5 h-5" />
                    <span className="font-medium">{section.title}</span>
                    {activeSection === section.id && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8 md:p-10">
              {currentDoc && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <currentDoc.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{currentDoc.content.title}</h3>
                      <p className="text-muted-foreground">{currentDoc.content.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6 mt-8">
                    {currentDoc.content.steps.map((step, index) => (
                      <div key={index} className="border-l-2 border-primary/30 pl-6 pb-4">
                        <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocsSection;
