import { json, useLoaderData } from "remix";
import { convert } from "~/utils.server";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { AppProvider, useApp } from "~/context";
import Demo from "~/demo";

const source = `

import { AppProvider } from './context';
import Demo from './demo'

<AppProvider>
  <Demo />
</AppProvider>
  `.trim();

export let loader = async () => {
  var code = await convert(source);
  return json({ code });
};

const Index = () => {
  const { code } = useLoaderData();

  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <AppProvider>
      <h1>Demo rendered via JSX</h1>
      <Demo />
      <h1>Demo rendered via MDX</h1>
      <Component />
    </AppProvider>
  );
};

export default Index;
