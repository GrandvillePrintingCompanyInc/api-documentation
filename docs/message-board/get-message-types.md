# Get Message Types

Returns an array of Message Types.

```plaintext
GET /api/MessageBoard/GetMessageTypes
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
    data: MessageType[],
}
```

### References

- [Message Type](./types/message-type.md)

### Example

#### Request

```bash
curl 'https://{origin}/api/MessageBoard/GetMessageTypes?key={secret}'
```

#### Response

```json
{
    "success": true,
    "error": "",
    "data": [
        {
            "messageType": 0,
            "messageTypeDesc": "Sign Issue"
        },
        {
            "messageType": 1,
            "messageTypeDesc": "Ad Correction"
        }
    ]
}
```