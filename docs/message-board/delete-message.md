# Delete Message

Delete a message by GUID.

```plaintext
DELETE /api/MessageBoard/DeleteMessage
```

### Parameters

| Parameter     | Required | Type                          | Description                                        |
| ------------- | -------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      | `string`                               | API key provided by Grandville Printing Company    |
| guid          | yes      | `string`                               | the message GUID                                   |

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
}
```
