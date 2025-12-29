const DemoSection = () => {
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
          <p className="text-muted-foreground text-lg">Try our interactive demo to see how the app detects and warns you about malicious links in real-time.</p>
        </div>
        <div className="flex justify-content-center">
          <img src="/images/howitworks.png" alt="howitworks" />
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
