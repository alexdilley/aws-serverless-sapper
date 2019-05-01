# AWS Serverless Sapper

A (non-working/incomplete) minimal implementation of a Sapper server running on AWS Lambda.

## Build/deploy

```sh
npm run config -- --account-id="<accountId>" --bucket-name="<bucketName>" [--region="<region>" --function-name="<functionName>"]
npm run build
npm run package-deploy
```

## References

* https://github.com/sveltejs/sapper-template/tree/webpack-v3
* https://github.com/awslabs/aws-serverless-express/tree/master/examples/basic-starter

## Diagnostics

```
2019-05-01T09:32:54.271Z	65741796-6444-4bf5-ab74-50924b0861ac	Starting server on port 3000
START RequestId: a109c4c0-6976-4956-842a-a478dd9cfd5c Version: $LATEST
module initialization error: Error
at Object.fs.openSync (fs.js:646:18)
at Object.fs.readFileSync (fs.js:551:33)
at Re (/var/task/server/server.js:320:22589)
at /var/task/server/server.js:320:59072
at Module.<anonymous> (/var/task/server/server.js:320:59184)
at a (/var/task/server/server.js:1:186)
at /var/task/server/server.js:1:985
at Object.<anonymous> (/var/task/server/server.js:1:996)
at Module._compile (module.js:652:30)
at Object.Module._extensions..js (module.js:663:10)
END RequestId: a109c4c0-6976-4956-842a-a478dd9cfd5c
REPORT RequestId: a109c4c0-6976-4956-842a-a478dd9cfd5c	Duration: 43.04 ms	Billed Duration: 100 ms Memory Size: 1024 MB	Max Memory Used: 29 MB	
module initialization error
Error
2019-05-01T09:32:54.472Z	a109c4c0-6976-4956-842a-a478dd9cfd5c	Starting server on port 3000
```
