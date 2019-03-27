import AxiosOrLocal from '@/utils/axiosOrLocal'
import {
    fetchPending,
    fetchReject,
    fetchResolve,
} from '@reduxs/actions/http'
export const fetchHome = () => dispatch => new AxiosOrLocal({
    // url: 'http://localhost:3002/graphql',
    key: '_blog_',
    url: 'https://api.pipk.top/graphql',
    method: 'post',
    data: {
        query: `{
            repositoryOwner(login: "pengliheng") {
                repository(name: "pengliheng.github.io") {
                    object(expression: "master:README.md") {
                        ... on Blob {
                            text
                        }
                    }
                }
            }
        }`,
    },
}).then(
    res => dispatch(fetchResolve(res)),
    err => dispatch(fetchReject(err))
)

export const fetchMyInfo = () => dispatch => new AxiosOrLocal({
    // url: 'http://localhost:3002/graphql',
    key: '_blog_',
    url: 'https://api.pipk.top/graphql',
    method: 'post',
    data: {
        query: `{
            viewer {
                name avatarUrl login bio url createdAt isHireable
            }
        }`,
    },
}).then(
    res => dispatch(fetchResolve(res)),
    err => dispatch(fetchReject(err))
)