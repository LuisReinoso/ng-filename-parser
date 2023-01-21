import {
  getNgFilenameTokens,
  getStyleFile,
  getHtmlFile,
  getSpecFile,
  getTypescriptFile,
  getStorybookFile,
} from '../src/ng-filename-parser'

describe('angular filename parser by component', () => {
  it('should return component name', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.component).toBe('testing')
  })

  it('should return component filetype typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toEqual(['component'])
  })

  it('should return component filetype css', () => {
    const filename = 'testing.component.css'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toEqual(['component'])
  })

  it('should return component filetype scss', () => {
    const filename = 'testing.component.scss'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toEqual(['component'])
  })

  it('should return testing page ts', () => {
    const filename = 'testing.stories.ts'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toEqual(['component', 'page'])
  })

  it('should return component filetype spec', () => {
    const filename = 'testing.component.spec.ts'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toEqual(['component'])
  })

  it('should return component filetype page', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toEqual(['page'])
  })

  it('should return error when filename is not valid', () => {
    const filename = 'testing.component.spec.ts.sadsad'
    try {
      const ngFilename = getNgFilenameTokens(filename)
    } catch (error) {
      expect(error.message).toBe('Invalid filename')
    }
  })

  it('should return style css file  given typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getStyleFile(filename, 'css')
    expect(ngFilename).toEqual(['testing.component.css'])
  })

  it('should return style scss file  given typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getStyleFile(filename, 'scss')
    expect(ngFilename).toEqual(['testing.component.scss'])
  })

  it('should return style sass file  given typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getStyleFile(filename, 'sass')
    expect(ngFilename).toEqual(['testing.component.sass'])
  })

  it('should return html file style given typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getHtmlFile(filename)
    expect(ngFilename).toEqual(['testing.component.html'])
  })

  it('should return spec file style given typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getSpecFile(filename)
    expect(ngFilename).toEqual(['testing.component.spec.ts'])
  })

  it('should return spec file style given typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getTypescriptFile(filename)
    expect(ngFilename).toEqual(['testing.component.ts'])
  })

  it('should return storybook file given typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getStorybookFile(filename)
    expect(ngFilename).toEqual(['testing.component.stories.ts', 'testing.stories.ts'])
  })

  it('should return typescript file given stories file', () => {
    const filename = 'testing.stories.ts'
    const ngFilename = getTypescriptFile(filename)
    expect(ngFilename).toEqual(['testing.component.ts', 'testing.page.ts'])
  })
})

describe('angular filename parser by page', () => {
  it('should return component name', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.component).toBe('testing')
  })

  it('should return component filetype typescript', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toEqual(['page'])
  })

  it('should return component filetype css', () => {
    const filename = 'testing.page.css'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toEqual(['page'])
  })

  it('should return component filetype scss', () => {
    const filename = 'testing.page.scss'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toEqual(['page'])
  })

  it('should return component filetype spec', () => {
    const filename = 'testing.page.spec.ts'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toEqual(['page'])
  })

  it('should return component filetype page', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toEqual(['page'])
  })

  it('should return error when filename is not valid', () => {
    const filename = 'testing.page.spec.ts.sadsad'
    try {
      const ngFilename = getNgFilenameTokens(filename)
    } catch (error) {
      expect(error.message).toBe('Invalid filename')
    }
  })

  it('should return style css file  given typescript', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getStyleFile(filename, 'css')
    expect(ngFilename).toEqual(['testing.page.css'])
  })

  it('should return style scss file  given typescript', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getStyleFile(filename, 'scss')
    expect(ngFilename).toEqual(['testing.page.scss'])
  })

  it('should return style sass file given typescript', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getStyleFile(filename, 'sass')
    expect(ngFilename).toEqual(['testing.page.sass'])
  })

  it('should return page spec ts file given stories', () => {
    const filename = 'testing.stories.ts'
    const ngFilename = getSpecFile(filename)
    expect(ngFilename).toEqual(['testing.component.spec.ts', 'testing.page.spec.ts'])
  })

  it('should return html file style given typescript', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getHtmlFile(filename)
    expect(ngFilename).toEqual(['testing.page.html'])
  })

  it('should return spec file style given typescript', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getSpecFile(filename)
    expect(ngFilename).toEqual(['testing.page.spec.ts'])
  })

  it('should return storybook file given typescript', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getStorybookFile(filename)
    expect(ngFilename).toEqual(['testing.page.stories.ts', 'testing.stories.ts'])
  })

  it('should return typescript file given stories file', () => {
    const filename = 'testing.page.stories.ts'
    const ngFilename = getTypescriptFile(filename)
    expect(ngFilename).toEqual(['testing.page.ts'])
  })

  it('should return styles file given stories file', () => {
    const filename = 'testing.stories.ts'
    const ngFilename = getStyleFile(filename, 'scss')
    expect(ngFilename).toEqual(['testing.component.scss', 'testing.page.scss'])
  })

  it('should return html file given stories file', () => {
    const filename = 'testing.stories.ts'
    const ngFilename = getHtmlFile(filename)
    expect(ngFilename).toEqual(['testing.component.html', 'testing.page.html'])
  })
})
