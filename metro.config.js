// const { getDefaultConfig } = require('expo/metro-config');

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname);

// config.resolver.preserveSymlinks = true;  // Giữ lại symlinks
// config.resolver.blockList = [
//   /.*\/node_modules\/.*\/build\/.*/  // Tùy chỉnh blockList nếu cần
// ];

// module.exports = config;


// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);
