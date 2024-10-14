import { Box, Button, Divider, Typography } from "@mui/material";
import useSettingsMenu from "../../hooks/useSettingsMenu";

const SettingsMenu = ({
    node,
    onClose,
    onUpdateNodeText,
    onAddButtonToNode,
    onUpdateButton,
    onDeleteButton,
    onUpdateNodePause,
}) => {
    const data = {
        node,
        onUpdateNodeText,
        onAddButtonToNode,
        onUpdateButton,
        onDeleteButton,
        onUpdateNodePause,
    };

    const { content } = useSettingsMenu(node.data.label, data);

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
            <Box position="fixed" right={0} top={0} bgcolor="#f0f0f0" p={2} width="25%" height="100%" zIndex={2}>
                <Typography variant="h6" color="success">
                    {node.data.label}
                </Typography>
                <Divider />
                <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                    <Box p={2}>{content}</Box>

                    <Box marginY={4}>
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
