exports.multiCapabilities = [
    {
        browserName: "chrome",
        shardTestFiles: false,
        chromeOptions: {
            args: [   "--window-size=1920,1080" ]
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
        shardTestFiles: false,
        'moz:firefoxOptions': {
            "args": [ "--window-size=1920,1080"]
        },
        metadata: {
            device: 'Dell XPS',
            platform: {
                name: 'windows',
                version: '10'
            }
        }
    }
];
