import { useRef, useState } from "react";
import { Box, Button, Divider, TextField, Typography, IconButton, TextareaAutosize } from "@mui/material";
import { Edit, DeleteRounded } from "@mui/icons-material";

const SettingsMenu = ({ node, onClose, onUpdateNodeText, onAddButtonToNode, onUpdateButton, onDeleteButton }) => {
    const buttonTextRef = useRef(null);
    const buttonRefs = useRef({});

    const [nodeText, setNodeText] = useState(node.data.text);

    const handleUpdateNodeText = (e) => {
        setNodeText(e.target.value);
        onUpdateNodeText(node.id, e.target.value);
    };

    const handleAddButtonClick = (id) => {
        const buttonText = buttonTextRef.current.value;

        onAddButtonToNode(id, buttonText);
        buttonTextRef.current.value = "";
    };

    const renderButtons = (btns) => {
        if (!btns || btns.length === 0) {
            return null;
        }

        return btns.map((btn) => (
            <Box key={btn.id} display="flex" alignItems="center" marginBottom={2}>
                <TextField label={btn.text} fullWidth size="small" inputRef={(el) => (buttonRefs[btn.id] = el)} />
                <IconButton
                    aria-label="edit"
                    onClick={() => onUpdateButton(node.id, btn.id, buttonRefs[btn.id]?.value)}
                    sx={{ marginLeft: "5px" }}>
                    <Edit />
                </IconButton>
                <IconButton onClick={() => onDeleteButton(node.id, btn.id)} color="error" aria-label="delete">
                    <DeleteRounded />
                </IconButton>
            </Box>
        ));
    };

    const btns = renderButtons(node.data.buttons);

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
                <Typography variant="h6" color="success">
                    {node.data.label}
                </Typography>
                <Divider />
                <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                    <Box p={2}>
                        <Box>
                            <TextareaAutosize
                                placeholder="type text here..."
                                minRows={3}
                                style={{
                                    width: "100%",
                                    padding: "8px",
                                    borderRadius: "15px",
                                    borderColor: "lightgray",
                                    resize: "vertical",
                                }}
                                value={nodeText}
                                onChange={handleUpdateNodeText}
                            />
                        </Box>

                        {/* Current buttons */}
                        <Box marginTop={2}>{btns}</Box>

                        {/* Add button */}
                        <Box marginTop={2}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                placeholder="type button text..."
                                inputRef={buttonTextRef}
                            />
                            <Button
                                variant="outlined"
                                sx={{ border: "1px dashed darkgrey" }}
                                color="darkgrey"
                                fullWidth
                                onClick={() => handleAddButtonClick(node.id)}>
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
