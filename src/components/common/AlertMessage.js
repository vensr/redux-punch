import React from "react";

import { Box, Snackbar } from "@mui/material";
import {IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { connect } from "react-redux";
import { clearDisplayMessageRequest } from "../../thunks/common/thunks";
import { getMessage } from "../../selectors/common/selector";

const AlertMessage = ({ message, handleClose }) => {
    return (
        <Box>
            {message !== "" && (
                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                    open={message !== ""}
                    autoHideDuration={6000}
                    onClose={() => {
                        handleClose();
                    }}
                    message={message}
                    action={
                        <Box>
                            <IconButton
                                size="small"
                                aria-label="close"
                                color="inherit"
                                onClick={() => handleClose()}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    }
                />
            )}
        </Box>
    );
};

const mapStateToProps = state => ({
    message: getMessage(state)
});

const mapDispatchToProps = dispatch => ({
    handleClose: () => {
        dispatch(clearDisplayMessageRequest());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertMessage);
