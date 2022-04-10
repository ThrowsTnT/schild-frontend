import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";
import { TEXT_PRIVACY_POLICY } from "../../../utils/constants";
import { FullScreenDialog } from "../FullScreenDialog";

type PrivacyPolicyProps = {
    open: boolean;
    onClose: () => void;
};

export const PrivacyPolicyDialog: FC<PrivacyPolicyProps> = ({ open, onClose }) => {
    return (
        <FullScreenDialog title="Privacy Policy" open={open} onClose={onClose}>
            <Container maxWidth="md" sx={{ alignSelf: "center" }}>
                <Box m={3} textAlign="center">
                    <Typography variant="body1">
                        {TEXT_PRIVACY_POLICY}
                    </Typography>
                </Box>
            </Container>
        </FullScreenDialog>
    );
};