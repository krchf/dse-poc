# Global Data

```json
{
  "singleInput": {
    "@url": "...1",
    "someAttribute": 123
  },
  "collectionInput": [
    {
      "@url": "...2",
      "someAttribute": 234
    },
    {
      "@url": "...3",
      "someAttribute": 345
    }
  ],
  "firstOutput": {
    "@url": "...4",
    "anotherAttribute": "abc"
  },
  "secondOutput": [
    // ... (collection)
  ]
  // ...
}
```

# Service Input Mapping

(Payload)

```json
{
  "firstInputMethodData": processInputs.singleInput,
  "secondInputMethodData": firstActivity.firstOutput
}
```

# Service Output Mapping

(Result Expression)

```json
{
  "thirdActivityId": body
}
```

# Sub-Processes (Multi-Instance)

> TODO multi-input (ex. topology + -> aggregate first?! /// NO: only one collection, rest is coming from parent process

- Input Collection: `processInputs.collectionInput`
- Input Element: `collectionItem` _(static)_
  > TODO infer from model?
- Output Collection: `firstSubProcess`
- Output Element: `someSubProcessActivity`

# Notes

repeated service execution overwrites!

- good: retry -> no adaptations needed
- bad: sub-processes?

> TODO global output handling?
