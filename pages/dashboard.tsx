import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCards from "@/components/dashboard/StatsCards";
import RequestsChart from "@/components/dashboard/RequestsChart";
import DataTransferChart from "@/components/dashboard/DataTransferChart";
import FunctionsChart from "@/components/dashboard/FunctionsChart";
import UsageChart from "@/components/dashboard/UsageChart";
import ActivityTable from "@/components/dashboard/ActivityTable";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <StatsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RequestsChart />
          <DataTransferChart />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FunctionsChart />
          <UsageChart />
        </div>
        
        <ActivityTable />
      </div>
    </DashboardLayout>
  );
}
