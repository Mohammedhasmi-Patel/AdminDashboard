import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StateCard from "../components/common/StateCard";
import { BarChart, ShoppingBag, Users, Zap } from "lucide-react";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 ">
      <Header title="Overview" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard
            name="Total Sales"
            icon={Zap}
            value="1,234"
            color="#885cf1"
          />

          <StateCard
            name="Total Users"
            icon={Users}
            value="1,234"
            color="#6366f1"
          />

          <StateCard
            name="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#ec4899"
          />

          <StateCard
            name="Conversion Rate"
            icon={BarChart}
            value="1.23%"
            color="#100981"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default OverviewPage;
