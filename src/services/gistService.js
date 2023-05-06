import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export const getPublicGists = () => octokit.gists.listPublic();

export const getGistForUser = (username) => {
  return octokit.gists.listForUser({ username }).then((response) => {
    return response;
  });
};
