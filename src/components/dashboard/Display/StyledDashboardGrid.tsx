import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

const StyledDashboardGrid = styled(DataGrid)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "max-content",
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[200]}`,
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.grey[50],
    color: theme.palette.text.primary,
    fontWeight: 600,
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  "& .MuiDataGrid-cell": {
    borderBottom: `1px solid ${theme.palette.grey[100]}`,
    color: theme.palette.text.primary,
  },
  "& .MuiDataGrid-row": {
    "&:hover": {
      backgroundColor: theme.palette.primary.light + "10", // 10% opacity
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.light + "20", // 20% opacity
      "&:hover": {
        backgroundColor: theme.palette.primary.light + "30", // 30% opacity
      },
    },
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: `2px solid ${theme.palette.grey[200]}`,
  },
  "& .MuiCheckbox-root": {
    color: theme.palette.primary.main,
    "&.Mui-checked": {
      color: theme.palette.primary.main,
    },
  },
}));

export { StyledDashboardGrid };
