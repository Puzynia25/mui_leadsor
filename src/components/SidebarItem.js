import { Box, Paper, Typography } from "@mui/material";
import { MessageOutlined, DeviceHubOutlined, AccessTimeOutlined } from "@mui/icons-material";

const SidebarItem = ({ node, onDragStart }) => {
    const renderIcons = (label) => {
        switch (label) {
            case "Message":
                return <MessageOutlined fontSize="large" color="success" />;
            case "Pause":
                return <AccessTimeOutlined fontSize="large" color="primary" />;
            case "Chain":
                return <DeviceHubOutlined fontSize="large" color="warning" />;
            default:
                return null;
        }
    };

    const icon = renderIcons(node.data.label);

    return (
        <Box textAlign="center" marginBottom={2} sx={{ cursor: "pointer" }}>
            <Paper
                sx={{
                    margin: "10px",
                    padding: "15px",
                    width: "150px",
                    borderRadius: "15px",
                }}
                draggable
                onDragStart={(e) => onDragStart(e, node)}>
                {icon}
                <Typography>{node.data.label}</Typography>
            </Paper>
        </Box>
    );
};

export default SidebarItem;
