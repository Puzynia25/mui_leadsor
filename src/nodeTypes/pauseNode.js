import { AccessTimeOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const PauseNode = (data) => {
    return {
        icon: <AccessTimeOutlined fontSize="large" color="primary" />,
        color: "#6c95b2",
        content: (
            <Box paddingInline={0.5} textAlign="center">
                <Typography
                    variant="body1"
                    component="p"
                    color="textSecondary"
                    fontSize="14px"
                    padding={1}
                    marginTop={2}>
                    Delay
                    <Box
                        component="span"
                        display="inline-flex"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor="#eee"
                        borderRadius="15px"
                        padding="0 8px"
                        marginX={0.5}>
                        <Typography fontSize="14px" color="black" component="span">
                            {data.text}
                        </Typography>
                    </Box>
                    minutes
                </Typography>
            </Box>
        ),
    };
};

export default PauseNode;
