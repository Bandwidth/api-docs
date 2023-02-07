const { Octokit } = require("@octokit/core")
const core = require('@actions/core');


async function rollbackRelease() {
  const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    })
  
  const { data } = await octokit.request('GET /repos/Bandwidth/api-docs/releases', {
    owner: 'Bandwidth',
    repo: 'api-docs'
  })
  
  const cleanedData = []
  const cleanData = (data) => {
   for (const x in data) {
    if (data[x].draft === false && data[x].prerelease === false) {
      cleanedData.push(data[x]) 
    }
   }
  }

  cleanData(data)
  cleanedData.sort((a,b) => (a.published_at > b.published_at) ? -1 : ((b.published_at > a.published_at) ? 1 : 0));
  
  const badRelease = cleanedData[0].name
  const badReleaseId = cleanedData[0].id
  const goodRelease = cleanedData[1].name
  
  core.setOutput("goodRelease", goodRelease)
  
  await octokit.request(`PATCH /repos/Bandwidth/api-docs/releases/${badReleaseId}`, {
    tag_name: badRelease,
    draft: true,
  })
  
  await octokit.request('POST /repos/Bandwidth/api-docs/actions/workflows/3796239/dispatches', {
    ref: goodRelease,
  })
}

rollbackRelease();
