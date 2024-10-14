import { MessageOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import ButtonNode from "../components/ButtonNode";

const MessageNode = (data) => {
    const renderBtns = (btns) => {
        if (!data.buttons || data.buttons.length === 0) {
            return null;
        }
        return btns.map((btn) => <ButtonNode key={btn.id} btn={btn} />);
    };
    const btns = renderBtns(data.buttons);

    return {
        icon: <MessageOutlined fontSize="large" color="success" />,
        color: "#17a956",
        content: (
            <Box paddingInline={0.5}>
                <Typography
                    variant="body1"
                    component="p"
                    color="textSecondary"
                    bgcolor="#eee"
                    fontSize="14px"
                    padding={1}
                    marginTop={2}
                    borderRadius="15px">
                    {data.text}
                </Typography>
                {btns && (
                    <Box display="flex" flexDirection="column" rowGap={1} paddingTop={2}>
                        {btns}
                    </Box>
                )}
            </Box>
        ),
    };
};

export default MessageNode;
