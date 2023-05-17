# Get Poster Names

Returns an array of `postedBy` names pulled from previous messages.

```plaintext
GET /api/MessageBoard/GetPosterNames
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
curl 'https://{origin}/api/MessageBoard/GetPosterNames?key={secret}'
```

#### Response

```json
{
    "success": true,
    "error": "",
    "data": [
        "Jon Smith",
        "Jane Johnson"
    ]
}
```