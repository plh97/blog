// package
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
// local
import './index.scss'
import Viewer from '@/components/Viewer'
import { fetchRepositoryDetail } from '@/redux-relate/actions/http'
import initPageWithTitleDecorator from '@/decorators/initPageWithTitleDecorator'

const mapStateToProps = ({ userReducer, repositoryReducer }) => ({
	userReducer,
	repositoryReducer
})
const mapDispatchToProps = (dispatch) => ({
	fetchRepositoryDetail: bindActionCreators(fetchRepositoryDetail, dispatch)
})
const keyWord = decodeURI(window.location.hash).replace(/^#/, '')
@initPageWithTitleDecorator(keyWord)
@connect(
	mapStateToProps,
	mapDispatchToProps
)
export default class RepositoryDetail extends Component {
	componentDidMount() {
		this.props.fetchRepositoryDetail(keyWord)
	}
	render() {
		const user = _.get(this.props.userReducer, 'res.data.viewer', '')
		const repository = _.get(
			this.props.repositoryReducer,
			'repositoryDetailHttpResponse.data.search.edges[0].node',
			{
				nameWithOwner: '',
				object: { text: '' }
			}
		)
		return (
			<div className="DetailPage">
				<Viewer title={repository.nameWithOwner} data={user} />
				<div className="DetailPage__content">
					<ReactMarkdown
						className="markdown-body"
						source={repository.object.text}
					/>
				</div>
			</div>
		)
	}
}

// code
// export default function(props) {
// 	const [viewer, setViewer] = useState('')
// 	const [repository, setRepository] = useState({
// 		object: {
// 			text: ''
// 		}
// 	})
// 	const keyWord = decodeURI(props.location.hash).replace(/^#/, '')
// 	useEffect(() => {
// 		;(async () => {
// 			const result = await new AxiosOrLocal({
// 				key: `_${keyWord}_`,
// 				url: 'https://api.pipk.top/graphql',
// 				method: 'post',
// 				data: {
// 					query: `{
//             viewer {
//               name avatarUrl login bio url createdAt isHireable
//             }
//             search(first: 1, query: "repo:${keyWord}", type: REPOSITORY) {
//               edges {
//                 node {
//                   ... on Repository {
//                     nameWithOwner
//                     object(expression: "master:README.md") {
//                       ... on Blob {
//                         text
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }`
// 				}
// 			})
// 			setViewer(result.data.data.viewer)
// 			if (result.data.data.search.edges.length > 0) {
// 				setRepository(result.data.data.search.edges[0].node)
// 			} else {
// 				console.log('文章不存在')
// 			}
// 		})()
// 	}, keyWord)
// 	return (
// 		<div className="DetailPage">
// 			<Viewer title={repository.nameWithOwner} data={viewer} />
// 			<div className="DetailPage__content">
// 				<ReactMarkdown
// 					className="markdown-body"
// 					source={repository.object.text}
// 				/>
// 			</div>
// 		</div>
// 	)
// }
