import React, { useEffect, useRef } from "react";
import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CustomPhoneInput from "../../../components/form/CustomPhone";
import InputPasswordEye from "../../../components/form/InputPasswordEye";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";
import toast from "react-hot-toast";
import Trash from "../../../assets/icons/Trash";
import { Role } from "../../../types/rolePermissions";
import { UserData } from "../../../Interfaces/User";

type Props = {
  onClose: () => void;
  editId?: any;
};

function UserForm({ onClose, editId }: Props) {
  const addValidationSchema = Yup.object().shape({
    userName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNo: Yup.string().optional(), // Optional field, no need to make this required
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    role: Yup.string().required("Role is required"),
  });

  const editValidationSchema = Yup.object().shape({
    userName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNo: Yup.string().optional(), // Optional field, no need to make this required
    role: Yup.string().required("Role is required"),
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { request: addUser } = useApi("post", 3002);
  const { request: editUser } = useApi("put", 3002);
  const { request: getAUser } = useApi("get", 3002);
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    watch,
    setValue,
  } = useForm<UserData>({
    resolver: yupResolver(editId ? editValidationSchema : addValidationSchema),
  });
  console.log(editId);
  const setFormValues = (data: UserData) => {
    Object.keys(data).forEach((key) => {
      setValue(key as keyof UserData, data[key as keyof UserData]);
    });
  };

  const getOneUser = async () => {
    try {
      const { response, error } = await getAUser(`${endPoints.USER}/${editId}`);
      if (response && !error) {
        const res = response.data;
        console.log(res);

        setFormValues(res);
      }
    } catch (err) {
      console.log("Err", err);
    }
  };

  const onSubmit: SubmitHandler<UserData> = async (data, event) => {
    event?.preventDefault();
    console.log("Form Data:", data);
    try {
      const fun = editId ? editUser : addUser;
      let response, error;

      if (editId) {
        ({ response, error } = await fun(`${endPoints.USER}/${editId}`, data));
      } else {
        ({ response, error } = await fun(endPoints.USER, data));
      }

      console.log(response);
      console.log(error);

      if (response && !error) {
        toast.success(response.data.message);
        onClose();
      } else {
        toast.error(error.response.data.message);
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("An unexpected error occurred.");
    }
  };

  const addRoles: { label: string; value: Role }[] = [
    { label: "Super Admin", value: "Super Admin" },
    { label: "Sales Admin", value: "Sales Admin" },
    { label: "Support Admin", value: "Support Admin" },
  ];
  const editRoles: { label: string; value: Role }[] = [
    { label: "Super Admin", value: "Super Admin" },
    { label: "Sales Admin", value: "Sales Admin" },
    { label: "Support Admin", value: "Support Admin" },
    { label: "Region Manager", value: "Region Manager" },
    { label: "Area Manager", value: "Area Manager" },
    { label: "BDAs", value: "BDAs" },
    { label: "Supervisor", value: "Supervisor" },
    { label: "Support Agent", value: "Support Agent" },
  ];

  const handleInputChange = (field: keyof UserData) => {
    clearErrors(field); // Clear the error for the specific field when the user starts typing
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setValue("userImage", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click propagation

    // Clear the leadImage value
    setValue("userImage", "");

    // Reset the file input value
    if (fileInputRef?.current) {
      fileInputRef.current.value = ""; // Clear the input field
    }
  };

  useEffect(() => {
    getOneUser();
  }, []);

  return (
    <div className="p-5 space-y-2 text-[#4B5C79] py-2">
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg">
            {editId ? "Edit" : "Create"} User
          </h3>
          <p className="text-[11px] text-[#8F99A9] mt-1">
            {`Use this form to ${
              editId ? "edit an existing user" : "add a new user"
            } details. Please fill in the required information`}
          </p>
        </div>
        <p onClick={onClose} className="text-3xl cursor-pointer">
          &times;
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12">
          <div className="col-span-3 ">
            <div className="flex justify-center items-center">
              <label
                className="cursor-pointer text-center"
                htmlFor="file-upload"
              >
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <ImagePlaceHolder uploadedImage={watch("userImage")} />
              </label>
            </div>

            {watch("userImage") && (
              <div
                onClick={handleRemoveImage} // Remove image handler
                className="flex justify-center items-center "
              >
                <div className="border-2 cursor-pointer rounded-full h-7 w-7 flex justify-center items-center -ms-2 mt-2">
                  <Trash color="red" size={16} />
                </div>
              </div>
            )}
          </div>
          <div className="col-span-9 my-2">
            <div className="mx-3 gap-4 space-y-2 max-w-lg">
              <Input
                label="Full Name"
                required
                type="text"
                placeholder="Enter Full Name"
                error={errors.userName?.message}
                {...register("userName")}
                onChange={() => handleInputChange("userName")}
              />
              <Input
                label="Email Address"
                required
                type="email"
                placeholder="Enter Email"
                error={errors.email?.message}
                {...register("email")}
                onChange={() => handleInputChange("email")}
              />
              <CustomPhoneInput
                label="Phone Number"
                required
                name="phoneNo"
                error={errors.phoneNo?.message}
                placeholder="Enter phone number"
                value={watch("phoneNo")} // Watch phone field for changes
                onChange={(value) => {
                  handleInputChange("phoneNo");
                  setValue("phoneNo", value); // Update the value of the phone field in React Hook Form
                }}
              />
              {!editId && (
                <>
                  <InputPasswordEye
                    label="Password"
                    required
                    placeholder="Enter your password"
                    error={errors.password?.message}
                    {...register("password")}
                  />
                  <InputPasswordEye
                    label="Confirm Password"
                    required
                    placeholder="Confirm your password"
                    error={errors.confirmPassword?.message}
                    {...register("confirmPassword")}
                  />
                </>
              )}
              <Select
                required
                label="Role"
                placeholder={!editId ? "Select Role" : undefined}
                options={editId ? editRoles : addRoles}
                error={errors.role?.message}
                {...register("role")}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-3 pb-2">
          <Button
            variant="tertiary"
            className="h-8 text-sm border rounded-lg"
            size="lg"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="h-8 text-sm border rounded-lg"
            size="lg"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
