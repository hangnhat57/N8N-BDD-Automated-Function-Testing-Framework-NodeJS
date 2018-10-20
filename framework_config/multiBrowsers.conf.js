exports.multiCapabilities = [{
	browserName: "chrome",
	maxInstances: 3,
	shardTestFiles: false,
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
	{
		browserName: "firefox",
		maxInstances: 3,
		shardTestFiles: false,
		'moz:firefoxOptions': {
			"args": [
				"-headless",
				"-width=1920",
				"-height=1080"
			]
		},
		metadata: {
			device: 'Dell XPS',
			platform: {
				name: 'windows',
				version: '10'
			}
		}
	},
	{
		browserName: "chrome",
		maxInstances: 3,
		shardTestFiles: false,
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
	// {
	//     browserName: "chrome",
	//     maxInstances: 0,
	//     shardTestFiles: false,
	//     chromeOptions: {
	//         name:"androidOne",
	//         mobileEmulation: {
	//             deviceName: 'Galaxy S5'
	//         },
	//         args: [
	//             "--use-mobile-user-agent",
	//             "--hide-scrollbars",
	//             "--headless",
	//             "--window-size=1920,1080"
	//         ]
	//     },
	//     metadata: {
	//         browser: {
	//             name: 'chrome',
	//             version: '12.0'
	//         },
	//         device: "Galaxy S5",
	//         platform: {
	//             name: 'android',
	//             version: '8'
	//         }
	//     }
	// }
];
