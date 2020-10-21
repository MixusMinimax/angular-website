export type GitHubURL = URL

export function isGitHubURL(url: URL | string): url is GitHubURL {
    if (!url) { return false }
    if (typeof (url) === 'string') { url = new URL(url) }
    return url.host.endsWith('github.com')
}

export type GitLabURL = URL

export function isGitLabURL(url: URL | string): url is GitLabURL {
    if (!url) { return false }
    if (typeof (url) === 'string') { url = new URL(url) }
    return url.host.endsWith('gitlab.com')
}
