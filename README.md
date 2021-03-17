# web-dashboard

see https://socialgouv.github.io/web-dashboard

## Dev

The repository root `src` folder contains scripts to fetch the data and all the automation is made using GitHub actions in `.github/workflows`.

The `www` folder contains the restitution website source code and its built for every new report.

##### Work on the UI with some dataset

This generates a full report based on the `661381287` dataset

```sh
node src/report/index.js ./results/661381287/ > www/src/report.json`
cd www
yarn start
```

## Todo

- async automation
- better handle multiple urls and same host
