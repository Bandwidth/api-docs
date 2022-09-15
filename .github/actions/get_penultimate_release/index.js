const { Octokit } = require("@octokit/core")
const core = require('@actions/core');


async function getReleaseTags() {
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  })

  const { data } = await octokit.request('GET /repos/Bandwidth/api-docs/tags', {
    owner: 'Bandwidth',
    repo: 'api-docs'
  })

  const badRelease = data[0].name
  const goodRelease = data[1].name

  core.setOutput("badRelease", badRelease)
  core.setOutput("goodRelease", goodRelease)


  // Change workflow_id for proper rollback-release workflow id once that workflow is merged into main.
  await octokit.request('POST /repos/Bandwidth/api-docs/actions/workflows/rollback-release/dispatches', {
    owner: 'Bandwidth',
    repo: 'api-docs',
    workflow_id: 'rollback-release',
    ref: goodRelease,
    inputs: {
      tag_to_delete: badRelease,
    }

})
}

getReleaseTags();