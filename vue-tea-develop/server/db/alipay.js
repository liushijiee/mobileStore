//引入sdk
const AlipaySdk = require('alipay-sdk').default;
const alipaySdk = new AlipaySdk({
  //AppId
  appId: '2021000121636778',
  //签名算法
  signType:'RSA2',
  //支付宝网关
  gateway:'https://openapi.alipaydev.com/gateway.do',
  //支付宝公钥
  alipayPublicKey:'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgQgMAIih7aI5s1kBRh5Eo3TxT8I/MljsWKzXkSJBFrA8dJGbZlwykh3ovBwrIe3DDkBbOYYuYrnsqcPthuzTndNfsrJdCkqwQmYvqs+0jpwBCwuUslo17dIdqV4F5EpInWFT/TBxX8ajaOuX0EtOWBqZC251fS20HRSRjMhtFlLBA/qLYWKeftnSnERsPXd1nRhFs6ansxlcaKNACB9c5BqAIF//jS99LmAPhMhwA310luuRF6rzlq6KQvRDQ1fuz/YbOXPAIY/RH0gELtx7eOny5KUenMWWs2EDvZZTzBIusHZjE+HzogFy79kEGLYfe/JemDy1tHH73c1uY2L6nwIDAQAB',
  //应用私钥
  privateKey: 'MIIEpQIBAAKCAQEAq5qmRAgJb1DF85pF7BGYu+ie9t/UiIwdaluacWEU5yOOwvIEDk0BexnSYs+8oBr6qQdZfl5UgNN2rnjwm7wLY8K5bORpDm38zapRwhJulkKvzwgWh7cAZ1UfonJ1GgovpbpdeICbTCU+84hYZYAuKKH8mC/Pt2yfRVfJWHbqJFBl1nWhpTPn+rvytXxpA2POjW3LbASt8f/inXg+TyiC33CpINySfxtQuBMF19LvJrpb3NQIiw0FQM1ABTMjsl6cMhEdyaXGaWNMCfopvKKePaPYZmBu42SQEzJU2GhaOqfmGkkh2nb/lifj35OyqL+0uE86DCQ3YYyeEt8iDDVPfwIDAQABAoIBAA/NXvA22T+R7ZigJT425JyxMCpFtFmapX7Mzq0QJo+eW6AiDzON7cv7Nb95p8IKmfiEv73+S8PNNUmdw3Jj35yhKtgXNIFqqXP68ipv7hUSMQRcl06KEJRzZ0VbSuNJ+tdFESRum15os6JTdOhr5FRDjnIpPPSEISqOifEGiksroUUQRi1EACuJ7jM0bVsapXkqPGBuW1Ds4GMVgkduk9ezlfpdviC6tQNRwda+GaBlr/ZxJ0kBnqa1aukzBrcLCpJoLGt6/83Btrlc3W+2DqG4yjAntzU7IxpJkGIi43LqAz7ssGrRFKrM4jVWuDwyqgnARb9ry9bgy2di04SsJEECgYEA7A3d4SrSL7/OHq040yWupLQANoW1nHWr7lTTDGuZoMaSSkyDyRWL6Bl10qVfiNpi/0EbhCYytY0a7a2gtQOKw6DA/s/1r9ZnVKPHYl10g0z9YHAc2ue3xEGBKPfVcl1UdPCObEuBWUDJrfuGRTQ+EtuUIASCHKrp8riX5jMmkKECgYEAuhqmoX03XeWTyIfrVGQBv4Mo4ccDyO/TyuJggLTReD/Vbv5E1CqzsCMkNrJY6hLZktCHHD98SE6b0Cx6C4D7kRJ9hFRcw8g9p0QcWPj4pHj3v2X1NuALoaLq9dkN2q44lXn9QB7d6rfibkyIt0SejVsrXTwgCTVFt4TxNi9aTB8CgYEAxRmnBNY+fsRHFXJKGnRCaSArdVscE7JlhzGor5xAwPBNQmC1QXgORBTOPr77EEhZlQ0GLse+W72gmIj7wWlduo9F1v5KBTKfQRsn5shl+ySUBKxYS6hj1yli8ZRO05l+Zc5e/anmLWJdhDqbGLnQgup5umpJQiqsAZGEtCBNuUECgYEAhQTlk0nH2EJu5gdYimJM6ZEbGH3CU84v6LTz2yrjCfs+V+5AThITi1Mi4EGL0gsVHp4T5HnwIFKnhh00QqK3rRK1Sm9uOrYWc0b4qBOUzSJ1moWKxuVPCwJCxOSWxXZ/lT+zZzBo2AsFOmdT1QKj/U9r6GFAWLSOF0Vbj6o69WsCgYEA1VDMUwLLXgKY4GXTHj+lVIIFOFsl0BGfYdmDcm4z3Jx4epzGiGE9PobesN3pP3Zbs3B7wFvmCdr6tf5al/qlsiMZPy2qA6ji6+lQ2ut0ZUWtOO+00RuPgf46ywDJlXpc465svSFrAn3zsMqmGV7bXB5UANZDrS+dPn8RZ/U09qQ='
});

module.exports = alipaySdk;