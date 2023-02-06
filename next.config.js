// next.config.js

// module.exports = {

// }


module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push(
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto"
            }
        );
        // 重要: 変更された設定を返す
        return config
    },
}