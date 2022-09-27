import { Oval } from "react-loader-spinner";
import { LoadingDiv } from "../components/table/tableStyle";

export default function Loading() {
  return (
    <LoadingDiv>
      <Oval
        height={60}
        color="rgb(0,0,0)"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="rgb(210,210,210)"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoadingDiv>
  );
}
