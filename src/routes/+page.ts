import { loadData } from "$lib/modules/sanity"

export async function load() {
  const about = await loadData("*[_id == 'about'][0]", {})
  const projects = await loadData("*[_type == 'project']{..., 'playbackId': featuredVideo.asset->playbackId}", {})
  const writings = await loadData("*[_type == 'writing']{..., 'playbackId': featuredVideo.asset->playbackId}", {})
  const resources = await loadData("*[_type == 'resource']{..., 'playbackId': featuredVideo.asset->playbackId}", {})

  return {
    about,
    projects,
    writings,
    resources
  };
}