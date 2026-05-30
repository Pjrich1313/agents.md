import React from "react";

const stats = [
  {
    label: "Total Requests",
    value: "289K",
    change: "+12.5%",
    changeType: "positive" as const,
  },
  {
    label: "Data Transfer",
    value: "105 GB",
    change: "+8.2%",
    changeType: "positive" as const,
  },
  {
    label: "Avg Response",
    value: "352.7 kB",
    change: "-3.1%",
    changeType: "negative" as const,
  },
  {
    label: "Error Rate",
    value: "0.2%",
    change: "-0.05%",
    changeType: "positive" as const,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card border border-border rounded-lg p-4"
        >
          <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold">{stat.value}</span>
            <span
              className={`text-xs ${
                stat.changeType === "positive"
                  ? "text-success"
                  : "text-destructive"
              }`}
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
