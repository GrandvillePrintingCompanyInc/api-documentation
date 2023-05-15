# Get Message Types

Returns an array of Message Types.

```plaintext
GET /api/MessageBoard/GetMessageTypes
```

### Parameters

| Parameter     | Required | Type                                   | Description                                        |
| ------------- | -------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      | `string`                               | API key provided by Grandville Printing Company    |

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
    data: MessageType[],
}
```

### References

- [Message Type](./types/message-type.md)