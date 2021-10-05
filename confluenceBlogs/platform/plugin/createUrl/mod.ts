declare var subdomain: string

export function createUrl(avatarSlug: string) {
    var url = "https://" + subdomain + ".atlassian.net" + avatarSlug
    return url
}