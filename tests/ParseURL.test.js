const ParseURL = require('../utils/ParseURL');

describe('ParseURL', () => {
	test('deve falhar caso o input não seja um URL', () => {
		const invalidUrl = 'exemplo';
		const result = ParseURL(invalidUrl);

		expect(result).toMatchObject({
			code: 'ERR_INVALID_URL',
			input: invalidUrl,
		});
  	})

	test('deve parsear um url corretamente', () => {
		const validUrl = 'https://www.example.com/path?query=123#fragment';
		const result = ParseURL(validUrl);

		expect(result).toEqual({
			urlObj: expect.any(URL),
			protocol: 'https:',
			subdomain: 'www',
			domain: 'example.com',
			port: '',
			path: '/path',
			query: '?query=123',
			parameters: expect.any(URLSearchParams),
			fragment: '#fragment',
		});
	});
})