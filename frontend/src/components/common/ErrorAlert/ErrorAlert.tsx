import { Alert, Button } from "@mui/material";
import React from "react";

interface ErrorAlertProps {
  error: string | null;
  onDismiss: () => void;
  onRetry?: () => void;
  retryButtonText?: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({
  error,
  onDismiss,
  onRetry,
  retryButtonText = "Retry",
}) => {
  if (!error) return null;

  return (
    <Alert
      severity="error"
      onClose={onDismiss}
      action={
        onRetry && (
          <Button color="inherit" size="small" onClick={onRetry}>
            {retryButtonText}
          </Button>
        )
      }
      sx={{ mb: 2 }}
    >
      {error}
    </Alert>
  );
};

export { ErrorAlert };
