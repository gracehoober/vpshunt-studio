import { Button, Box, IconButton, LinearProgress, Stack } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { NewEntry } from "../NewEntry/NewEntry";
import React from "react";
import { fetchUserShuntData } from "../../../api/shunts";
import type { DashboardData } from "../types";
import { createColumns } from "../utils";
import type { Rows } from "../types";
import { StyledDashboardGrid } from "./StyledDashboardGrid";
import { useTranslation } from "react-i18next";
import RefreshIcon from "@mui/icons-material/Refresh";
import { ErrorAlert } from "../../common/ErrorAlert";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);
  const [dashboardData, setDashboardData] = useState<DashboardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = useCallback(() => {
    setLoading(true);
    setError(null);

    fetchUserShuntData()
      .then((data) => {
        setDashboardData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(t("dashboard.error"));
        setLoading(false);
        console.error("Failed to fetch dashboard data:", err);
      });
  }, [t]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const rows: Rows = dashboardData.map(({ user, activeShunt }, id) => ({
    id: id,
    ...user,
    ...activeShunt,
  }));
  const columns = createColumns(rows);

  return (
    <Box sx={styles.box}>
      {/* Error Alert Banner */}
      <ErrorAlert
        error={error}
        onDismiss={() => setError(null)}
        onRetry={fetchDashboardData}
        retryButtonText="Retry"
      />

      {/* Loading Progress Bar */}
      {loading && <LinearProgress sx={{ mb: 2 }} />}

      {/* Action Buttons */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ mb: 2, mt: 2 }}
      >
        <Button
          variant="contained"
          sx={styles.button}
          onClick={() => setIsNewEntryOpen(true)}
        >
          {t("addEntry.button")}
        </Button>
        <IconButton
          onClick={fetchDashboardData}
          disabled={loading}
          sx={styles.refreshButton}
          aria-label="refresh data"
        >
          <RefreshIcon />
        </IconButton>
      </Stack>

      {/* Data Grid */}
      <StyledDashboardGrid
        columns={columns}
        rows={rows}
        pagination
        checkboxSelection
        disableRowSelectionOnClick
        loading={loading}
      />

      {/* New Entry Modal */}
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
    px: 2,
  },
  button: {
    p: 1,
  },
  refreshButton: {
    border: "1px solid",
    borderColor: "primary.main",
  },
};
export { Dashboard };
