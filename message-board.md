# Message Board

## Add Message

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

---

## Delete Message

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

---

## Delete Messages

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

---

## Get Ad Types

Returns an array of Ad Types.

```plaintext
GET /api/MessageBoard/GetAdTypes
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
    data: string[],
}
```

---

## Get Message Types

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

---

## Get Keys

Returns an array of department keys.

```plaintext
GET /api/MessageBoard/GetKeys
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
    data: string[],
}
```

---

## Get Poster Names

Returns an array of `postedBy` names pulled from previous messages.

```plaintext
GET /api/MessageBoard/GetPosterNames
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
    data: string[],
}
```

---

## Get Issue Types

Returns an array of issue types.

```plaintext
GET /api/MessageBoard/GetIssueTypes
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
    data: string[],
}
```

---

## Get Solution Types

Returns an array of solution types.

```plaintext
GET /api/MessageBoard/GetSolutionTypes
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
    data: string[],
}
```

---

## Get Formats

Returns an array of format options.

```plaintext
GET /api/MessageBoard/GetFormats
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
    data: string[],
}
```

---

## Get Stocks

Returns an array of stock options.

```plaintext
GET /api/MessageBoard/GetStocks
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
    data: string[]
}
```

