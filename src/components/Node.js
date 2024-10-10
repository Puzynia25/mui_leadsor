import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";

const Node = ({ data }) => {
    const renderBtns = (btns) => {
        if (!data.buttons || data.buttons.length === 0) {
            return null;
        }
        return btns.map((btn) => (
            <Box key={btn.id} position="relative">
                <Button variant="contained" fullWidth>
                    {btn.text}
                </Button>
                <Handle type="source" position={Position.Right} id={`${btn.id}-source`} className="handle" />
            </Box>
        ));
    };
    const btns = renderBtns(data.buttons);

    const color =
        data.label === "Message"
            ? "#17a956"
            : data.label === "Pause"
            ? "#6c95b2"
            : data.label === "Chain"
            ? "#ffb331"
            : "#eee";

    return (
        <>
            <Handle type="target" position={Position.Left} id={`${data.id}-target`} className="handle" />
            <Card
                sx={{
                    cursor: "move",
                    borderRadius: "15px",
                    width: "250px",
                    zIndex: 4,
                }}>
                <CardContent>
                    <Typography
                        borderRadius="10px"
                        fontSize="14px"
                        fontWeight="600"
                        textAlign="center"
                        padding={0.5}
                        color="white"
                        bgcolor={color}
                        component="div">
                        {data.label}
                    </Typography>
                    <Box paddingInline={0.5}>
                        <Typography
                            variant="body1"
                            component="p"
                            color="text.secondary"
                            bgcolor="#eee"
                            fontSize="14px"
                            padding={1}
                            marginTop={2}
                            borderRadius="15px">
                            {data.text}
                        </Typography>
                        <Box display="flex" flexDirection="column" rowGap={1} paddingTop={2}>
                            {btns}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Handle type="source" position={Position.Right} id={`${data.id}-source`} className="handle" />
        </>
    );
};

export default Node;
