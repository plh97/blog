import AxiosOrLocal from '@/utils/axiosOrLocal'
import { FETCH_HOME_PAGE, FETCH_USER_INFO } from '../constant/http'

export const fetchHome = () => (dispatch) =>
	new AxiosOrLocal({
		// url: 'http://localhost:3002/graphql',
		key: '_homePage_',
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
        }`
		}
	}).then(
		(res) =>
			dispatch({
				type: FETCH_HOME_PAGE,
				payload: res.data
			}),
		(err) =>
			dispatch({
				type: FETCH_HOME_PAGE,
				payload: err
			})
	)

export const fetchUser = () => (dispatch) =>
	new AxiosOrLocal({
		key: '_user_',
		url: 'https://api.pipk.top/graphql',
		method: 'post',
		data: {
			query: `{
		viewer {
			name avatarUrl login bio url createdAt isHireable
		}
	}`
		}
	}).then(
		(res) =>
			dispatch({
				type: FETCH_USER_INFO,
				payload: res.data
			}),
		(err) =>
			dispatch({
				type: FETCH_USER_INFO,
				payload: err
			})
	)
