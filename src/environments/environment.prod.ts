export const environment = {
  production: true,
  API_URL: 'https://graduado-api.espe.edu.ec/AlumniQE/',
  URL_SERVICE: 'https://espematico-api.espe.edu.ec/reporteWs/',
  URL_UPDATA: 'https://updatedata-api.espe.edu.ec/UPBannerWS/',
  URL_SEGADM: 'https://users-api.espe.edu.ec/',
  sso: {
    serverUrl: 'https://srvcas.espe.edu.ec',
    clientId: 'vd48aMwTrky0y_U_jOFNH5S83CEa',
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
