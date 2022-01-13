import { json, useLoaderData } from "remix";
import { convert } from "~/utils.server";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import AppContext, { AppContextWrapper } from "~/context";
import Demo from "~/demo";

const source = `

import Demo from './demo'

<Demo />
  `.trim();

export let loader = async () => {
  var code = await convert(source);
  return json({ code });
};

const Index = () => {
  const { code } = useLoaderData();

  const Component = useMemo(
    () => getMDXComponent(code, { getContext: () => AppContext }),
    [code]
  );

  return (
    <AppContextWrapper>
      <h1>Demo rendered via JSX</h1>
      <Demo />
      <h1>Demo rendered via MDX</h1>
      <Component />
    </AppContextWrapper>
  );
};

export default Index;
