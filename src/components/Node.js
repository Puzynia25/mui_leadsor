import { Card, CardContent, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";

const Node = ({ data }) => {
    return (
        <>
            <Handle type="target" position={Position.Left} className="handle" />
            <Card
                sx={{
                    cursor: "move",
                    borderRadius: "15px",
                    width: "250px",
                }}>
                <CardContent>
                    <Typography
                        sx={{
                            borderRadius: "30px",
                            backgroundColor: "#eee",
                            fontSize: 14,
                            textAlign: "center",
                            padding: "5px",
                        }}
                        component="div">
                        {data.label}
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{ color: "text.secondary", fontSize: 14, paddingTop: "20px" }}>
                        {data.text}
                    </Typography>
                </CardContent>
            </Card>
            <Handle type="source" position={Position.Right} className="handle" />
        </>
    );
};

export default Node;
