This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Get Started:

Clone, install, build (for production only), run:

```bash
# Development
yarn dev
# or Production:
yarn build
yarn start
```
## ERRORS (experimental nextjs.13 features):
```
- Permission denined: sudo chown -R $USER <project-dir>
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Container:

comming...

# GCP Deploy
## Cloud Run:
Set up the [Cloud Run >](https://codelabs.developers.google.com/codelabs/cloud-run-deploy#4)

### Coiud Register:
Make API available

## Load Balancer
- Backend - attach Cloud Run container (VM, App engine)
- Front end - configure

[GCP Load Balancer >](https://cloud.google.com/load-balancing/docs/https/setting-up-https-serverless)

## CDN
- Reserve External IP-addresses [example](https://cloud.google.com/cdn/docs/setting-up-cdn-with-serverless#ip-address)  
- HTTPS, SSL - optional, recomended in production
- DNS - attach for custom domain
- Add Environment - [Read here >](https://cloud.google.com/run/docs/configuring/environment-variables)
- Caching - [read here](https://cloud.google.com/cdn/docs/caching)

[Cloud CDN >](https://cloud.google.com/cdn/docs/setting-up-cdn-with-serverless)

[Google Developers Codelabs >](https://codelabs.developers.google.com/?text=website)
<br><br>

---
# MongoDB
Configure to access with Authorization: [etc/mongod.conf.origin](https://hevodata.com/learn/mongodb-configuration-file/)