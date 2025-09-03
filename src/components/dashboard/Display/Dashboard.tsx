import { Button, Box } from "@mui/material";
import { useState } from "react";
import { NewEntry } from "../NewEntry/NewEntry";
import React from "react";
import { useEffect } from "react";
import { fetchUserShuntData } from "../../../api/shunts";
import type { DashboardData } from "../types";
import { createColumns } from "../utils";
import type { Rows } from "../types";
import { StyledDashboardGrid } from "./StyledDashboardGrid";
import { useTranslation } from "react-i18next";

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
  const rows: Rows = displayData.map(({ user, activeShunt }, id) => ({
    id: id,
    ...user,
    ...activeShunt,
  }));
  const columns = createColumns(rows);

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
    alignSelf: "flex-center",
    p: 1,
    m: 4,
  },
};
export { Dashboard };
