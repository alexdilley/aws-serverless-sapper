# AWS Serverless Sapper

A minimal implementation of a Sapper server running on AWS Lambda.

## Build/deploy

```sh
npm install
npm run config -- --account-id="<accountId>" --bucket-name="<bucketName>" [--region="<region>" --function-name="<functionName>"]
npm run build
npm run package-deploy
```

## References

* https://github.com/awslabs/aws-serverless-express/tree/master/examples/basic-starter
* https://github.com/sveltejs/sapper-template
