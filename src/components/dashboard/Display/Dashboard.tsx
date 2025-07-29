import { Button, Box } from "@mui/material";
import { useState } from "react";
import { NewEntry } from "../NewEntry/NewEntry";
import React from "react";
import { useEffect } from "react";
import { fetchUserShuntData } from "../../../api/shunts";
import type { DashboardData } from "../types";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "patientID", headerName: "Patient ID", width: 90 },
  { field: "patientFirstName", headerName: "First Name", width: 140 },
  { field: "patientLastName", headerName: "Last Name", width: 140 },
  { field: "patientDOB", headerName: "Date of birth", width: 140 },
  { field: "shuntModel", headerName: "Active Shunt Model", width: 140 },
  { field: "shuntSerialID", headerName: "Shunt Serial Number", width: 160 },
  {
    field: "shuntPlacementDate",
    headerName: "Shunt Placement Date",
    width: 160,
  },
];

const Dashboard: React.FC = () => {
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);
  const [dashboardData, setDashboardData] = useState<DashboardData[]>([]);

  const fetchDashboardData = () => {
    fetchUserShuntData()
      .then((data) => setDashboardData(data))
      .catch((err) => console.log(err))
      .finally(() => {
        console.log("useEffect ran");
      });
  };

  useEffect(() => fetchDashboardData(), []);
  const displayData = dashboardData.length > 0 ? dashboardData : [];
  const rows = displayData.map((entry, id) => ({
    id: id,
    patientID: entry.user.patientId,
    patientFirstName: entry.user.patientFirstName,
    patientLastName: entry.user.patientLastName,
    patientDOB: entry.user.patientDOB?.toLocaleDateString(),
    shuntModel: entry.activeShunt?.shuntModel || "No active shunt recorded.",
    shuntSerialID: entry.activeShunt?.shuntSerialId,
    shuntPlacementDate:
      entry.activeShunt?.shuntPlacementDate?.toLocaleDateString(),
  }));

  return (
    <Box sx={styles.box}>
      <DataGrid
        columns={columns}
        rows={rows}
        pagination
        checkboxSelection
        disableRowSelectionOnClick
        sx={styles.grid}
      ></DataGrid>
      <Button
        variant="contained"
        sx={styles.button}
        onClick={() => setIsNewEntryOpen(true)}
      >
        Add new entry
      </Button>
      {isNewEntryOpen && (
        <NewEntry
          open={isNewEntryOpen}
          onClose={() => setIsNewEntryOpen(false)}
        />
      )}
    </Box>
  );
};

const styles = {
  box: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "background.paper",
    pt: "64px",
  },
  grid: {
    flexGrow: 1,
    mx: 6,
    my: 1,
    color: "background.default",
    text: "text.secondary",
    backgroundColor: "background.paper",
  },
  button: {
    alignSelf: "flex-end",
    p: 1,
    m: 4,
  },
};
export { Dashboard };
