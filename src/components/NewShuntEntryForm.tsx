
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import { TextField, Button, Stack } from "@mui/material";

import { NewShuntEntrySchema } from "../schemas/newShuntEntrySchema";
import type { NewShuntEntrySchemaType } from "../schemas/newShuntEntrySchema";
import { yupResolver } from "@hookform/resolvers/yup";

const NewShuntEntry: React.FC = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<NewShuntEntrySchemaType>({
        resolver: yupResolver(NewShuntEntrySchema)
    });

    const onSubmit: SubmitHandler<NewShuntEntrySchemaType> = (data) => {
        console.log("Submitting form: ", data);
    };

    return (
        <Stack
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={styles.form}
            noValidate
        >
            <TextField
                label="Patient first name"
                {...register("patientFirstName")}
                error={!!errors.patientFirstName}
                helperText={errors.patientFirstName?.message}
            />
            <TextField
                label="Patient last name"
                {...register('patientLastName')}
                error={!!errors.patientLastName}
                helperText={errors.patientLastName?.message}
            />
            <TextField
                label="Patient ID"
                {...register('patientId')}
                error={!!errors.patientId}
                helperText={errors.patientId?.message}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Controller
                    name="patientDOB"
                    control={control}
                    render={({ field }) => (
                        <DatePicker
                            label="Patient date of birth"
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
                            label="Shunt placement date"
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
                label="Shunt model"
                {...register('shuntModel')}
                error={!!errors.shuntModel}
                helperText={errors.shuntModel?.message}
            />
            <TextField
                label="Shunt Serial ID"
                {...register('shuntSerialID')}
                error={!!errors.shuntSerialID}
                helperText={errors.shuntSerialID?.message}
            />
            <Button type="submit" sx={styles.button} variant="contained" >Add Entry</Button>
        </Stack>
    );
};

const styles = {
    form: {
        p: 4,
        m: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },
    button: {
        alignSelf: 'center',
        m: 2,
        color: 'background.dashboard'
    }
};

export { NewShuntEntry };