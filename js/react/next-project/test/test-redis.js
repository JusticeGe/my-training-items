async function test() {
  const Redis = require('ioredis')

  const redis = new Redis({
    port: 6379,
    host: '127.0.0.1',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    // password: 'auth',
    db: 0
  })
  
  console.log(1111)
  await redis.set('d', 123)

  const keys = await redis.keys('*')
  
  console.log(keys)
}

test()