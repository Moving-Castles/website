import { loadData } from "$lib/modules/sanity"
import type { About, Project, Post } from "$lib/modules/types";

export async function load() {
  const about: About = await loadData("*[_id == 'about'][0]", {})
  const projects: Project[] = await loadData("*[_type == 'project']{..., 'playbackId': featuredVideo.asset->playbackId}", {})
  const posts: Post[] = await loadData("*[_type == 'post']{..., 'playbackId': featuredVideo.asset->playbackId}", {})

  return {
    about,
    projects,
    posts
  };
}