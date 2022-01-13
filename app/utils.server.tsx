import { bundleMDX } from "mdx-bundler";

export const convert = async (text) => {
  const result = await bundleMDX({
    source: text,
    cwd: process.cwd() + "/app"
  });
  return result.code;
};
