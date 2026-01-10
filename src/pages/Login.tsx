import { useState } from "react";
import { Link } from "react-router-dom";
import { Wheat } from "lucide-react";
import farmerTech from "@/assets/farmer-tech-illustration.png";
import farmerField from "@/assets/farmer-field.jpg";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt", { phone, pin });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="gradient-header py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-full p-2">
              <Wheat className="h-6 w-6 text-agri-yellow" />
            </div>
            <span className="font-heading font-bold text-xl text-primary">
              AGRILENS
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-agri-mint py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary/10 rounded-3xl p-8 md:p-12">
              {/* Title */}
              <div className="text-center mb-8">
                <span className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-heading font-bold text-2xl shadow-lg">
                  Login
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Illustration */}
                <div className="hidden md:block">
                  <img
                    src={farmerTech}
                    alt="Farmer with technology"
                    className="rounded-2xl shadow-lg"
                  />
                </div>

                {/* Form */}
                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Ph.no
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 XX-XXX-XXXX"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        PIN
                      </label>
                      <input
                        type="password"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="6 - digit pin code"
                        maxLength={6}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <button type="submit" className="btn-submit w-full">
                      Login
                    </button>

                    <p className="text-center text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="text-primary font-semibold hover:underline"
                      >
                        Register
                      </Link>
                    </p>
                  </form>
                </div>

                {/* Photo */}
                <div className="hidden md:block">
                  <img
                    src={farmerField}
                    alt="Farmer in wheat field"
                    className="rounded-2xl shadow-lg h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
