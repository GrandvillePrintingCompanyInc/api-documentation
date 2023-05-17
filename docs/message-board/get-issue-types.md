# Get Issue Types

Returns an array of issue types.

```plaintext
GET /api/MessageBoard/GetIssueTypes
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
curl 'https://{origin}/api/MessageBoard/GetIssueTypes?key={secret}'
```