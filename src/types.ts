
export type NewShuntForm = {
  patientFirstName: string;
  patientLastName: string;
  patientId: string;
  patientDOB: Date | null;
  shuntModel: string;
  shuntSerialId: string;
  shuntPlacementDate: Date | null;
};