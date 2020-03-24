# InvalidBot-discord.js

Инвалид бот. Перед использованием обязательно настройте!

- Язык программирования: Node.JS
- База: MongoDB.
- Модули: "mongodb", "discord.js", "dotenv", "strfitime", "discore.js"
- Есть команды экономики, модерации, информационные, ивентовые и клановые.
- Команды экономики: "\$", "award", "cubs", "daily", "give", "slot"
- Команды модерации: "ban", "clear", "eval", "kick", "mute", "report", "say", "warn"
- Команды информации: "avatar", "serverinfo", "userinfo", "topvoice".
- Команды ивентов: "cardvs", "crocodile", "eventban", "hat"
- Команды кланов: "claninfo", "createclan", "depositClan", "descriptionClan", "joinClan", "leaveClan", "topclans".
- Есть статистика сервера в голосовых каналах.
- Есть функция создания голосовых комнат.
- Стандартный префикс: `.`
- Специально для хостинга "glitch.com"

# Указание токена.

Создайте файл ".env" и впишите туда: (Обязательно, без пробелов!)

```
TOKEN=ТокенБота
MongodbURL=URL для подключения к базе MongoDB.
```

# Настройка бота.

В файл "botconfig.json" пишем:

```JSON
{
  "prefix": "Префикс",
  "messageReact": "ID канала в котором надо ставить 👍-👎",
  "channelReport": "ID канала в который бот будет отправлять жалобы.",
  "serverID": "ID вашего сервера.",
  "colors": "HTML код цвета для Имбеда.",
  "channelLogs": "ID вашего канала с логами. На данный момент туда будут отправлятся сообщения о получении варна.",
  "botOwner": "Ваш ID, ID создателя бота.",
  "categoryID": "ID категории в котором будет создаваться голосовая комната.",
  "voiceID": "ID голосового канала в которого при заходе будет перекидывать в голосовую комнату.",
  "RoleModeratorID": "ID роли Модератора.На",
  "RoleAdminID": "ID роли Админа.",
  "RoleMuteName": "Название роли для мута",
  "RoleEventBannedID": "ID роли для людей которые не должны учавствовать в ивентах.",
  "RoleEventID": "ID роли для ивентеров.",
  "RoleEventID2": "Вторая ID роль для ивентеров."
}
```

# Экспорт файлов на хост "glitch.com"

- Создайте проект.
- Следуйте скринам.
  <img src='https://cdn.discordapp.com/attachments/589855108708172005/622875819856887838/unknown.png'>
- В левом нижнем углу нажимаем на "Tools"
  <img src='https://cdn.discordapp.com/attachments/589855108708172005/622876692419182592/unknown.png'>
- Нажимаем на "Git, Import, and Export"
  <img src='https://cdn.discordapp.com/attachments/589855108708172005/622877068052398090/unknown.png'>
- Нажимаем на "Import from GitHub"
  <img src='https://cdn.discordapp.com/attachments/589855108708172005/622877514880122921/unknown.png'>
- Выведется окошко, где вам надо вписать: `DarkVessel/InvalidBot-discord.js` и нажать "OK"
  <img src='https://cdn.discordapp.com/attachments/599847874557378561/622878277580881931/unknown.png'>
- Вуаля, бот на хосте!
