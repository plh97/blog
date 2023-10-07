import { timeUtils } from '../time'

describe('time function unit test', () => {
	test('now should equal to 0分钟', () => {
		const time = new Date()
		expect(timeUtils(time)).toBe('0分钟')
	})
	test('-60*1000 should equal to 1分钟', () => {
		const time = new Date()
		expect(timeUtils(time - 1000 * 60)).toBe('1分钟')
	})
	test('-60*60*1000 should equal to 1小时', () => {
		const time = new Date()
		expect(timeUtils(time - 1000 * 60 * 60)).toBe('1小时')
	})
	test('-24*60*60*1000 should equal to 1天', () => {
		const time = new Date()
		expect(timeUtils(time - 1000 * 60 * 60 * 24)).toBe('1天')
	})
	test('-30*24*60*60*1000 should equal to 1个月', () => {
		const time = new Date()
		expect(timeUtils(time - 1000 * 60 * 60 * 24 * 30)).toBe('1个月')
	})
	test('-12*30*24*60*60*1000 should equal to 1年前', () => {
		const time = new Date()
		expect(timeUtils(time - 1000 * 60 * 60 * 24 * 30 * 12)).toBe('1年前')
	})
})
