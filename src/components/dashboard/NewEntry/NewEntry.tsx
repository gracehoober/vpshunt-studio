import React from "react";
import { Box, Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { NewShuntEntryForm } from "../NewEntryForm/NewShuntEntryForm";
import { useTranslation } from "react-i18next";

interface NewEntryProps {
  open: boolean;
  onClose: () => void;
}

const NewEntry: React.FC<NewEntryProps> = ({ open, onClose }) => {
  const { t } = useTranslation();
  return (
    <>
      <Modal open={open} onClose={onClose} sx={styles.modal}>
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
              {t("addEntry.button")}
            </Typography>
          </Box>
          <NewShuntEntryForm />
        </Box>
      </Modal>
    </>
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
    bgcolor: "background.default",
    width: 400,
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  },
  headerWrapper: {
    position: "relative",
    textAlign: "center",
    mb: 2,
  },
  title: {
    m: 2,
  },
  closeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    borderColor: "primary.main",
    borderRadius: "50%",
    p: 1,
  },
};

export { NewEntry };
