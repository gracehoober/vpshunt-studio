import { date, object, string } from 'yup';
import type { InferType } from 'yup';

const NewShuntEntrySchema = object({
    patientFirstName: string().required('Patient first name is required.'),
    patientLastName: string().required('Patient last name is required.'),
    patientId: string().required('Patient ID is required.'),
    patientDOB: date().required('Patient date of birth is required.'),
    shuntPlacementDate: date().required('Placement date is required.'),
    shuntModel: string().required('Shunt model is required.'),
    shuntSerialID: string().required('Shunt ID is required.')
});

export type NewShuntEntrySchemaType = InferType<typeof NewShuntEntrySchema>;

export { NewShuntEntrySchema };