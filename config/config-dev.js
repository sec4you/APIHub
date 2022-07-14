(function() {
    console.log('Loading SEC4YOU config');

 window.APIHUB_CONFIG = {
    PAGE_TITLE: 'SEC4YOU DEV', // The html page title
    APIHUB_URL: 'https://portal.sec4you.dev', // The Portal API (PAPI) domain
    TENANT_NAME: 'portal', // The tenant name
    ORIGIN_HUB_NAME: 'apihub_sec4you',  // The identifier of the API Hub
    ENABLE_MOCK: false, // Enable/disable the Layer7 API Hub mock server
    USE_BRANDING_THEME: false, // Use the branding theme from PAPI
    USE_BRANDING_ICONS: true, // Use the branding favicon from PAPI
 };
})();
