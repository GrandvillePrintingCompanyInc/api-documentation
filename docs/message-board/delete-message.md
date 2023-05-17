# Delete Message

Delete a message by GUID.

```plaintext
DELETE /api/MessageBoard/DeleteMessage
```

### Query Parameters

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

### Example

```bash
curl -X DELETE 'https://{origin}/api/MessageBoard/DeleteMessage?key={secret}&guid=24E220F2-E918-ED11-B3D7-005056855B43'
```