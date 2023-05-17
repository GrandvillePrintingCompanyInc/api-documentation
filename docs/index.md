# Grandville Printing Company

The GPC API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

You can use the GPC API in test mode, which doesn't affect your live data or interact with our presses.

The GPC API doesn't support bulk updates. You can work on only one object per request.

The GPC API differs for every account as we release new versions and tailor functionality. Log in to see docs customized to your version of the API, with your test key and data.


## Base URL

The GPC API is served over HTTPS.

The following enviroments are available:

- Development: `https://dev.nexgen365.com`
- Staging: `https://staging.nexgen365.com`
- Production: `https://nexgen365.com`


## Authentication

The GPC API uses API keys to authenticate requests.

Test mode secret keys have the prefix sk_test_ and live mode secret keys have the prefix sk_live_.

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

Provide your API key as the value for the `key` query parameter.

All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.
