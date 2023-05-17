# Message

```typescript
interface {
    subject:           string;
    postedBy:          string;
    messageType:       MessageType;
    adType:            string;
    buyerNumber:       string | null;
    format:            string;
    stock:             string;
    originalStartDate: string;
    newStartDate:      string;
    originalEndDate:   string;
    newEndDate:        string;
    issueType:         string;
    issue:             string;
    solutionType:      string;
    solution:          string;
    UPCs:              string[];
    stores:            int[];
    keys:              string[];
    urgent:            boolean;
    attachments:       Attachment[];
    guid:              string | null;
}
```

### Details

| Key     | Type      |  Description                                        |
| ------- | --------- |  -------------------------------------------------- |
| subject | `string`  | Message subject                                    |
| postedBy | `string` | Who posted the message                             |
| messageType | [MessageType](./message-type.md) | Message type |
| adType | `string` | Ad type |
| buyerNumber | `string` | Buyer number |
| format | `string` | Ad format |
| stock | `string` | Stock |
| originalStartDate | `string` | Original start date |
| newStartDate | `string` | New start date |
| originalEndDate | `string` | Original end date |
| newEndDate | `string` | New end date |
| issueType | `string` | Issue type |
| issue | `string` | Issue |
| solutionType | `string` | Solution type |
| solution | `string` | Solution |
| UPCs | `string[]` | UPCs |
| stores | `int[]` | Stores |
| keys | `string[]` | Keys |
| urgent | `boolean` | Urgent |
| attachments | [Attachment[]](./attachment.md) | Attachments |
| guid | `string` | `null` | Unique ID of the message to update, creates new message when `null` |

### Example

```json
{
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
}
```
