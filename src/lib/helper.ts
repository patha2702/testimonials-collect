export function convertProjectNameToUrlEndpoint(projectName: string) {
  return projectName.split(" ").join("-").toLowerCase()
}

export function getYouTubeVideoId(url :string) {
  if (url) {
    const videoCode = url.split("v=")[1].split("&")[0];
    return videoCode
  }
  return ""
}