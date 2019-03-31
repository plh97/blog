import axiosOrLocal from '../axiosOrLocal'

describe('axios function unit test', () => {
	test('first time successful request, and second time get data from localstorage', async () => {
		await new axiosOrLocal({
			type: 'localStorage',
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
		const mockResponse = { data: { viewer: { name: 'peng' } } }
		expect(request).toEqual(mockResponse)
	})

	test('first time successful request, and second time get data from sessionStorage', async () => {
		await new axiosOrLocal({
			type: 'sessionStorage',
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
		const mockResponse = {
			data: {
				viewer: {
					name: 'peng'
				}
			}
		}
		expect(request).toEqual(mockResponse)
	})

	test('fail request with 404', async () => {
		const request = await new axiosOrLocal({
			key: Math.random(),
			url: 'https://api.pipk.top/graphqll',
			method: 'post',
			data: {
				query: ''
			}
		})
		const mockResponse = new Error('Request failed with status code 404')
		expect(request).toEqual(mockResponse)
	})

	test('Fail Request With Graphql Syntax Error', async () => {
		const request = await new axiosOrLocal({
			key: Math.random(),
			url: 'https://api.pipk.top/graphql',
			method: 'post',
			data: {
				query: ''
			}
		})

		const mockResponse = {
			errors: [
				{
					message: 'A query attribute must be specified and must be a string.'
				}
			]
		}
		expect(request).toEqual(mockResponse)
	})
})
