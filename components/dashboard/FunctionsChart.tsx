"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "12h ago", error: 0.3, timeout: 0.1 },
  { time: "10h ago", error: 0.2, timeout: 0.05 },
  { time: "8h ago", error: 0.25, timeout: 0.08 },
  { time: "6h ago", error: 0.15, timeout: 0.03 },
  { time: "4h ago", error: 0.2, timeout: 0.06 },
  { time: "2h ago", error: 0.35, timeout: 0.12 },
  { time: "Now", error: 0.2, timeout: 0.08 },
];

export default function FunctionsChart() {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-medium">Functions</h3>
          <div className="flex items-center gap-6 mt-2">
            <div>
              <span className="text-sm text-muted-foreground">Error</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-destructive" />
                <span className="font-semibold">0.2%</span>
              </div>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Timeout</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-chart-2" />
                <span className="font-semibold">{"<0.1%"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
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
              tickFormatter={(value) => `${value}%`}
              domain={[0, 0.5]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
              formatter={(value: number) => [`${value}%`]}
            />
            <Line
              type="monotone"
              dataKey="error"
              stroke="hsl(var(--destructive))"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="timeout"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
