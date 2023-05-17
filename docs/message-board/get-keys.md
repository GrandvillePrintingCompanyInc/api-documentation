# Get Keys

Returns an array of department keys.

```plaintext
GET /api/MessageBoard/GetKeys
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

```bash
curl 'https://{origin}/api/MessageBoard/GetKeys?key={secret}'
```
