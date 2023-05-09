# Message Board

## Get Messages

Returns all the message board rows.

```plaintext
GET /api/MessageBoard/GetMessages
```

### Parameters

| Parameter     | Required | Default                    | Valid options                          | Description                                        |
| ------------- | -------- | -------------------------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      |                            | `string`                               | API key provided by Grandville Printing Company    |

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
    Array<{
        guid: string,
        subject: string,
        adType: string,
        keys: Array<string>,
        originalStartDate: string,
        postDte: string,
        hasViewed: boolean,
        isUrgent: boolean,
        hasAttachments: boolean,
    }>,
}
```

## Get Message

Returns a message by GUID.

```plaintext
GET /api/MessageBoard/GetMessage
```

### Parameters

| Parameter     | Required | Default                    | Valid options                          | Description                                        |
| ------------- | -------- | -------------------------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      |                            | `string`                               | API key provided by Grandville Printing Company    |
| guid          | yes      |                            | `string`                               | the message GUID                                   |

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
    data: Message
}
```

### References

- [Message](./types/message)
- [Attachment](./types/attachment)

## Get Ad Types

Returns an array of Ad Types.

```plaintext
GET /api/MessageBoard/GetAdTypes
```

### Parameters

| Parameter     | Required | Default                    | Valid options                          | Description                                        |
| ------------- | -------- | -------------------------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      |                            | `string`                               | API key provided by Grandville Printing Company    |

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
    data: Array<string>
}
```

## Get Keys

Returns an array of department keys.

```plaintext
GET /api/MessageBoard/GetKeys
```

### Parameters

| Parameter     | Required | Default                    | Valid options                          | Description                                        |
| ------------- | -------- | -------------------------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      |                            | `string`                               | API key provided by Grandville Printing Company    |

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
    data: Array<string>
}
```

## Get Formats

Returns an array of format options.

```plaintext
GET /api/MessageBoard/GetFormats
```

### Parameters

| Parameter     | Required | Default                    | Valid options                          | Description                                        |
| ------------- | -------- | -------------------------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      |                            | `string`                               | API key provided by Grandville Printing Company    |

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
    data: Array<string>
}
```

## Get Stocks

Returns an array of stock options.

```plaintext
GET /api/MessageBoard/GetStocks
```

### Parameters

| Parameter     | Required | Default                    | Valid options                          | Description                                        |
| ------------- | -------- | -------------------------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      |                            | `string`                               | API key provided by Grandville Printing Company    |

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
    data: Array<string>
}
```

## Add Message

Add or update a message. Updates are performed when the Message `guid` value is provided.

```plaintext
POST /api/MessageBoard/AddMessage
```

### Parameters

| Parameter     | Required | Default                    | Valid options                          | Description                                        |
| ------------- | -------- | -------------------------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      |                            | `string`                               | API key provided by Grandville Printing Company    |

### Request Body

```typescript
Message
```

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
}
```

### Type References

- [Message](./types/message)

## Delete Message

Delete a message by GUID.

```plaintext
DELETE /api/MessageBoard/DeleteMessage
```

### Parameters

| Parameter     | Required | Default                    | Valid options                          | Description                                        |
| ------------- | -------- | -------------------------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      |                            | `string`                               | API key provided by Grandville Printing Company    |
| guid          | yes      |                            | `string`                               | the message GUID                                   |

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
}
```

## Delete Messages

Delete several messages using an array of GUIDs.

```plaintext
POST /api/MessageBoard/DeleteMessages
```

### Parameters

| Parameter     | Required | Default                    | Valid options                          | Description                                        |
| ------------- | -------- | -------------------------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      |                            | `string`                               | API key provided by Grandville Printing Company    |

### Request Body

```typescript
Array<string>
```

### Reponse Body

```typescript
interface {
    success: boolean,
    error: string,
}
```

## Download Attachment

Downloads a messages attachment.

```plaintext
GET /api/MessageBoard/DownloadAttachment
```

### Parameters

| Parameter     | Required | Default                    | Valid options                          | Description                                        |
| ------------- | -------- | -------------------------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      |                            | `string`                               | API key provided by Grandville Printing Company    |
| guid          | yes      |                            | `string`                               | the attachment GUID                                |

### Reponse Body

```plaintext
application/octet-stream
```

## Download Spreadsheet

Creates and downloads a message report spreadsheet (CSV).

```plaintext
GET /api/MessageBoard/DownloadSpreadsheet
```

### Parameters

| Parameter     | Required | Default                    | Valid options                          | Description                                        |
| ------------- | -------- | -------------------------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      |                            | `string`                               | API key provided by Grandville Printing Company    |

### Reponse Body

```plaintext
text/csv
```

## Download Visibility Report

Creates and downloads a visibility report spreadsheet (CSV).

```plaintext
GET /api/MessageBoard/DownloadVisibilityReport
```

### Parameters

| Parameter     | Required | Default                    | Valid options                          | Description                                        |
| ------------- | -------- | -------------------------- | -------------------------------------- | -------------------------------------------------- |
| key           | yes      |                            | `string`                               | API key provided by Grandville Printing Comapny    |

### Reponse Body

```plaintext
text/csv
```
