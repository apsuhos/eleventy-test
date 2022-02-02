module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/apsuhos/eleventy-test",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/github",
            {
                assets: [
                    {
                        path: "dist.zip",
                        label: "Distribution folder",
                    },
                ],
            },
        ],
    ],
};
