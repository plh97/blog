import axiosOrLocal from '../axiosOrLocal'

describe('axios function unit test', () => {
	test('now should equal to 0分钟', async () => {
		const request = await new axiosOrLocal({
			key: 'FETCH_USER_INFO_TEST',
			url: 'https://api.pipk.top/graphql',
			method: 'post',
			data: {
				query: `{
						viewer {
							name 
						}
					}`
			}
		})
		const mockResponse = {}
		expect(request).toBe(mockResponse)
	})
})
