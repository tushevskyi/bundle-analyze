# Optimize size of angular application

### Initial state 
There is project implemented on [angular2-webpack-seed](https://github.com/fgladisch/angular2-webpack-seed)

Build project:
```
npm install
npm run build:analyzer 
npm run bundle-report
```

### Final state 
The project transferred to [ng-cli](https://cli.angular.io/)

## Result

**Webpack custom setup (initial state)**
 1. Webpack custom setup with old lib (ng4, rxjs5.5, bootstrap-4alfa)
 1. Improt rxjs operators directly from file
---  
Build 6 files size **180 Kb** (gzip)

 **Ng-cli (after transferring)**
 1. Setup ng-cli
 1. Install latest version of libs
 
 `yarn add @ng-bootstrap/ng-bootstrap @ngx-translate/core @ngx-translate/http-loader bootstrap --save`
 
 1. Fix imports
 1. `ng build --prod`
---
Build 7 files size **151 Kb** (gzip)

# Conclusion
After moving project to the ng-cli and update all libs We won **~29Kb**(gzip) 

This result even can be better if `bootstrap 4` did not added 33Kb (without gzip). It happened because they decided to add css variables. 

You can check out brunch `git checkout -b ng-cli origin/ng-cli` with final solution.

## Network

 | Init | Final |
 |------|-------|
 |![init](https://github.com/dmkorol/bundle-analyze/master/src/init.png "Before optimization")|![init](https://github.com/dmkorol/bundle-analyze/master/src/final.png "After optimization") |
  
# License
[MIT](/LICENSE)
