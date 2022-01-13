import { useContext } from "react";
import AppContext from "~/context";

declare global {
  var getContext: () => typeof AppContext;
}

const Demo = () => {
  const ctx = useContext(
    typeof getContext === "function" ? getContext() : AppContext
  );

  return (
    <div>
      Context Value:&nbsp;
      <span
        style={
          ctx.test === "Expected value" ? { color: "green" } : { color: "red" }
        }>
        {ctx.test}
      </span>
    </div>
  );
};

export default Demo;
