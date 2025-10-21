import React from "react";
import { Box, Modal as MuiModal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  return (
    <MuiModal open={open} onClose={onClose} sx={styles.modal}>
      <Box sx={styles.box}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={styles.closeButton}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={styles.headerWrapper} position="relative">
          <Typography
            sx={styles.title}
            variant="h4"
            component="h2"
            align="center"
          >
            {title}
          </Typography>
        </Box>
        {children}
      </Box>
    </MuiModal>
  );
};

const styles = {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    position: "relative",
    bgcolor: "background.paper",
    width: 400,
    boxShadow: 6,
    p: 4,
    borderRadius: 3,
    border: "1px solid",
    borderColor: "grey.200",
  },
  headerWrapper: {
    position: "relative",
    textAlign: "center",
    mb: 2,
  },
  title: {
    m: 2,
    color: "primary.main",
  },
  closeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    color: "text.secondary",
    "&:hover": {
      color: "primary.main",
      bgcolor: "primary.light",
      opacity: 0.1,
    },
  },
};

export { Modal };
