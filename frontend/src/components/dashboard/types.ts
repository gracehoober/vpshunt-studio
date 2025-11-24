export type User = {
  patientFirstName: string;
  patientLastName: string;
  patientId: string;
  patientDOB: Date | null;
};

export type Shunt = {
  shuntModel?: string;
  shuntSerialId?: string;
  shuntPlacementDate?: Date | null;
  shuntRemovalDate?: Date | null;
  isActive?: boolean;
};

export type DashboardData = {
  user: User;
  activeShunt: Shunt | null;
  shuntHistory: Shunt[];
};

export type Rows = Array<User & Shunt>;
