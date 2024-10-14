import { useState } from "react";
import { Box, TextareaAutosize } from "@mui/material";

const FilterSettings = ({ node, onUpdateNodeText, onAddButtonToNode, onUpdateButton, onDeleteButton }) => {
    const [nodeText, setNodeText] = useState(node.data.text);

    const handleUpdateNodeText = (e) => {
        setNodeText(e.target.value);
        // onUpdateNodeText(node.id, e.target.value);
    };

    return {
        content: (
            <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                <Box p={2}>
                    <Box>
                        <TextareaAutosize
                            placeholder="type text here..."
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
                </Box>
            </Box>
        ),
    };
};

export default FilterSettings;
