# Errors

GPC API uses conventional HTTP response codes to indicate the success or failure of an API request. In general:

Codes in the `2xx` range indicate success.

Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a change failed, etc.).

Codes in the `5xx` range indicate an error with GPC's servers.

Some `4xx` errors that could be handled programmatically include an error code that briefly explains the error reported.

### HTTP Status Codes

| Code    | Status         |  Description                                        |
| ------- | -------------- |  -------------------------------------------------- |
| `200`   | OK | Everything worked as expected. |
| `400`   | Bad Request | The request was unacceptable, often due to missing a required parameter. |
| `401` | Unauthorized | No valid API key provided. |
| `402` | Request Failed | The parameters were valid but the request failed. |
| `403` | Forbidden | The API key doesn't have permissions to perform the request. |
| `404` | Not Found | The requested resource doesn't exist. |
| `429` | Too Many Requests | Too many requests hit the API too quickly. |
| `500` | Internal Server Error | Something went wrong on GPC's end. |
| `502` | Bad Gateway | Something went wrong on GPC's end. |
| `503` | Service Unavailable | Something went wrong on GPC's end. |
| `504` | Gateway Timeout | Something went wrong on GPC's end. |