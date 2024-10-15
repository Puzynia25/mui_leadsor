import { Card, CardContent, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import useNode from "../hooks/useNode";

const Node = ({ data }) => {
    const { color, content } = useNode(data.label, data);

    return (
        <>
            <Handle type="target" position={Position.Left} id={`${data.id}-target`} className="handle" />
            <Card
                tabIndex={0}
                sx={{
                    cursor: "move",
                    borderRadius: "15px",
                    width: "250px",
                    bgcolor: "rgba(255, 255, 255, 0.7)",
                    "&:focus": {
                        border: "2px solid #16a635",
                        boxShadow: "0px 0px 0px 3px rgba(25, 210, 90, 0.3)",
                    },
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
                    {content}
                </CardContent>
            </Card>
            <Handle type="source" position={Position.Right} id={`${data.id}-source`} className="handle" />
        </>
    );
};

export default Node;
