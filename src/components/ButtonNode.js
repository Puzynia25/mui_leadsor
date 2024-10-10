import { Box, Button } from "@mui/material";
import { Handle, Position } from "@xyflow/react";

const ButtonNode = ({ btn }) => {
    return (
        <Box position="relative">
            <Button
                variant="text"
                sx={{
                    cursor: "move",
                    border: "1px solid lightgrey",
                    borderRadius: "15px",
                    padding: "5px 0",
                }}
                color="darkgrey"
                fullWidth>
                {btn.text}
            </Button>
            <Handle type="source" position={Position.Right} id={`${btn.id}-source`} className="handle" />
        </Box>
    );
};

export default ButtonNode;
