import MemberNoticeCard from "@/components/MemberNoticeCard";
import React from "react";
import { ScrollView, Text } from "react-native";

const MemberNoticesPage = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-5">
        Society Notices
      </Text>

      {/* Notice Card 1 */}
      <MemberNoticeCard />
      <MemberNoticeCard />
      <MemberNoticeCard />
    </ScrollView>
  );
};

export default MemberNoticesPage;
