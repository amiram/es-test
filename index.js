const elasticsearch = require('elasticsearch');
const request = require('request-promise');

const client = new elasticsearch.Client({
  host: process.env.ELASTIC_HOST
});

let errors = 0;
let max = 0;
let times = [];
let maxAvg = 0;

async function run() {
  while (true) {
    const d = Date.now();
    try {
      // reguoar request without es package
      // await request({
      //   url: process.env.ELASTIC_HOST,
      //   method: 'HEAD'
      // });

      await client.ping();
      const time = Date.now() - d;
      max = Math.max(max, time);

      times.push(time);

      if (times.length > 100) {
        times.shift();
      }

      const avg = Math.round(times.reduce((sum, value) => sum + value, 0) / times.length);

      if (times.length === 100) {
        maxAvg = Math.max(avg, maxAvg);
      }

      console.log(`ping ${time}\terrors: ${errors}\tmax: ${max}\tavg: ${avg}\t max avg: ${maxAvg}`);
    } catch (err) {
      console.error('ping error', ++errors);
    }
  }
}

run();