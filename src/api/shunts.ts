import type { DashboardData } from "../types";
import { API_BASE_URL } from "../config";



const mockDashboardData: DashboardData[] = Array.from({ length: 26 }, (_, i) => ({
  user: {
    patientId: `U00${i}`,
    patientFirstName: `First${i}`,
    patientLastName: `Last${i}`,
    patientDOB: new Date(1990, i, i + 1),
  },
  activeShunt: {
    shuntModel: `Model${i}`,
    shuntSerialId: `SN-${1000 + i}`,
    shuntPlacementDate: new Date(2023, 0, i + 1),
    shuntRemovalDate: null,
    isActive: true,
  },
  shuntHistory: [
    {
      shuntModel: `Model${i - 1}`,
      shuntSerialId: `SN-${900 + i}`,
      shuntPlacementDate: new Date(2022, 0, i + 1),
      shuntRemovalDate: new Date(2022, 11, i + 1),
      isActive: false,
    },
  ],
}));

/** Simulated API call */

const fetchUserShuntData = async (): Promise<DashboardData[]> => {
  // Simulate a slight delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockDashboardData;
};

/** Real API call */

// const fetchUserShuntData = async (): Promise<DashboardData[]> => {
//   const response = await fetch(`${API_BASE_URL}/dashboard`);
//   if (response.status !== 200) {
//     throw new Error('Failed to fetch user and shunt data.');
//   }
//   const data: DashboardData[] = await response.json();
//   return data;
// };

export { fetchUserShuntData };