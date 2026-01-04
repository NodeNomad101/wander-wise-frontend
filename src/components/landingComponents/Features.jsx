import React from "react";
import { BanknoteArrowDown, History, Map, NotebookPen } from "lucide-react";
import FeaturesCard from "../common/FeaturesCard";

const featuresData = [
  {
    title: "Trip Planning",
    description:
      "Plan and organize complete travel itineraries including flights, hotels, and activities.",
    icon: Map,
  },
  {
    title: "Booking Management",
    description:
      "Manage all travel bookings in one place with real-time updates.",
    icon: History,
  },
  {
    title: "Expense Tracking",
    description: "Track travel expenses, receipts, and budgets with ease.",
    icon: BanknoteArrowDown,
  },
  {
    title: "Real-Time Alerts",
    description:
      "Get instant notifications for delays, changes, and important travel updates.",
    icon: NotebookPen,
  },
];

const Features = () => {
  return (
    <section className="px-20 py-20">
      {/* heading */}
      <div>
        <h2 className="text-4xl font-bold text-center mb-4">Features</h2>
        <p className="text-center text-gray-600">
          Discover the power of going to Manang Mustang on a dirt bike, full of
          fun and passion
        </p>
      </div>

      {/* features */}
      <div className="grid grid-cols-4 gap-6 mt-10">
        {featuresData.map((feature, index) => {
          return (
            <FeaturesCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Features;