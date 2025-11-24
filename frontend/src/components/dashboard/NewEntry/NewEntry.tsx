import React from "react";
import { Modal } from "../../common/Modal";
import { NewShuntEntryForm } from "../NewEntryForm/NewShuntEntryForm";
import { useTranslation } from "react-i18next";

interface NewEntryProps {
  open: boolean;
  onClose: () => void;
}

const NewEntry: React.FC<NewEntryProps> = ({ open, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal open={open} onClose={onClose} title={t("addEntry.button")}>
      <NewShuntEntryForm />
    </Modal>
  );
};

export { NewEntry };
