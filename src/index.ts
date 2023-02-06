import { person, corporate, skypiea } from './greetee'

// main
const ryoma = person({ familyName: '坂本', givenName: '龍魔' })
const takechi = person({ familyName: '武市', givenName: '半平太' })
const kaien = corporate({ name: '海援隊' })
const baroque = corporate({ name: 'バロックワークス' })
const conis = skypiea({ name: 'コニス' })
const ganFall = skypiea({ name: 'ガンフォール' })

const users = { ryoma, takechi, kaien, baroque, conis, ganFall }
Object.entries(users).forEach(([name, user]) => {
  console.log(`${name}:\n${user.greetingMessage()}`)
})

// ryoma:
// 坂本 龍魔さん、こんにちは！
// takechi:
// 武市 半平太さん、こんにちは！
// kaien:
// 海援隊さん、こんにちは！
// baroque:
// バロックワークスさん、こんにちは！
// conis:
// 空島のコニス様、へそ！
// ganFall:
// 空島のガンフォール様、へそ！
