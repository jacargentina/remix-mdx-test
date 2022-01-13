import { useContext } from "react";
import AppContext from "~/context";

const Demo = () => {
  const ctx = useContext(AppContext);
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
