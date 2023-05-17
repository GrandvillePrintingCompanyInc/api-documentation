# Get Ad Types

Returns an array of Ad Types.

```plaintext
GET /api/MessageBoard/GetAdTypes
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
curl 'https://{origin}/api/MessageBoard/GetAdTypes?key={secret}'
```

#### Response

```json
{
    "success": true,
    "error": "",
    "data": [
        "Type 1",
        "Type 2",
        "Type 3"
    ]
}
```