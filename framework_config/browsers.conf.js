exports.browsers = {
	chrome: {
		browserName: "chrome",
		maxInstances: 3,
		chromeOptions: {
			args: [
				"--headless",
				"--window-size=1920,1080",
				'--disable-device-emulation',
				'--disable-network-throttling',
				'--disable-cpu-throttling'
			]
		},

		metadata: {
			device: "Macbook Pro 2018",
			platform: {
				name: 'osx',
				version: '10.14'
			}
		}
	},
	firefox: {
		browserName: "firefox",
		maxInstances: 3,
		'moz:firefoxOptions': {
			"args": [
				"-headless",
				"-width=1920",
				"-height=1080",
				"-hide-scrollbar"
			]
		},
		metadata: {
			device: 'Surface Book 2',
			platform: {
				name: 'windows',
				version: '10'
			}
		}
	},
	safariMobile: {
		browserName: "chrome",
		maxInstances: 3,
		chromeOptions: {
			mobileEmulation: {
				deviceName: 'iPhone X'
			},
			args: [
				"--use-mobile-user-agent",
				"--hide-scrollbars",
				"--headless",
				"--window-size=1920,1080"
			]
		},
		metadata: {
			browser: {
				name: 'safari',
				version: '12.0'
			},
			device: "iPhone X",
			platform: {
				name: 'ios',
				version: '12.0.1'
			}
		}
	},
	chromeAndroid: {
		browserName: "chrome",
		maxInstances: 3,
		chromeOptions: {
			mobileEmulation: {
				deviceName: 'Pixel2 XL'
			},
			args: [
				"--use-mobile-user-agent",
				"--hide-scrollbars",
				"--headless",
				"--window-size=1920,1080"
			]
		},
		metadata: {
			browser: {
				name: 'chrome',
				version: '12.0'
			},
			device: "Pixel2 XL",
			platform: {
				name: 'android',
				version: '8'
			}
		}
	}
};
