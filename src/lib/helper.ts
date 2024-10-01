export function convertProjectNameToUrlEndpoint(projectName: string) {
  return projectName.split(" ").join("-").toLowerCase()
}