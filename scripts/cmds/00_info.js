const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "cliff",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const botName = "𝗣𝗛𝗜𝗟𝗜𝗣𝗣𝗜𝗡𝗘𝗦 𝗔𝗜";
		const urls = JSON.parse(fs.readFileSync('cliff.json'));
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/manila');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `《  Bot & Owner Info 》
\Name: ${botName}
\n𝗧𝗛𝗘 𝗛𝗔𝗡𝗗𝗦𝗢𝗠𝗘 𝗔𝗗𝗠𝗜𝗡𝗦🇵🇭
\n⚜️𝟭: 𝗞𝘆𝗹𝗲 𝗕𝗮𝗶𝘁-𝗶𝘁
\n⚜️𝟮: 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 𝗔𝗿𝗺𝗲𝗻𝗶𝗼𝗻
\n⚜️𝟯: 𝗝𝗼𝗵𝗻 𝗱𝗲𝗿𝗲𝗰𝗸 𝗺𝗶𝗱𝗿𝗮𝗻𝗼 𝗼𝗯𝗼𝘇𝗮
\n⚜️𝟰: 𝗝𝗼𝘀𝗵𝘂𝗮 𝗕𝗮𝗿𝘁𝗼𝗹𝗼𝗺𝗲
\Datee: ${date}
\Time: ${time}
\Team: ${teamName}
\Uptime: ${uptimeString}
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
