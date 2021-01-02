import {
  getNgFilenameTokens,
  getStyleFile,
  getHtmlFile,
  getSpecFile,
  getTypescriptFile,
  getStorybookFile
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
    expect(ngFilename.type).toBe('component')
  })

  it('should return component filetype css', () => {
    const filename = 'testing.component.css'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toBe('component')
  })

  it('should return component filetype scss', () => {
    const filename = 'testing.component.scss'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toBe('component')
  })

  it('should return component filetype spec', () => {
    const filename = 'testing.component.spec.ts'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toBe('component')
  })

  it('should return component filetype page', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toBe('page')
  })

  it('should return error when filename is not valid', () => {
    const filename = 'testing.component.spec.ts.sadsad'
    try {
      const ngFilename = getNgFilenameTokens(filename)
    } catch (error) {
      expect(error.message).toBe('Invalid filename');
    }
  })

  it('should return style css file  given typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getStyleFile(filename, 'css')
    expect(ngFilename).toBe('testing.component.css')
  })

  it('should return style scss file  given typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getStyleFile(filename, 'scss')
    expect(ngFilename).toBe('testing.component.scss')
  })

  it('should return style sass file  given typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getStyleFile(filename, 'sass')
    expect(ngFilename).toBe('testing.component.sass')
  })

  it('should return html file style given typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getHtmlFile(filename)
    expect(ngFilename).toBe('testing.component.html')
  })

  it('should return spec file style given typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getSpecFile(filename)
    expect(ngFilename).toBe('testing.component.spec.ts')
  })

  it('should return spec file style given typescript', () => {
    const filename = 'testing.component.ts'
    const ngFilename = getTypescriptFile(filename)
    expect(ngFilename).toBe('testing.component.ts')
  })

  it('should return storybook file given typescript', () => {
    const filename = 'testing.component.ts';
    const ngFilename = getStorybookFile(filename);
    expect(ngFilename).toBe('testing.stories.ts');
  });

  it('should return typescript file given stories file', () => {
    const filename = 'testing.stories.ts';
    const ngFilename = getTypescriptFile(filename);
    expect(ngFilename).toBe('testing.component.ts');
  });
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
    expect(ngFilename.type).toBe('page')
  })

  it('should return component filetype css', () => {
    const filename = 'testing.page.css'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toBe('page')
  })

  it('should return component filetype scss', () => {
    const filename = 'testing.page.scss'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toBe('page')
  })

  it('should return component filetype spec', () => {
    const filename = 'testing.page.spec.ts'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toBe('page')
  })

  it('should return component filetype page', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getNgFilenameTokens(filename)
    expect(ngFilename.type).toBe('page')
  })

  it('should return error when filename is not valid', () => {
    const filename = 'testing.page.spec.ts.sadsad'
    try {
      const ngFilename = getNgFilenameTokens(filename)
    } catch (error) {
      expect(error.message).toBe('Invalid filename');
    }
  })

  it('should return style css file  given typescript', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getStyleFile(filename, 'css')
    expect(ngFilename).toBe('testing.page.css')
  })

  it('should return style scss file  given typescript', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getStyleFile(filename, 'scss')
    expect(ngFilename).toBe('testing.page.scss')
  })

  it('should return style sass file given typescript', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getStyleFile(filename, 'sass')
    expect(ngFilename).toBe('testing.page.sass')
  })

  it('should return html file style given typescript', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getHtmlFile(filename)
    expect(ngFilename).toBe('testing.page.html')
  })

  it('should return spec file style given typescript', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getSpecFile(filename)
    expect(ngFilename).toBe('testing.page.spec.ts')
  })

  it('should return spec file style given typescript', () => {
    const filename = 'testing.page.ts'
    const ngFilename = getTypescriptFile(filename)
    expect(ngFilename).toBe('testing.page.ts')
  })

  it('should return storybook file given typescript', () => {
    const filename = 'testing.page.ts';
    const ngFilename = getStorybookFile(filename);
    expect(ngFilename).toBe('testing.stories.ts');
  });

  it('should return typescript file given stories file', () => {
    const filename = 'testing.page.ts';
    const ngFilename = getTypescriptFile(filename);
    expect(ngFilename).toBe('testing.page.ts');
  });

  it('should return typescript file given stories file', () => {
    const filename = 'testing.page.ts';
    const ngFilename = getTypescriptFile(filename);
    expect(ngFilename).toBe('testing.page.ts');
  });
})
