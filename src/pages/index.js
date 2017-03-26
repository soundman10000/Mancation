export function configure(aurelia) {
  aurelia.globalResources(
  //Login
    './login/header/component'
  , './login/container/component'
  , './login/form/component'
  , './login/instructions/component'
  , './login/disclaimer/component'
  // Register
  , './register/form/component'
  // Global
  , './global/copyright/component'
  // Main
  , './main/login-container/component'
  , './main/information/component'
  , './main/title/component')
}