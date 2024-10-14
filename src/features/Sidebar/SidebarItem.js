import { Box, Paper, Typography } from "@mui/material";
import useNode from "../../hooks/useNode";

const SidebarItem = ({ node, onDragStart }) => {
    const { icon } = useNode(node.data.label, node.data);

    return (
        <Box textAlign="center" marginBottom={2} sx={{ cursor: "pointer" }}>
            <Paper
                sx={{
                    margin: "10px",
                    padding: "15px",
                    width: "125px",
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
