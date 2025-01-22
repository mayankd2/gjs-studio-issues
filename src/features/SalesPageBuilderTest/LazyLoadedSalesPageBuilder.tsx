import React from "react";

export const LazyLoadedSalesPageBuilderTest = React.lazy(
  () => import("./SalesPageBuilder"),
);
