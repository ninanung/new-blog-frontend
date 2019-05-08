export const renew_last_updated = (last_updated) => {
    return {
        type: 'RENEW_LAST_UPDATED',
        last_updated,
    }
}

export const renew_posts = (posts) => {
    return {
        type: 'RENEW_POSTS',
        posts,
    }
}

export const manager_login = () => {
    return {
        type: 'MANAGER_LOGIN',
    }
}

export const manager_logout = () => {
    return {
        type: 'MANAGER_LOGOUT',
    }
}