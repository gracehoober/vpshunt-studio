import { Button, Box } from "@mui/material";
import { useState } from "react";
import { NewEntry } from "../NewEntry/NewEntry";
import React from "react";
import { useEffect } from "react";
import { fetchUserShuntData } from "../../../api/shunts";
import type { DashboardData } from "../types";
import type { GridColDef } from "@mui/x-data-grid";
import type { Rows } from "../types";
import { StyledDashboardGrid } from "./StyledDashboardGrid";
import { useTranslation } from "react-i18next";
import { computeTextWidth } from "../utils";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
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
  const rows: Rows = displayData.map(({ user, activeShunt }) => ({
    ...user,
    ...activeShunt,
  }));

  const columns: GridColDef[] = [
    {
      field: "patientID",
      headerName: "Patient ID",
      width: Math.max(
        computeTextWidth("Patient ID") + 32, // header
        ...rows.map((r) => computeTextWidth(r.patientFirstName) + 32), // padding
      ),
    },
    {
      field: "patientFirstName",
      headerName: "First Name",
      width: Math.max(
        computeTextWidth("First Name") + 32, // header
        ...rows.map((r) => computeTextWidth(r.patientFirstName) + 32), // padding
      ),
    },
    {
      field: "patientLastName",
      headerName: "Last Name",
      width: Math.max(
        computeTextWidth("Last Name") + 32, // header
        ...rows.map((r) => computeTextWidth(r.patientFirstName) + 32), // padding
      ),
    },
    {
      field: "patientDOB",
      headerName: "Date of birth",
      width: Math.max(
        computeTextWidth("Date of birth") + 32, // header
        ...rows.map((r) => computeTextWidth(r.patientFirstName) + 32), // padding
      ),
    },
    {
      field: "shuntModel",
      headerName: "Active Model",
      width:
    },
    {
      field: "shuntSerialID",
      headerName: "Serial Number",
      width: Math.max(
        computeTextWidth("Serial Number") + 32, // header
        ...rows.map((r) => computeTextWidth(r.patientFirstName) + 32), // padding
      ),
    },
    {
      field: "shuntPlacementDate",
      headerName: "Placement Date",
      width: Math.max(
        computeTextWidth("Placement Date") + 32, // header
        ...rows.map((r) => computeTextWidth(r.patientFirstName) + 32), // padding
      ),
    },
  ];

  return (
    <Box sx={styles.box}>
      <Button
        variant="contained"
        sx={styles.button}
        onClick={() => setIsNewEntryOpen(true)}
      >
        {t("addEntry.button")}
      </Button>
      <StyledDashboardGrid
        columns={columns}
        rows={rows}
        pagination
        checkboxSelection
        disableRowSelectionOnClick
      ></StyledDashboardGrid>
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
    overflowX: "auto",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "background.paper",
    pt: "64px",
  },
  button: {
    alignSelf: "flex-end",
    p: 1,
    m: 4,
  },
};
export { Dashboard };
