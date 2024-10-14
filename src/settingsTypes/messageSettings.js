import { useRef, useState } from "react";
import { Box, Button, TextField, IconButton, TextareaAutosize } from "@mui/material";
import { Edit, DeleteRounded } from "@mui/icons-material";

const MessageSettings = ({ node, onUpdateNodeText, onAddButtonToNode, onUpdateButton, onDeleteButton }) => {
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

    return {
        content: (
            <>
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
            </>
        ),
    };
};

export default MessageSettings;
