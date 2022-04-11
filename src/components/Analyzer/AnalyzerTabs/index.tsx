import { Box, Tabs, Tab, Typography, TextField, Button, Link as MaterialLink, styled } from "@mui/material";
import React from "react";
import { FunctionComponent, useState } from "react";

type AnalyzerTabProps = {
    currentTab: string;
    tab: string;
};

const AnalyzerTab: FunctionComponent<AnalyzerTabProps> = ({ currentTab, tab, children, ...other }) => {
    return (
        <div
            role="tabpanel"
            hidden={currentTab !== tab}
            id={`simple-tabpanel-${tab}`}
            aria-labelledby={`simple-tab-${tab}`}
            {...other}
        >
            {tab === currentTab && (
                <>{children}</>
            )}
        </div>
    );
};

type AnalyzerTabsProps = {
    handleTermsOfServiceClicked: () => void;
    handlePrivacyPolicyClicked: () => void;
};

const Input = styled('input')({
    display: 'none',
});

export const AnalyzerTabs: FunctionComponent<AnalyzerTabsProps> = ({ handleTermsOfServiceClicked, handlePrivacyPolicyClicked }) => {
    const [currentTab, setCurrentTab] = useState("file");

    const [selectedFiles, setSelectedFiles] = useState<FileList>();
    const [selectedURL, setSelectedURL] = useState("");

    const handleSelectedURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedURL(event.target.value);
    };

    const handleSelectedFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFiles(event.target.files ?? undefined);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTab} centered={true} onChange={(_, newTab) => setCurrentTab(newTab)}>
                    <Tab label="File" value="file" />
                    <Tab label="Link" value="link" />
                </Tabs>
            </Box>

            <AnalyzerTab currentTab={currentTab} tab="file">
                <Box px={3}>
                    <Box my={1}>
                        <Typography variant="body1" align="center">
                            Add the file of a Minecraft modification to start the analysis. Our service will upload your file to our server and process it. Please keep this page open until the analysis is completed. 
                        </Typography>
                    </Box>

                    <Box my={1} display="flex" justifyContent="center">
                        <label htmlFor="add-file">
                            <Input accept=".jar" id="add-file" type="file" onChange={handleSelectedFilesChange} />
                            <Button variant="contained" component="span">
                                Analyze from File
                            </Button>
                        </label>
                    </Box>
                </Box>
            </AnalyzerTab>
            <AnalyzerTab currentTab={currentTab} tab="link">
                <Box px={3}>
                    <Box my={1}>
                        <Typography variant="body1" align="center">
                            Add the URL to the file of a Minecraft modification and click the button to start the analysis. Our service will try to download the modification from the given URL and process it. Please keep this page open until the analysis is completed.
                        </Typography>
                    </Box>

                    <Box px={3} my={1}>
                        <TextField id="outlined-basic" label="URL" variant="outlined" value={selectedURL} onChange={handleSelectedURLChange} fullWidth />
                    </Box>

                    <Box display="flex" justifyContent="center" my={1}>
                        <Button variant="outlined">
                            Analyze from URL
                        </Button>
                    </Box>
                </Box>
            </AnalyzerTab>

            <Box px={3} my={1} textAlign="center">
                <Typography variant="caption">
                    When you submit a file you agree to your <MaterialLink style={{ cursor: "pointer" }} onClick={handleTermsOfServiceClicked}>Terms of Service</MaterialLink> and <MaterialLink style={{ cursor: "pointer" }} onClick={handlePrivacyPolicyClicked}>Privacy Policy</MaterialLink>.
                    The modification can be used by us for further research in the scope of this project. Potential security issues might be published while the contents of the modification will never be published by us.
                </Typography>
            </Box>
        </>
    );
};