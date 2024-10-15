import { useState } from "react";
import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";

const PauseSettings = ({ node, onUpdateNodeText, onUpdateNodePause }) => {
    const [pause, setPause] = useState(node.data.pause);
    const [time, setTime] = useState("minutes");

    const handleUpdateNodeText = (e) => {
        setTime(e.target.value);
        onUpdateNodeText(node.id, e.target.value);
    };

    const handleUpdateNodePause = (e) => {
        setPause(e.target.value);
        onUpdateNodePause(node.id, e.target.value);
    };

    return {
        content: (
            <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                <Box p={2}>
                    <Typography>Enter the pause duration:</Typography>
                    <Box display="flex" gap={2} mt={2}>
                        <TextField
                            value={pause}
                            size="medium"
                            onChange={handleUpdateNodePause}
                            sx={{ width: "80px", bgcolor: "#ffff" }}
                        />
                        <Select value={time} onChange={handleUpdateNodeText} sx={{ bgcolor: "#ffff" }}>
                            <MenuItem value="seconds">seconds</MenuItem>
                            <MenuItem value="minutes">minutes</MenuItem>
                            <MenuItem value="hours">hours</MenuItem>
                        </Select>
                    </Box>
                </Box>
            </Box>
        ),
    };
};

export default PauseSettings;
