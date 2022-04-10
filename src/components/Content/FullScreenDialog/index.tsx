import { Close } from "@mui/icons-material";
import { AppBar, Button, Dialog, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { FC } from "react";

type FullScreenDialogProps = {
    title: string;
    open: boolean;
    onClose: () => void;
    action?: {
        title: string;
        onClick: () => void;
    }
};

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children?: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} unmountOnExit />;
});

export const FullScreenDialog: FC<FullScreenDialogProps> = ({ open, onClose, title, children, action }) => {
    return (
        <Dialog
            fullScreen
            open={open}
            onClose={onClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={onClose}
                        aria-label="close"
                    >
                        <Close />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        {title}
                    </Typography>

                    {action && (
                        <Button color="inherit" onClick={action.onClick}>
                            {action.title}
                        </Button>
                    )}
                </Toolbar>
            </AppBar>

            {children}
        </Dialog>
    );
};