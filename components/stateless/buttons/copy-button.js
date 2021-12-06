import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button, IconButton, Tooltip } from "@mui/material";

const CopyButton = ({ onClick, copied }) => {
  return (
    <Tooltip title="copied" open={copied} placement="right">
      <Button onClick={onClick} aria-label="copy" variant="text" startIcon={<ContentCopyIcon />} sx={{ m: 2 }}>
        Copy URL
      </Button>
    </Tooltip>
  );
};

export default CopyButton;
