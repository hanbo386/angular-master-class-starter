# Angular Master Class

![angular-trademe-banner](https://user-images.githubusercontent.com/210413/46713782-d5ec1a80-ccb4-11e8-9c54-25b3e19a3827.png)

This repository contains the **Lab Starter** for TradeMe's Angular Master Class workshop. The workshop will present training material (slides and labs) on the following topics: 

![sections](https://user-images.githubusercontent.com/210413/46714513-48aac500-ccb8-11e8-8ba2-2a11c81b1649.png)

## Local Setup
If not done already, clone this repository using:

```console
$ git clone https://github.com/TradeMe/angular-master-class-starter.git
```

First globally install the Angular-Cli:

```console
$ npm i -g @angular/cli @nrwl/schematics yarn
```

Done? Great, now install the dependencies (this might take a little while):

```console
$ cd angular-master-class-starter
$ yarn install
```

## Web and App Servers

To launch your web application, use a Terminal session with the command:

```console
$ ./start
```

This starts a web server for the Angular application and a Node server for the web app REST calls.

Since your Angular application will request external, remote data [from http://localhost:4201/api], you will need a local app server to respond to the REST API calls. We have already configured a server as part of this repository.

You may also individually start these processes using:

```console
$ ng serve amc-starter
```

This starts a web server for the Angular application; open with a browser url http://localhost:4200.

Simply start a second, separate Terminal session with the commend:

```console
$ npm run rest-api
```

## Learning Modules

Each learning module of the **Angular Master Class** course has 1 or more lab exercises. Each lab exercise adds features and enhancements to the previous lab exercise.

* The final module solutions are stored in module branches. 
* The lab exercise solutions are accessed via git tags; e.g. `jump-start-step-10` or `observables-step-3`.  

Shown below are quick-links and ordering of the Angular Master Class courseware modules:

| Module | Git Command |
|--------|--------|
| Module 1: **[Jump-Start](https://github.com/TradeMe/angular-master-class-finisher/tree/jump-start/src)**     | `git checkout jump-start-step-<xxx>`   | 
| Module 2: **[Observables](https://github.com/TradeMe/angular-master-class-finisher/tree/observables/src)**   | `git checkout observables-step-<xxx>`  | 
| Module 3: **[Architecture](https://github.com/TradeMe/angular-master-class-finisher/tree/architecture/src)** | `git checkout architecture-step-<xxx>` | 
| Module 4: **[Routing](https://github.com/TradeMe/angular-master-class-finisher/tree/routing/src)**           | `git checkout routing-step-<xxx>`      | 
| Module 5: **[Forms](https://github.com/TradeMe/angular-master-class-finisher/tree/forms/src)**               | `git checkout forms-step-<xxx>`        | 
| Module 6: **[Redux](https://github.com/TradeMe/angular-master-class-finisher/tree/redux/src)**               | `git checkout redux-step-<xxx>`        | 
| Module 7: **[ngrx](https://github.com/TradeMe/angular-master-class-finisher/tree/ngrx/src)**               | `git checkout ngrx-step-<xxx>`        | 

For each lab exercise, simply use the *git* command to quickly checkout the solution for that lab exercise:

```
git checkout jump-start-step-11
```

To *checkout* the final module solution (after all the lab exercises are completed), either checkout the *branch* or the latest *tag* of that branch. So, for example, to checkout the final solution **Module 1: Jump-Start**, use:

```
git checkout jump-start
```

## Meet the Trainer Team 

![trainers](https://user-images.githubusercontent.com/210413/46770407-b2c07a00-cd4b-11e8-8f7a-ebf6c91ac9eb.png)

## Important

Have fun and good luck!
- Thomas Burleson, 
