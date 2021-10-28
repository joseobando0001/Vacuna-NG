// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  API_URL: 'https://graduado-api-test.espe.edu.ec/AlumniQE/',
  URL_SERVICE: 'https://espematico-api-test.espe.edu.ec/reporteWs/',
  URL_UPDATA: 'https://updatedata-api-test.espe.edu.ec/UPBannerWS/',
  URL_SEGADM: 'https://users-api.espe.edu.ec/',
  sso: {
    serverUrl: 'https://srvcas.espe.edu.ec',
    clientId: 'uK1lnaxRbmauGv0OLjENQL_qAFIa',
    issuer: '/oauth2endpoints/token',
    redirectUri: window.location.origin,
    postredirectUrL: window.location.origin,
    scope: 'openid profile email',
    logout: '/oidc/logout',
    tokenEndpoint: '/oauth2endpoints/token',
    userinfoEndpoint: '/oauth2/userinfo',
    authorizationEndpoint: '/oauth2/authorize',
    jwksEndpoint: '/oauth2/jwks',
    showDebugInformation: true,
    requireHttps: false,
    responseType: 'id_token token'
  }
};
