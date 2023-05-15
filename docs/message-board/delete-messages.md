# Delete Messages

Delete several messages using an array of GUIDs.

```plaintext
POST /api/MessageBoard/DeleteMessages
```

### Parameters

| Parameter     | Required | Type                                   | Description                                        |
| ------------- | -------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      | `string`                               | API key provided by Grandville Printing Company    |

### Request Body

```typescript
string[]
```

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
}
```
