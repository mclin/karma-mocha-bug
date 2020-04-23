# karma-mocha-bug
Example for reproducing karma-mocha bug

There is an error thrown in afterEach in test.test.js.

If you run this with karma-mocha it hangs without completing the tests. 

Without throw in afterEach:
```
$ npm run test

> karmatest@1.0.0 test /Users/mlin/workspace/karmatest
> karma start --single-run

23 04 2020 15:34:20.299:INFO [karma-server]: Karma v5.0.2 server started at http://0.0.0.0:9876/
23 04 2020 15:34:20.302:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
23 04 2020 15:34:20.308:INFO [launcher]: Starting browser Chrome
23 04 2020 15:34:21.437:INFO [Chrome 81.0.4044.122 (Mac OS 10.14.6)]: Connected on socket j-lEEeyaQHziKQdVAAAA with id 4883968
Chrome 81.0.4044.122 (Mac OS 10.14.6): Executed 1 of 1 SUCCESS (0.002 secs / 0 secs)
TOTAL: 1 SUCCESS
```

With throw in after each
```
$ npm run test

> karmatest@1.0.0 test /Users/mlin/workspace/karmatest
> karma start --single-run

23 04 2020 15:34:39.525:INFO [karma-server]: Karma v5.0.2 server started at http://0.0.0.0:9876/
23 04 2020 15:34:39.529:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
23 04 2020 15:34:39.534:INFO [launcher]: Starting browser Chrome
23 04 2020 15:34:40.673:INFO [Chrome 81.0.4044.122 (Mac OS 10.14.6)]: Connected on socket 2Lwvatd4wKVZh7ndAAAA with id 76880926
Chrome 81.0.4044.122 (Mac OS 10.14.6): Executed 1 of 1 SUCCESS (0 secs / 0.001 secs)
Chrome 81.0.4044.122 (Mac OS 10.14.6) ERROR
  Disconnected, because no message in 30000 ms.
Chrome 81.0.4044.122 (Mac OS 10.14.6): Executed 1 of 1 DISCONNECTED (30.011 secs / 0.001 secs)
```

