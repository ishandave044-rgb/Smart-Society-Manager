import React from "react";
import { Text, ScrollView } from "react-native";
import MemberCard from "@/components/MemberCard";

const MemberUnPaidList = () => {
  return (
    <ScrollView className="flex-1 bg-green-50 p-5">
      {/* Header */}
      <Text className="text-2xl font-bold text-red-600 mb-6">
        Due Payment Member List 
      </Text>

      {/* Member Card */}
      <MemberCard />
      <MemberCard />
      <MemberCard />
      
    </ScrollView>
  );
};

export default MemberUnPaidList;
