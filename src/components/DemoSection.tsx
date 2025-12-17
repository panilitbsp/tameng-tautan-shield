import { useState } from "react";
import { Play, AlertTriangle, CheckCircle, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoSection = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<"idle" | "scanning" | "danger" | "safe">("idle");
  const [inputUrl, setInputUrl] = useState("bit.ly/free-iphone-2024");

  const simulateScan = () => {
    setIsScanning(true);
    setScanResult("scanning");

    // Simulate scanning process
    setTimeout(() => {
      setScanResult("danger");
      setIsScanning(false);
    }, 2000);
  };

  const resetDemo = () => {
    setScanResult("idle");
    setInputUrl("bit.ly/free-iphone-2024");
  };

  return (
    <section id="demo" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Live Demo</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            See How <span className="text-gradient">Tameng Tautan</span> Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Try our interactive demo to see how the app detects and warns you about malicious links in real-time.
          </p>
        </div>

        {/* Demo Card */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            {/* URL Input */}
            <div className="mb-8">
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Test URL
              </label>
              <div className="flex gap-3">
                <div className="flex-1 bg-muted rounded-xl px-4 py-3 flex items-center gap-3">
                  <Link2 className="w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    className="bg-transparent flex-1 text-foreground outline-none font-mono text-sm"
                    placeholder="Enter a URL to scan..."
                    disabled={isScanning}
                  />
                </div>
                <Button
                  onClick={scanResult === "idle" ? simulateScan : resetDemo}
                  className={`px-6 ${
                    scanResult === "idle"
                      ? "gradient-primary glow-primary"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                  disabled={isScanning}
                >
                  {scanResult === "idle" ? (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Scan
                    </>
                  ) : (
                    "Reset"
                  )}
                </Button>
              </div>
            </div>

            {/* Scanning Animation */}
            {scanResult === "scanning" && (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                <p className="text-foreground font-medium">Analyzing URL...</p>
                <p className="text-sm text-muted-foreground mt-1">Running XGBoost classification</p>
              </div>
            )}

            {/* Result - Danger */}
            {scanResult === "danger" && (
              <div className="animate-slide-up">
                <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center animate-pulse-glow">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-destructive">Phishing Link Detected!</h3>
                      <p className="text-sm text-muted-foreground">This URL matches known phishing patterns</p>
                    </div>
                  </div>

                  {/* Risk Score */}
                  <div className="bg-background/50 rounded-xl p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Risk Score</span>
                      <span className="text-2xl font-bold text-destructive">87%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full gradient-danger rounded-full w-[87%]" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expanded URL:</span>
                      <span className="text-foreground font-mono">fake-prize-claim.xyz</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domain Age:</span>
                      <span className="text-destructive">2 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">SSL Certificate:</span>
                      <span className="text-destructive">Invalid</span>
                    </div>
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  This is how Tameng Tautan protects you from clicking dangerous links.
                </p>
              </div>
            )}

            {/* Result - Safe */}
            {scanResult === "safe" && (
              <div className="animate-slide-up">
                <div className="bg-success/10 border border-success/30 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-lg font-bold text-success">URL is Safe!</h3>
                  <p className="text-sm text-muted-foreground mt-1">No threats detected</p>
                </div>
              </div>
            )}

            {/* Idle State */}
            {scanResult === "idle" && (
              <div className="text-center py-12 border-2 border-dashed border-border rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Play className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">Click "Scan" to see Tameng Tautan in action</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
