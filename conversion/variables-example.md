# Global Inputs

```json
{
  "globalInputs": {
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
    ]
  },
  "firstActivityId": {
    "firstOutput": {
      "@url": "...4",
      "anotherAttribute": "abc"
    },
    "secondOutput": [
      // ... (collection)
    ]
  },
  "secondActivityId": {
    // ...
  }
}
```

# Service Input Mapping

(Payload)

```json
{
  "firstInputMethodData": globalInputs.singleInput,
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

> TODO globalInputs -> processInputs

> TODO multi-input (ex. topology + -> aggregate first?! /// NO: only one collection, rest is coming from parent process

- Input Collection: `globalInputs.collectionInput`
- Input Element: `collectionItem` _(static)_
- Output Collection: `firstSubProcess`
- Output Element: `someSubProcessActivity`

# Notes

repeated service execution overwrites!

- good: retry -> no adaptations needed
- bad: sub-processes?

> TODO global output handling?
