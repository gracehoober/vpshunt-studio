import { TextField, Button, Stack } from "@mui/material";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { InferType } from "yup";
import { object, string, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const PatientSchema = object({
  name: string().required("Patient name is required"),
  diagnosis: string().required(),
  age: number().required(),
});

type PatientSchemaType = InferType<typeof PatientSchema>;

const PatientForm: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PatientSchemaType>({
    resolver: yupResolver(PatientSchema),
  });
  const onSubmit: SubmitHandler<PatientSchemaType> = (data) => {
    console.log("submitting form...", data);
  };

  return (
    <Stack component="form" onSubmit={onSubmit} noValidate>
      <TextField
        label="Patient name"
        {...register("patientName")}
        error={!!errors.patientName}
        helperText={errors.patientName?.message}
      >
        Patient name
      </TextField>
      <TextField>Diagnosis</TextField>
      <Button type="submit"></Button>
    </Stack>
  );
};
