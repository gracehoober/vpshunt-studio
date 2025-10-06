import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { TextField, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import { NewShuntEntrySchema } from "../schemas/NewShuntEntrySchema";
import type { NewShuntEntrySchemaType } from "../schemas/NewShuntEntrySchema";
import { yupResolver } from "@hookform/resolvers/yup";

const NewShuntEntryForm: React.FC = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewShuntEntrySchemaType>({
    resolver: yupResolver(NewShuntEntrySchema),
  });

  const onSubmit: SubmitHandler<NewShuntEntrySchemaType> = () => {
    // TODO: Send data to API endpoint
    // For now, this is a placeholder - form validation is working
  };
  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={styles.form}
      noValidate
    >
      <TextField
        label={t("forms.labels.patientFirstName")}
        {...register("patientFirstName")}
        error={!!errors.patientFirstName}
        helperText={errors.patientFirstName?.message}
      />
      <TextField
        label={t("forms.labels.patientLastName")}
        {...register("patientLastName")}
        error={!!errors.patientLastName}
        helperText={errors.patientLastName?.message}
      />
      <TextField
        label={t("forms.labels.patientId")}
        {...register("patientId")}
        error={!!errors.patientId}
        helperText={errors.patientId?.message}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          name="patientDOB"
          control={control}
          render={({ field }) => (
            <DatePicker
              label={t("forms.labels.patientDOB")}
              {...field}
              value={field.value ?? null}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: !!errors.patientDOB,
                  helperText: errors.patientDOB?.message,
                },
              }}
            />
          )}
        />
        <Controller
          name="shuntPlacementDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              label={t("forms.labels.shuntPlacementDate")}
              {...field}
              value={field.value ?? null}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: !!errors.shuntPlacementDate,
                  helperText: errors.shuntPlacementDate?.message,
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
      <TextField
        label={t("forms.labels.shuntModel")}
        {...register("shuntModel")}
        error={!!errors.shuntModel}
        helperText={errors.shuntModel?.message}
      />
      <TextField
        label={t("forms.labels.shuntSerialId")}
        {...register("shuntSerialID")}
        error={!!errors.shuntSerialID}
        helperText={errors.shuntSerialID?.message}
      />
      <Button type="submit" sx={styles.button} variant="contained">
        {t("addEntry.add")}
      </Button>
    </Stack>
  );
};

const styles = {
  form: {
    p: 4,
    m: 1,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  button: {
    alignSelf: "center",
    m: 2,
    color: "background.dashboard",
  },
};

export { NewShuntEntryForm };
