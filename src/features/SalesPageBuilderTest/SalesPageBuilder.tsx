import "@grapesjs/studio-sdk/style";
import { gjs_studio_ctn_ele_id } from "./SalesPageBuilder.constants";
import { useSalesPageBuilder } from "./utils/useSalesPageBuilder";
import "./SalesPageBuilder.css";
// grapesjs-undraw
import "grapesjs-undraw/dist/grapesjs-undraw.min.css";

const SalesPageBuilder = () => {
  useSalesPageBuilder();

  return (
    <>
      <div id={gjs_studio_ctn_ele_id} />
    </>
  );
};

export default SalesPageBuilder;
