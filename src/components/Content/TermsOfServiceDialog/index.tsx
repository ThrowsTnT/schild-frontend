import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";
import { TEXT_TERMS_OF_SERVICE } from "../../../utils/constants";
import { FullScreenDialog } from "../FullScreenDialog";

type TermsOfServiceProps = {
    open: boolean;
    onClose: () => void;
};

export const TermsOfServiceDialog: FC<TermsOfServiceProps> = ({ open, onClose }) => {
    return (
        <FullScreenDialog title="Terms of Use" open={open} onClose={onClose} >
            <Container maxWidth="md" sx={{ alignSelf: "center" }}>
                <Box m={3} textAlign="center">
                    <Typography variant="body1">
                        {TEXT_TERMS_OF_SERVICE}
                    </Typography>
                </Box>
            </Container>
        </FullScreenDialog>
    );
};