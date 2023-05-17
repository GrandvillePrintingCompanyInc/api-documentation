# Add Message

Add or update a message. Updates are performed when the Message `guid` value is provided.

```plaintext
POST /api/MessageBoard/AddMessage
```

### Query Parameters

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

### Example

#### Request

```bash
curl 'https://{origin}/api/MessageBoard/AddMessage?key={secret}' \
-H 'Content-Type: application/json' \
-d '{
  "subject": "Example Message",
  "postedBy": "Jon Smith",
  "messageType": {
    "messageType": 0,
    "messageTypeDesc": "Sign Issue"
  },
  "adType": "",
  "buyerNumber": null,
  "format": "",
  "stock": "",
  "originalStartDate": "",
  "newStartDate": "",
  "originalEndDate": "",
  "newEndDate": "",
  "issueType": "",
  "issue": "",
  "solutionType": "",
  "solution": "",
  "UPCs": [],
  "stores": [],
  "keys": [],
  "urgent": false,
  "attachments": [],
  "guid": null
}'
```

#### Response

```json
{
    "success": true,
    "error": ""
}
```