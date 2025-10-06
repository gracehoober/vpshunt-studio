import { useTranslation } from "react-i18next";

const ImageLibrary = () => {
  const { t } = useTranslation();
  return <p>{t("imageLibrary.placeholder")}</p>;
};

export { ImageLibrary };
