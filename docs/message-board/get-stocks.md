# Get Stocks

Returns an array of stock options.

```plaintext
GET /api/MessageBoard/GetStocks
```

### Query Parameters

| Parameter     | Required | Type                                   | Description                                        |
| ------------- | -------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      | `string`                               | API key provided by Grandville Printing Company    |

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
    data: string[]
}
```

## Example

#### Request

```bash
curl 'https://{origin}/api/MessageBoard/GetStocks?key={secret}'
```

#### Response

```json
{
    "success": true,
    "error": "",
    "data": [
        "Stock 55",
        "Stock 44",
        "Stock 40"
    ]
}
```