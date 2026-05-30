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
  { time: "12h ago", consumed: 180, saved: 95 },
  { time: "10h ago", consumed: 165, saved: 88 },
  { time: "8h ago", consumed: 190, saved: 102 },
  { time: "6h ago", consumed: 175, saved: 92 },
  { time: "4h ago", consumed: 155, saved: 85 },
  { time: "2h ago", consumed: 145, saved: 78 },
  { time: "Now", consumed: 160, saved: 88 },
];

export default function UsageChart() {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-medium">GB-Hours</h3>
          <div className="flex items-center gap-6 mt-2">
            <div>
              <span className="text-sm text-muted-foreground">Consumed</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-chart-1" />
                <span className="font-semibold">21,871 GB-hrs</span>
              </div>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Saved</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="font-semibold">11,013 GB-hrs</span>
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
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Line
              type="monotone"
              dataKey="consumed"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="saved"
              stroke="hsl(var(--success))"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
