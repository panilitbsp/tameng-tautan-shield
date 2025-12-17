import { AlertTriangle, X, ExternalLink } from "lucide-react";

const PhoneMockup = () => {
  return (
    <div className="relative animate-float">
      {/* Phone Frame */}
      <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px] bg-secondary rounded-[3rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="relative w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-2 text-xs text-muted-foreground">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-muted-foreground rounded-sm" />
              <div className="w-4 h-2 bg-muted-foreground rounded-sm" />
              <div className="w-6 h-3 bg-success rounded-sm" />
            </div>
          </div>

          {/* App Background - WhatsApp Style */}
          <div className="absolute inset-0 top-8 bg-card opacity-50" />
          
          {/* Chat Messages Background */}
          <div className="px-4 py-2 mt-6 space-y-3">
            <div className="bg-muted/50 rounded-lg p-3 max-w-[80%] ml-auto">
              <p className="text-xs text-foreground">Hey, check this link!</p>
            </div>
            <div className="bg-secondary rounded-lg p-3 max-w-[80%]">
              <p className="text-xs text-muted-foreground">Here's the file you asked for:</p>
              <p className="text-xs text-primary underline mt-1">bit.ly/3x7K9mN</p>
            </div>
          </div>

          {/* Security Overlay */}
          <div className="absolute inset-x-3 top-1/4 glass-card rounded-2xl overflow-hidden animate-pulse-glow">
            {/* Overlay Header */}
            <div className="gradient-danger px-4 py-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive-foreground" />
              <span className="text-sm font-semibold text-destructive-foreground">
                Dangerous link found!
              </span>
            </div>

            {/* Overlay Content */}
            <div className="p-4 space-y-4">
              {/* Risk Score */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-destructive/20 px-4 py-2 rounded-full">
                  <span className="text-2xl font-bold text-destructive">53%</span>
                  <span className="text-sm font-medium text-destructive">HIGH RISK</span>
                </div>
              </div>

              {/* URL Display */}
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">Detected URL:</p>
                <p className="text-xs text-foreground font-mono break-all">
                  bit.ly/3x7K9mN → fake-bank-login.xyz
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 bg-muted hover:bg-muted/80 rounded-lg py-2.5 text-sm font-medium text-foreground transition-colors">
                  <X className="w-4 h-4" />
                  Close
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 bg-accent hover:bg-accent/80 rounded-lg py-2.5 text-sm font-medium text-foreground transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Details
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="absolute bottom-0 inset-x-0 h-12 bg-secondary/80 backdrop-blur flex items-center justify-center">
            <div className="w-32 h-1 bg-muted-foreground rounded-full" />
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-full" />
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full -z-10" />
    </div>
  );
};

export default PhoneMockup;
