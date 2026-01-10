import { Link } from "react-router-dom";
import {
  Scan,
  FlaskConical,
  Cloud,
  LayoutDashboard,
  Bell,
  Map,
} from "lucide-react";
import Layout from "@/components/Layout";
import FeatureCard from "@/components/FeatureCard";
import heroImage from "@/assets/hero-wheat-field.jpg";

const Index = () => {
  const features = [
    { icon: Scan, title: "AI-Powered Instant Diagnosis" },
    { icon: FlaskConical, title: "Precision Remedy Engine" },
    { icon: Cloud, title: "Hyper-Local Weather Intelligence" },
    { icon: LayoutDashboard, title: "Interactive Health Dashboard" },
    { icon: Bell, title: "Early Warning System" },
    { icon: Map, title: "Field Mapping & NDVI Insights" },
  ];

  const benefits = [
    {
      title: "Prevent 20% Yield Loss",
      description:
        "Wheat diseases like Rust and Septoria can destroy up to 20% of global production annually. AgriLens detects these threats at the earliest stages when they are easiest to stop.",
    },
    {
      title: "Bridge the Expert Gap",
      description:
        "You don't need a degree in plant pathology—AgriLens acts as an on-call agronomist, providing 95% accurate diagnoses and expert-verified treatments instantly.",
    },
    {
      title: "Reduce Chemical Costs",
      description:
        "By pinpointing exactly where and what the disease is, you can move away from 'blanket spraying' and apply expensive fungicides only where they can make impact, saving you money and the soil.",
    },
    {
      title: "Stay Ahead of the Weather",
      description:
        "It doesn't just look at the crop; it looks at the sky. AgriLens predicts outbreaks by matching current humidity and temperature trends with known disease patterns.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div
          className="h-[500px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-primary-foreground">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Protect Your Yield with
                <span className="block text-agri-yellow">
                  AI-Powered Wheat Diagnostics
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
                Instantly detect wheat diseases, receive expert remedies, and
                monitor field health with the power of Agri Lens. Scan, diagnose,
                and treat your crops in seconds for a healthier harvest and
                higher profits.
              </p>
              <Link
                to="/model"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Start Scanning Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why AgriLens Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-4">Why AgriLens?</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Choosing AgriLens is about more than just identifying spots on a
            leaf; it's about modernizing how you protect your harvest. Here is
            why AgriLens is the essential tool for your farm:
          </p>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-sm border border-border"
              >
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                  • {benefit.title}:
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8">Reach out!!</h2>
          <div className="max-w-xl">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-card focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="btn-submit w-full md:w-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
