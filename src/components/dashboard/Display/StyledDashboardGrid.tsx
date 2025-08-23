import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

const StyledDashboardGrid = styled(DataGrid)(() => ({
  backgroundColor: "background.paper",
  width: "max-content",
  "& .MuiDataGrid-row:hover": {
    color: "text.secondary",
  },
}));

export { StyledDashboardGrid };
