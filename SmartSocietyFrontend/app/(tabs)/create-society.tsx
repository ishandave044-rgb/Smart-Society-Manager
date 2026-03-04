import { form_Error } from "@/constants/form-error";
import { Controller, useForm } from "react-hook-form";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

export default function CreateSociety() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  
  return (
    <ScrollView className="flex-1 bg-[#f5f5f5] p-[20]">

      {/* ================= HEADER ================= */}

      <Text className="text-2xl font-bold text-center my-10 mb-25 mt-15">Create New Society</Text>  

      {/* ================= PART 1 : SOCIETY ================= */}

      <Text className="text-2xl font-semibold mb-2 mx-15 color-[#333]">Society Details</Text>

      {/* {societyName} */}

      <Controller
        control={control}
        name="societyName"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Society Name"
          />
        )}
      />

      {errors.societyName && (
        <Text className="text-red-500">
          {typeof errors.societyName.message === "string" ? errors.societyName.message : ""}
        </Text>
      )}

      {/* societyCode */}

      <Controller
        control={control}
        name="societyCode"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Society Code"
          />
        )}
      />

      {errors.societyCode && (
        <Text className="text-red-500">
          {typeof errors.societyCode.message === "string" ? errors.societyCode.message : ""}
        </Text>
      )}
      
      {/* Address Details */}

      <Controller
        control={control}
        name="address"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Address"
          />
        )}
      />

      {errors.address && (
        <Text className="text-red-500">
          {typeof errors.address.message === "string" ? errors.address.message : ""}
        </Text>
      )}

      {/* city */}

      <Controller
        control={control}
        name="city"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="City"
          />
        )}
      />

      {errors.city && (
        <Text className="text-red-500">
          {typeof errors.city.message === "string" ? errors.city.message : ""}
        </Text>
      )}
    
    {/* State  */}

      <Controller
        control={control}
        name="state"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="State"
          />
        )}
      />

      {errors.state && (
        <Text className="text-red-500">
          {typeof errors.state.message === "string" ? errors.state.message : ""}
        </Text>
      )}  

      {/* Pincode  */}

      <Controller
        control={control}
        name="pincode"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Pincode"
          />
        )}
      />

      {errors.pincode && (
        <Text className="text-red-500">
          {typeof errors.pincode.message === "string" ? errors.pincode.message : ""}
        </Text>
      )}      

      {/* societyDescription  */}

      <Controller
        control={control}
        name="societyDescription"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Society Description"
          />
        )}
      />

      {errors.societyDescription && (
        <Text className="text-red-500">
          {typeof errors.societyDescription.message === "string" ? errors.societyDescription.message : ""}
        </Text>
      )}

      {/* ================= PART 2 : ADMIN ================= */}

      <Text className="text-2xl mb-2 font-semibold mx-15 color-[#333]">Admin Details</Text>

      {/* fullName  */}

      <Controller
        control={control}
        name="fullName"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Full Name"
          />
        )}
      />

      {errors.fullName && (
        <Text className="text-red-500">
          {typeof errors.fullName.message === "string" ? errors.fullName.message : ""}
        </Text>
      )}

    {/* Username  */}

      <Controller
        control={control}
        name="username"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Username"
          />
        )}
      />

      {errors.username && (
        <Text className="text-red-500">
          {typeof errors.username.message === "string" ? errors.username.message : ""}
        </Text>
      )}

      {/* {email} */}

      <Controller
        control={control}
        name="email"
        rules={{
          required: form_Error.email.required,
          pattern: {
            value: /^\S+@\S+$/i,
            message: form_Error.email.pattern,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Email"
          />
        )}
      />

      {errors.email && (
        <Text className="text-red-500">
          {typeof errors.email.message === "string" ? errors.email.message : ""}
        </Text>
      )}

      {/* Phone Number */}

      <Controller
        control={control}
        name="phone"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Phone Number"
          />
        )}
      />

      {errors.phone && (
        <Text className="text-red-500">
          {typeof errors.phone.message === "string" ? errors.phone.message : ""}
        </Text>
      )}

      {/* {password} */}

      <Controller
        control={control}
        name="password"
        rules={{
          required: form_Error.password.required,
          minLength: {
            value: 6,
            message: form_Error.password.minLength,
          },
          maxLength: {
            value: 10,
            message: form_Error.password.maxLength,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] mt-[2] bg-[#fff] pl-2"
            onBlur={onBlur}
            secureTextEntry
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Password"
          />
        )}
      />

      {errors.password && (
        <Text className="text-red-500">
          {typeof errors.password.message === "string"
            ? errors.password.message
            : ""}
        </Text>
      )}
  
      {/* bio  */}

      <Controller
        control={control}
        name="bio"
        rules={{
          required: "required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Bio"
          />
        )}
      />

      {errors.bio && (
        <Text className="text-red-500">
          {typeof errors.bio.message === "string" ? errors.bio.message : ""}
        </Text>
      )}
  
      

      {/* ================= BUTTON ================= */}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-[#4CAF50] p-[10] rounded items-center mt-4 w-full"
      >
        <Text className="text-[#fff] text-lg font-bold">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="text-[#fff] text-3xl font-bold mb-5 w-full items-center"
        onPress={() => router.back()}
      >
        <Text className="mt-[15] mb-4 items-center text-lg text-[#918888]">
          Back
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
