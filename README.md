# ng filename parser

Angular file name convention parser

```
src/                                    project source code
|- app/
|  |- user/                             user module
|  |- components/                       dummy components
|  |  |- menu/
|  |  |  |- menu.component.html
|  |  |  |- menu.component.scss
|  |  |  |- menu.component.spec.ts
|  |  |  |- menu.component.ts
|  |  |  |- menu.stories.ts
|  |- pages/                            smart components
|  |  |- dashboard/
|  |  |  |- dashboard.page.html
|  |  |  |- dashboard.page.scss
|  |  |  |- dashboard.page.spec.ts
|  |  |  |- dashboard.page.stories.ts
|  |  |  |- dashboard.page.ts
|  +- ...
```

### Installation

```bash
npm install --save ng-filename-parser
```

### Usage

Import required helper function.

```typescript
import {
  getNgFilenameTokens,
  getStyleFile,
  getHtmlFile,
  getSpecFile,
  getTypescriptFile,
  getStorybookFile,
} from 'ng-filename-parser'
```

#### getNgFilenameTokens

Pass as argument the angular project filename to tokenizer to `getNgFilenameTokens`

```typescript
const filename = '/home/angular/project/src/app/app.component.ts'
const tokens = getNgFilenameTokens(filename)
```

This will return:

```
{
  component: 'app',
  type: 'component'
}
```

#### getFiles functions

Based on filename tokens user could request filename of styles/ts/stories/spec files.

- `getStyleFile`
- `getHtmlFile`
- `getSpecFile`
- `getTypescriptFile`
- `getStorybookFile`

Checkout testing files for more information.

### License

Luis Reinoso 2021 [MIT License](LICENSE)
