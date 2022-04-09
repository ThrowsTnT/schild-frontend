import { Helmet } from "react-helmet";
import { APP_TITLE } from "../utils/constants";

export const Main = () => {
    return (
        <>
      <Helmet>
        <title>
          {APP_TITLE}
        </title>
      </Helmet>
    </>
    );
};