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
2019-04-30T15:13:38.985Z	46b746ac-fb0d-4c23-ad6f-bd93052787f6	Starting server on port 3000
START RequestId: 46b746ac-fb0d-4c23-ad6f-bd93052787f6 Version: $LATEST
2019-04-30T15:13:39.023Z	46b746ac-fb0d-4c23-ad6f-bd93052787f6	listening...
END RequestId: 46b746ac-fb0d-4c23-ad6f-bd93052787f6
REPORT RequestId: 46b746ac-fb0d-4c23-ad6f-bd93052787f6	Duration: 3003.18 ms	Billed Duration: 3000 ms Memory Size: 1024 MB	Max Memory Used: 59 MB	
2019-04-30T15:13:42.020Z 46b746ac-fb0d-4c23-ad6f-bd93052787f6 Task timed out after 3.00 seconds
2019-04-30T15:13:42.546Z	46b746ac-fb0d-4c23-ad6f-bd93052787f6	Starting server on port 3000
```
