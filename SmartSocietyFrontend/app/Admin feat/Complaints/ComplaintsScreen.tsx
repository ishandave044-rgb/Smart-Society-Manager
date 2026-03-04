import ComplaintCard from "@/components/ComplaintCard";
import React from "react";
import { View, TouchableOpacity } from "react-native";

const ComplaintsScreen = () => {
  const complaintData = [
    {
      id: "1",
      flat: "B-204",
      name: "Anand Rathore",
      issue: "Lift not working",
      date: "12 Aug 2024",
      status: "Pending",
    },
    {
      id: "1",
      flat: "B-204",
      name: "Anand Rathore",
      issue: "Lift not working",
      date: "12 Aug 2024",
      status: "Pending",
    },
    {
      id: "1",
      flat: "B-204",
      name: "Anand Rathore",
      issue: "Lift not working",
      date: "12 Aug 2024",
      status: "Pending",
    },
  ];

  return (
    <View className="h-full w-full bg-green-50 px-5 py-5">
        {
          complaintData.map((complaint, index) =>( 
            <TouchableOpacity 
              activeOpacity={0.4}
            key={index}>
              <ComplaintCard complaint={complaint} />
            </TouchableOpacity>
          ))
        }
    </View>
  );
};

export default ComplaintsScreen;
