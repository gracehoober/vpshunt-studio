import { date, object, string } from "yup";
import type { InferType } from "yup";
import i18n from "../../../i18n";

const NewShuntEntrySchema = object({
  patientFirstName: string().required(i18n.t("forms.validation.patientFirstName")),
  patientLastName: string().required(i18n.t("forms.validation.patientLastName")),
  patientId: string().required(i18n.t("forms.validation.patientId")),
  patientDOB: date().required(i18n.t("forms.validation.patientDOB")),
  shuntPlacementDate: date().required(i18n.t("forms.validation.shuntPlacementDate")),
  shuntModel: string().required(i18n.t("forms.validation.shuntModel")),
  shuntSerialID: string().required(i18n.t("forms.validation.shuntSerialId")),
});

export type NewShuntEntrySchemaType = InferType<typeof NewShuntEntrySchema>;

export { NewShuntEntrySchema };
