import { Card, CardContent, Typography } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import ButtonNode from "./ButtonNode";
import useNode from "../hooks/useNode";

const Node = ({ data }) => {
    // const renderBtns = (btns) => {
    //     if (!data.buttons || data.buttons.length === 0) {
    //         return null;
    //     }
    //     return btns.map((btn) => <ButtonNode key={btn.id} btn={btn} />);
    // };
    // const btns = renderBtns(data.buttons);

    const { color, content } = useNode(data.label, data);

    return (
        <>
            <Handle type="target" position={Position.Left} id={`${data.id}-target`} className="handle" />
            <Card
                sx={{
                    cursor: "move",
                    borderRadius: "15px",
                    width: "250px",
                    bgcolor: "rgba(255, 255, 255, 0.8)",
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
