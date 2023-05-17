# Get Solution Types

Returns an array of solution types.

```plaintext
GET /api/MessageBoard/GetSolutionTypes
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

### Example

#### Request

```bash
curl 'https://{origin}/api/MessageBoard/GetSolutionTypes?key={secret}'
```

#### Response

```json
{
    "success": true,
    "error": "",
    "data": [
        "Solution Type 1",
        "Solution Type 2",
        "Solution Type 3"
    ]
}
```