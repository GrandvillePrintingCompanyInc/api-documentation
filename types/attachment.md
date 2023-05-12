# Attachment

| Key     | Type      | Default | Description                                        |
| ------- | --------- | ------- | -------------------------------------------------- |
| name    | `string`  | `null`  | file name used when downloading |
| data    | `string`  | `null`  | base64 encoded file |
| dataKey | `string` | `null`  | UUID v4 |

```typescript
interface Attachment {
    name:       string;
    data:       string;
    dataKey:    string;
}
```

### Example

```json
{
    "data": "TWVzc2FnZSBUeXBlLCBTdWJqZWN0LCBDcmVhdGVEYXRl...",
    "dataKey": "8177aa68-1223-478d-9830-c91f4ed29e8e"
    "name": "corrected-sign.pdf"
}
```
