# Issue Template Parser 📜

[![test](https://github.com/GrantBirki/issue-template-parser/actions/workflows/test.yml/badge.svg)](https://github.com/GrantBirki/issue-template-parser/actions/workflows/test.yml) [![lint](https://github.com/GrantBirki/issue-template-parser/actions/workflows/lint.yml/badge.svg)](https://github.com/GrantBirki/issue-template-parser/actions/workflows/lint.yml) [![package-check](https://github.com/GrantBirki/issue-template-parser/actions/workflows/package-check.yml/badge.svg)](https://github.com/GrantBirki/issue-template-parser/actions/workflows/package-check.yml) [![codeql](https://github.com/GrantBirki/issue-template-parser/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/GrantBirki/issue-template-parser/actions/workflows/codeql-analysis.yml) [![coverage](./badges/coverage.svg)](./badges/coverage.svg)

A GitHub Action to convert issues created from issue templates into machine readable JSON

## Setup

```yaml
- uses: GrantBirki/issue-template-parser@vX.X.X
  id: issue-parser
  with:
    body: ${{ github.event.issue.body }}

- run: echo ${{ steps.issue-parser.outputs.json }}
```

## Inputs

| Input | Required? | Default | Description |
| ----- | --------- | ------- | ----------- |
| `body` | `true` | `${{ github.event.issue.body }}` | The RAW body of the issue to parse if you want to override the default |

## Outputs

| Output | Description |
| ------ | ----------- |
| json | A JSON string of the parsed issue |

## Example

Given the following issue body:

```md
### Your contact details

me@me.com

### What happened?

A bug happened!

### Version

1.0.0

### What browsers are you seeing the problem on?

Chrome, Safari

### What else?

- [x] Never give up
- [ ] Hot Dog is a Sandwich
```

The actions output will be

```json
{
  "your_contact_details": "me@me.com",
  "what_happened?": "A bug happened!",
  "version": "1.0.0",
  "what_browsers_are_you_seeing_the_problem_on?": "Chrome, Safari",
  "code_of_conduct": "- [x] Never give up\r\n- [ ] Hot Dog is a Sandwich"
}
```

## Releasing a New Version 🏷️

To release a new version run `script/release` and then publish the following release
