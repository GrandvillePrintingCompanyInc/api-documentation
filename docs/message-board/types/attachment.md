# Attachment

```typescript
interface Attachment {
    name:       string;
    data:       string;
    dataKey:    string;
}
```

| Key     | Type      |  Description                                        |
| ------- | --------- |  -------------------------------------------------- |
| name    | `string`  |  file name used when downloading |
| data    | `string`  |  base64 encoded file |
| dataKey | `string`  |  UUID v4 |

### Example

```json
{
    "data": "TWVzc2FnZSBUeXBlLCBTdWJqZWN0LCBDcmVhdGVEYXRl...",
    "dataKey": "8177aa68-1223-478d-9830-c91f4ed29e8e"
    "name": "corrected-sign.pdf"
}
```