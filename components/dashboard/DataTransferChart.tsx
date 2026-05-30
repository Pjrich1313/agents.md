"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "12h ago", outgoing: 4.2, incoming: 3.1 },
  { time: "10h ago", outgoing: 4.8, incoming: 3.5 },
  { time: "8h ago", outgoing: 4.5, incoming: 3.2 },
  { time: "6h ago", outgoing: 5.1, incoming: 3.8 },
  { time: "4h ago", outgoing: 4.7, incoming: 3.4 },
  { time: "2h ago", outgoing: 4.3, incoming: 3.0 },
  { time: "Now", outgoing: 4.6, incoming: 3.3 },
];

export default function DataTransferChart() {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-medium">Fast Data Transfer</h3>
          <div className="flex items-center gap-4 mt-1">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm">Outgoing</span>
              <span className="text-lg font-semibold text-chart-1">102 GB</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm">Incoming</span>
              <span className="text-lg font-semibold text-chart-4">3 GB</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickFormatter={(value) => `${value} GB`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Area
              type="monotone"
              dataKey="outgoing"
              stroke="hsl(var(--chart-1))"
              fill="hsl(var(--chart-1))"
              fillOpacity={0.4}
            />
            <Area
              type="monotone"
              dataKey="incoming"
              stroke="hsl(var(--chart-4))"
              fill="hsl(var(--chart-4))"
              fillOpacity={0.4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
