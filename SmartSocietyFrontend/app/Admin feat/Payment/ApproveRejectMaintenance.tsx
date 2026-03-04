import MaintenanceCard from "@/components/MaintenanceCard";
import React from "react";
import { ScrollView, Text } from "react-native";

export default function ApproveRejectMaintenance() {
  return (
    <ScrollView className="flex-1 bg-green-50 p-5">
      {/* Header */}
      <Text className="text-2xl font-bold text-green-800 mb-6">
        Maintenance Approval
      </Text>

      {/* Maintenance Card */}

      <MaintenanceCard />
    </ScrollView>
  );
}
