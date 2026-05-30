import React, { useState } from "react";

const tabs = ["Paths", "Referrer", "Bot Name"];

const pathsData = [
  { path: "/api/chat", requests: "292K", trend: [40, 65, 45, 80, 55, 70, 60] },
  { path: "/api/auth/session", requests: "156K", trend: [30, 45, 55, 40, 60, 50, 45] },
  { path: "/api/users", requests: "89K", trend: [25, 35, 30, 45, 40, 35, 50] },
  { path: "/api/projects", requests: "67K", trend: [20, 30, 25, 35, 30, 40, 35] },
  { path: "/api/deployments", requests: "45K", trend: [15, 25, 20, 30, 25, 35, 28] },
];

function MiniSparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const height = 20;
  const width = 60;
  
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className="text-muted-foreground">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        points={points}
      />
    </svg>
  );
}

export default function ActivityTable() {
  const [activeTab, setActiveTab] = useState("Paths");
  const [search, setSearch] = useState("");

  const filteredData = pathsData.filter((item) =>
    item.path.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                activeTab === tab
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-background border border-border rounded-md pl-9 pr-3 py-1.5 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
              Request Path
            </th>
            <th className="text-right text-sm font-medium text-muted-foreground px-4 py-3">
              Requests
            </th>
            <th className="text-right text-sm font-medium text-muted-foreground px-4 py-3 w-24">
              Trend
            </th>
            <th className="w-10"></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr
              key={row.path}
              className="border-b border-border last:border-b-0 hover:bg-accent/50 transition-colors"
            >
              <td className="px-4 py-3 text-sm font-mono">{row.path}</td>
              <td className="px-4 py-3 text-sm text-right">{row.requests}</td>
              <td className="px-4 py-3 text-right">
                <MiniSparkline data={row.trend} />
              </td>
              <td className="px-4 py-3">
                <button className="text-muted-foreground hover:text-foreground">
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between px-4 py-3 border-t border-border">
        <button className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
          Show 10
          <ChevronDownIcon className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>1 of 5</span>
          <div className="flex items-center gap-1">
            <button className="p-1 hover:bg-accent rounded">
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-accent rounded">
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14L10.5 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4L6 8L10 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
