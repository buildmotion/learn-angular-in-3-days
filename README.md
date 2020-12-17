# Learn Angular in 3 Days

A repository for a 3-day course to learn Angular.

## Angular CLI Commands

```ts
ng generate application myOtherApp
ng generate library logger
ng generate component footer --project=my-app
```

## Source Code for Examples

If you have any Git/SSL issues due to corporate policies, you may need to disable them to allow Git to clone a public repository. Use the following command to temporarily disable _SSL_ warnings or errors.

```ts
git config --global http.sslVerify false
```

Here is a list of repositories to clone for Angular training.

```ts
git clone https://github.com/buildmotion/learn-angular-in-3-days.git
git clone https://github.com/buildmotion/creatr.git
git clone https://github.com/buildmotion/quicken-loans.git
```

## MY-ANGULAR WORKSPACE

The `my-angular` workspace (folder) is a default Angular Workspace. This workspace has (3) application and (1) library project. The library project requires a build before it is available to consumers.

Use this command to build the library. The output will be in the `dist` folder. The `paths` mapping in the root-level `tsconfig.json` file contains the mapping _alias_ name `logger` that allows consumers to use the logger.

```ts
ng build logger
```

A component in an application will need to inject the `logger` into the constructor.

> `import { LoggerService } from 'logger';` > `this.loggerService.log('Hello from Matt2');`

```ts
import { Component } from "@angular/core";
import { LoggerService } from "logger";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "my-angular";

  constructor(private loggerService: LoggerService) {
    this.loggerService.log("Hello from Matt2");
  }
}
```

## Angular Architecture Patterns

Free book for attendees of the training event. Use the following link/coupon to get the book for free: [https://leanpub.com/angular-architecture-the-unofficial-guide/c/fgwoWsiylPa1](https://leanpub.com/angular-architecture-the-unofficial-guide/c/fgwoWsiylPa1)

## Training Videos

### Day 1 :: Session 1

- https://zoom.us/rec/share/PWu7wH5UGL16pFcbeKeR4CXk_vd6QnxWnF-baS80-EB4DtiAn55tq4Qcjqv2DDhD.C9t4DyT4BWk2sUaj
- Passcode: _please get passcode from your team leader_

## Decorators

Different types of Decorators in Angular.

1. Component
2. Injectable
3. Module
4. Directive

## Workspace

https://nx.dev/

https://angular.io/guide/rx-library

## Component Communication

### @Input

### @Output

## Reactive Forms

> libs\quicken\micro-apps\contacts-app\src\lib\add\add.component.ts

1. create reactive form using HTML and ReactiveFormsModule
2. add form controls to `FormGroup`
3. add validators to `FormControl` items in form
4. submit form and retrieve values using `get` methods.

```ts
get emailAddress(): AbstractControl {
  return this.addContactForm.get('emailAddress') as FormControl;
}
```

## Angular.io Reference

- [https://angular.io/guide/reactive-forms](https://angular.io/guide/reactive-forms)
- [https://angular.io/api/forms/ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule)
- [https://angular.io/api/forms/FormControl](https://angular.io/api/forms/FormControl)

## Design Systems

- [https://material.angular.io](https://material.angular.io)
- [https://sparkdesignsystem.com/](https://sparkdesignsystem.com/)

## HttpInterceptor

> https://angular.io/api/common/http/HttpInterceptor

### References:

- [https://medium.com/interoperable/using-httpinterceptor-to-add-a-bearer-token-to-api-calls-with-ng-oidc-client-6b088d680e73](https://medium.com/interoperable/using-httpinterceptor-to-add-a-bearer-token-to-api-calls-with-ng-oidc-client-6b088d680e73)
- [HTTP interceptors in Angular](https://blog.angulartraining.com/http-interceptors-in-angular-61dcf80b6bdd)
- [ADD BEARER TOKEN TO HTTPCLIENT REQUESTS](https://www.illucit.com/en/angular/angular-5-httpinterceptor-add-bearer-token-to-httpclient-requests/)
