import { DeviceHubOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

const FilterNode = (data) => {
    return {
        icon: <DeviceHubOutlined fontSize="large" color="warning" />,
        color: "#ffb331",
        content: (
            <>
                <Box paddingInline={0.5} marginTop={2}>
                    <Button
                        variant="text"
                        sx={{
                            cursor: "move",
                            border: "1px solid lightgrey",
                            borderRadius: "15px",
                            padding: "5px 0",
                            margin: "5px 0",
                        }}
                        color="darkgrey"
                        fullWidth>
                        1
                    </Button>
                    <Button
                        variant="text"
                        sx={{
                            cursor: "move",
                            border: "1px solid lightgrey",
                            borderRadius: "15px",
                            padding: "5px 0",
                        }}
                        color="darkgrey"
                        fullWidth>
                        1
                    </Button>
                </Box>
            </>
        ),
    };
};

export default FilterNode;
