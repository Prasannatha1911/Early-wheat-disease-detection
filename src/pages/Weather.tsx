import { Sun, Cloud, CloudRain, CloudSun } from "lucide-react";
import Layout from "@/components/Layout";

const Weather = () => {
  const hourlyForecast = [
    { time: "6AM", icon: CloudSun, temp: 18 },
    { time: "9AM", icon: Sun, temp: 22 },
    { time: "12PM", icon: Sun, temp: 26 },
    { time: "3PM", icon: CloudSun, temp: 28 },
    { time: "6PM", icon: Cloud, temp: 24 },
  ];

  const weeklyForecast = [
    { day: "Mon", icon: Sun, high: 28, low: 17 },
    { day: "Tue", icon: Sun, high: 29, low: 18 },
    { day: "Wed", icon: CloudSun, high: 27, low: 16 },
    { day: "Thu", icon: CloudRain, high: 24, low: 15 },
    { day: "Fri", icon: Cloud, high: 25, low: 16 },
  ];

  return (
    <Layout>
      <div className="py-8 min-h-[calc(100vh-64px)]">
        <div className="container mx-auto px-4">
          {/* Current Weather */}
          <div className="gradient-header rounded-2xl p-8 mb-8 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-foreground/80 font-medium mb-2">
                  Today
                </p>
                <h1 className="font-heading text-6xl font-bold text-primary">
                  24°C
                </h1>
                <p className="text-primary/80 mt-2">28°C / 17°C</p>
              </div>
              <div className="text-right">
                <Sun className="h-20 w-20 text-agri-amber" />
                <p className="text-primary font-medium mt-2">Sunny</p>
              </div>
            </div>
          </div>

          {/* Forecast Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hourly Forecast */}
            <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
              <h2 className="font-heading font-semibold text-lg text-primary mb-6">
                Hourly Forecast
              </h2>
              <div className="flex justify-between">
                {hourlyForecast.map((hour) => (
                  <div key={hour.time} className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      {hour.time}
                    </p>
                    <hour.icon className="h-8 w-8 mx-auto text-agri-amber mb-2" />
                    <p className="font-semibold text-foreground">
                      {hour.temp}°
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Forecast */}
            <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
              <h2 className="font-heading font-semibold text-lg text-primary mb-6">
                Weekly Forecast
              </h2>
              <div className="flex justify-between">
                {weeklyForecast.map((day) => (
                  <div key={day.day} className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      {day.day}
                    </p>
                    <day.icon className="h-8 w-8 mx-auto text-agri-amber mb-2" />
                    <p className="font-semibold text-foreground">
                      {day.high}°
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {day.low}°
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Disease Risk Alert */}
          <div className="mt-8 bg-warning/10 border border-warning rounded-xl p-6">
            <h3 className="font-heading font-semibold text-warning mb-2">
              ⚠️ Disease Risk Alert
            </h3>
            <p className="text-foreground">
              Based on current humidity (78%) and temperature trends, there is a
              moderate risk of Septoria leaf blotch outbreak in the next 48
              hours. Consider preventive fungicide application.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Weather;
