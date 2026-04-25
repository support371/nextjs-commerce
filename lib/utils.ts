import { ReadonlyURLSearchParams } from "next/navigation";
import { company } from "./gem-catalog";

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || company.url;

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`;

export const validateEnvironmentVariables = () => {
  const requiredEnvironmentVariables = ["NEXT_PUBLIC_SITE_URL"];
  const missingEnvironmentVariables = requiredEnvironmentVariables.filter(
    (envVar) => !process.env[envVar],
  );

  return {
    ok: missingEnvironmentVariables.length === 0,
    missingEnvironmentVariables,
  };
};
