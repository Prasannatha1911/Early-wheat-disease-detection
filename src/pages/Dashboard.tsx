import Layout from "@/components/Layout";
import MetricCircle from "@/components/MetricCircle";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Dashboard = () => {
  const comparisonData = [
    { month: "Nov 2024", prediction: 30, risk: 20 },
    { month: "Dec 2024", prediction: 45, risk: 65 },
  ];

  return (
    <Layout>
      <div className="py-8 bg-agri-mint min-h-[calc(100vh-64px)]">
        <div className="container mx-auto px-4">
          <h1 className="section-title mb-8">Wheat disease detection model</h1>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-8 shadow-md border border-border flex flex-col items-center">
              <MetricCircle
                value={75}
                label="Health Index"
                type="success"
                size="lg"
              />
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-md border border-border flex flex-col items-center">
              <MetricCircle
                value={95}
                label="Confidence Level"
                type="success"
                size="lg"
              />
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-md border border-border flex flex-col items-center">
              <MetricCircle
                value={65}
                label="Risk Level"
                type="danger"
                size="lg"
              />
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
            <h2 className="font-heading font-semibold text-xl text-primary mb-6">
              Month-wise Comparison
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="prediction"
                    name="Prediction"
                    fill="hsl(120, 40%, 35%)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="risk"
                    name="Risk"
                    fill="hsl(0, 70%, 50%)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {[
              { label: "Total Scans", value: "156" },
              { label: "Diseases Detected", value: "23" },
              { label: "Fields Monitored", value: "8" },
              { label: "Success Rate", value: "94%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6 shadow-md border border-border text-center"
              >
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
