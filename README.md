# Elastic search test

This repo tests connection performance to elasticsearch.

Steps:

1. npm i

2. chmod +x build.sh

3. ./build.sh

4. Edit run.sh and replace `[es-host]` with your elasticsearch address.

5. chmod +x run.sh

6. ./run.sh

Now two docker containers will run. One built on Alpine and the other built on Ubuntu.

The code is using elasticsearch.js lib to ping the server. If you want to use the request library comment the ping command and uncomment the request command above.

<pre>
await request({
  url: process.env.ELASTIC_HOST,
  method: 'HEAD'
});

// await client.ping();
</pre>

My results for more than an hour of pings (server is on aws ireland):

1. Alpine is faster by ~15ms with elasticsearch.js. With request it is faster by ~40ms.

2. Ubuntu ends with around 3 errors per hour when using elasticsearch.js without changing the default timeout which is 3000. With request, some requests takes around 5500ms.

### Conclusion: With ubuntu you must increase the request timout to more than 5000 ms.
