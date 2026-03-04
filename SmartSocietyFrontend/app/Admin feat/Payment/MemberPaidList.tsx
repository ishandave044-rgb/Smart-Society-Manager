import MemberCard from "@/components/MemberCard";
import React from "react";
import { ScrollView, Text } from "react-native";

const MemberPaidList = () => {
  return (
    <ScrollView className="flex-1 bg-green-50 p-5">
      {/* Header */}
      <Text className="text-2xl font-bold text-green-800 mb-6">
        Paid Member List
      </Text>

      {/* Member Card */}
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </ScrollView>
  );
};

export default MemberPaidList;
