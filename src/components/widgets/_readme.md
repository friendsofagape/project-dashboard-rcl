DashBorad Widgets using the basic UI components and JSON

- JSON in the same structure needed to render these widgets
- JSON object need to pass to the widget as a prop
- ProjectName and books keys of JSON is editable and the values need to be pass as basePath props

### JSON Structure

- ProjectName, books are editable with custom key names
- New keys should pass as basePath props like "projectName/ooks"

```json
{
  "version": "0.1.0",
  "projects": {
    "projectName": {
      "books": {
        "tit": {
          "totalVerses": [number, number,number],
          "spellingErrors": [number, number,number],
          "usfmTagErrors": [number, number,number],
          "suspiciousWhitespaces": [number, number,number],
          "emptyVerses": [number, number,number],
          "months": {
            "jan": {
              "validated": [number, number,number],
              "inprogress": [number, number,number],
              "pending": [number, number,number],
              "TotalHours": [number, number,number]
            },
            "feb": {
              "validated": [number, number,number],
              "inprogress": [number, number,number],
              "pending": [number, number,number],
              "TotalHours": [number, number,number]
            },
            "mar": {
              "validated": [number, number,number],
              "inprogress": [number, number,number],
              "pending": [number, number,number],
              "TotalHours": [number, number,number]
            },
            "apr": {
              "validated": [number, number,number],
              "inprogress": [number, number,number],
              "pending": [number, number,number],
              "TotalHours": [number, number,number]
            },
            "may": {
              "validated": [number, number,number],
              "inprogress": [number, number,number],
              "pending": [number, number,number],
              "TotalHours": [number, number,number]
            },
            "jun": {
              "validated": [number, number,number],
              "inprogress": [number, number,number],
              "pending": [number, number,number],
              "TotalHours": [number, number,number]
            },
            "jul": {
              "validated": [number, number,number],
              "inprogress": [number, number,number],
              "pending": [number, number,number],
              "TotalHours": [number, number,number]
            },
            "aug": {
              "validated": [number, number,number],
              "inprogress": [number, number,number],
              "pending": [number, number,number],
              "TotalHours": [number, number,number]
            },
            "sep": {
              "validated": [number, number,number],
              "inprogress": [number, number,number],
              "pending": [number, number,number],
              "TotalHours": [number, number,number]
            },
            "oct": {
              "validated": [number, number,number],
              "inprogress": [number, number,number],
              "pending": [number, number,number],
              "TotalHours": [number, number,number]
            },
            "nov": {
              "validated": [number, number,number],
              "inprogress": [number, number,number],
              "pending": [number, number,number],
              "TotalHours": [number, number,number]
            },
            "dec": {
              "validated": [number, number,number],
              "inprogress": [number, number,number],
              "pending": [number, number,number],
              "TotalHours": [number, number,number]
            }
          }
        }
      }
    }
  }
}
```
