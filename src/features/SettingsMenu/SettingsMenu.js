import { useState } from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";

const SettingsMenu = ({ node, onClose, onAddButtonToNode }) => {
    const [buttonText, setButtonText] = useState("");

    const handleAddButtonClick = (id) => {
        onAddButtonToNode(id, buttonText);
        setButtonText("");
    };

    return (
        <Box>
            <Box
                position="fixed"
                top={0}
                left={0}
                width="100%"
                height="100vh"
                bgcolor="rgba(0, 0, 0, 0.5)"
                zIndex={1}
            />
            <Box position="fixed" right={0} top={0} bgcolor="#f0f0f0" p={2} width="25%" height="100vh" zIndex={2}>
                <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                    <Box>
                        <Typography variant="h6" color="success">
                            {node.data.label}
                        </Typography>
                        <Divider />
                        <Box p={2}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                placeholder="type button text..."
                                value={buttonText}
                                onChange={(e) => setButtonText(e.target.value)}
                            />
                            <Button variant="outlined" fullWidth onClick={() => handleAddButtonClick(node.id)}>
                                + Add button
                            </Button>
                        </Box>
                    </Box>

                    <Box>
                        <Button variant="contained" color="success" onClick={onClose}>
                            Apply
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SettingsMenu;
