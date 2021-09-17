const { parseCookies, setCookie, destroyCookie } = require('nookies');

export const checkingAuth = (ctx, condition, location = '/') => {
    const cookie = parseCookies(ctx);
    let innerCondition;
    switch (condition) {
        case 'is_equal_to':
            innerCondition = cookie['next-auth.session-token'] === 'null';
            break;
        case 'is_not_equal_to':
            innerCondition = cookie['next-auth.session-token'] !== 'null';
            break;
        default:
            break;
    }

    if (innerCondition) {
        return {
            redirect: {
                destination: location,
                permanent: false,
            },

        }

    }
    return {
        props: {}
    }
}
