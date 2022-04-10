import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import { Helmet } from "react-helmet";
import { AnalyzerTabs } from "../components/Analyzer";
import { TermsOfServiceDialog } from "../components/Content";
import { PrivacyPolicyDialog } from "../components/Content/PrivacyPolicyDialog";
import { APP_TITLE } from "../utils/constants";

export const Main: FC = () => {
  const [isTermsOfServiceOpened, setTermsOfServiceOpened] = useState(false);
  const [isPrivacyPolicyOpened, setPrivacyPolicyOpened] = useState(false);

  return (
    <>
      <Helmet>
        <title>
          {APP_TITLE}
        </title>
      </Helmet>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h1" align="center" style={{ padding: "25px" }}>
            {APP_TITLE}
          </Typography>

          <AnalyzerTabs handleTermsOfServiceClicked={() => setTermsOfServiceOpened(true)} handlePrivacyPolicyClicked={() => setPrivacyPolicyOpened(true)} />
        </Container>
      </Box>

      <PrivacyPolicyDialog open={isPrivacyPolicyOpened} onClose={() => setPrivacyPolicyOpened(false)} />
      <TermsOfServiceDialog open={isTermsOfServiceOpened} onClose={() => setTermsOfServiceOpened(false)} />
    </>
  );
};