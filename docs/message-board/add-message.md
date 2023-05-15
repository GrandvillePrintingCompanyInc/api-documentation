# Add Message

Add or update a message. Updates are performed when the Message `guid` value is provided.

```plaintext
POST /api/MessageBoard/AddMessage
```

### Parameters

| Parameter     | Required | Type                          | Description                                        |
| ------------- | -------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      | `string`                               | API key provided by Grandville Printing Company    |

### Request Body

[Message](./types/message.md)

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
}
```
