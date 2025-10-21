import React from "react";
import { Modal } from "../common/Modal";
import { SettingsContent } from "./SettingsContent";
import { useTranslation } from "react-i18next";

interface SettingsProps {
  open: boolean;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ open, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal open={open} onClose={onClose} title={t("settings.title")}>
      <SettingsContent />
    </Modal>
  );
};

export { Settings };
