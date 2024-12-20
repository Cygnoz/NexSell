//import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
import Input from "../../../../components/form/Input";
//import Select from "../../../components/form/Select";
import Button from "../../../../components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Select from "../../../../components/form/Select";
//import CustomPhoneInput from "../../../components/form/CustomPhone";
//import InputPasswordEye from "../../../components/form/InputPasswordEye";

type Props = {
    onClose: () => void;
};

interface ExtentTrialData {
   duration:string;
   date?:string


}

const validationSchema = Yup.object({
    duration: Yup.string().required("duration is required"),
});

function ExtentTrail({ onClose }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },


    } = useForm<ExtentTrialData>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<ExtentTrialData> = (data) => {
        console.log("Form Data:", data);
    };




    return (
        <div className="p-2 bg-white rounded shadow-md space-y-2">
            <div className="p-2 space-y-1 text-[#4B5C79] py-2 w-[100%]">
                <div className="flex justify-between p-2">
                    <div>
                        <h3 className="text-[#303F58] font-bold text-lg">Extent Trail</h3>
                        <p className="text-[11px] text-[#8F99A9] mt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt.
                        </p>
                    </div>
                    <p onClick={onClose} className="text-3xl cursor-pointer">
                        &times;
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >

                        <div className=" my-2">
                            <div className="mx-3 gap-4 space-y-2 max-w-xl">

                                 
                            <Select
                                    label="Duration"
                                    placeholder="Select Duration"
                                    error={errors.duration?.message}
                                    options={[
                                        { value: "name", label: "7 days" },
                                        { value: "name", label: "10 days" },
                                        { value: "name", label: "14 days" },
                                    ]}
                                    {...register("duration")}
                                />


                                <Input
                                    label="New End Date"
                                    type="date"
                                    placeholder="Enter Name"
                                    error={errors.date?.message}
                                    {...register("date")}

                                />
                               



                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-end gap-2 mt-3 pb-2 me-3">
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
                            update
                        </Button>
                    </div>
                </form>

            </div>

        </div>

    );
}

export default ExtentTrail;
