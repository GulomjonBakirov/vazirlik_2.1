import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - Hodimlarni qayta o'qitish platformasi`}</title>
    </Helmet>
  );
};

export default MetaData;
