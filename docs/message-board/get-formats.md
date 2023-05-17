# Get Formats

Returns an array of format options.

```plaintext
GET /api/MessageBoard/GetFormats
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
    data: string[],
}
```

## Example

#### Request

```bash
curl 'https://{origin}/api/MessageBoard/GetFormats?key={secret}'
```

#### Response

```json
{
    "success": true,
    "error": "",
    "data": [
        "Format A",
        "Format B",
        "Format C"
    ]
}
```