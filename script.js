import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: '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'
});

async function getCommits(repo) {
  try {
    const { data } = await octokit.repos.listCommits({
      owner: 'KillerObee',
      repo: hwygowerhsdf
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getCommits('repo');