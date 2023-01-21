const COMPONENT_INDEX = 0
const TYPE_INDEX = 1

interface FileNameTokens {
  component: string
  type: string[]
}

export function getNgFilenameTokens(name: string): FileNameTokens {
  const tokens = name.split('.')
  if (tokens.length < 3 || tokens.length > 4) {
    throw new Error('Invalid filename')
  }

  const component = tokens[COMPONENT_INDEX]
  let type = [tokens[TYPE_INDEX]]

  if (tokens[TYPE_INDEX] === 'stories') {
    type = ['component', 'page']
  }

  return {
    component,
    type,
  }
}

export function getStyleFile(name: string, type: string): string[] {
  const tokens = getNgFilenameTokens(name)
  const fileNames = tokens.type.map(
    (tokenType: string) => `${tokens.component}.${tokenType}.${type}`
  )
  return fileNames
}

export function getHtmlFile(name: string): string[] {
  const tokens = getNgFilenameTokens(name)
  const fileNames = tokens.type.map((type: string) => `${tokens.component}.${type}.html`)
  return fileNames
}

export function getSpecFile(name: string): string[] {
  const tokens = getNgFilenameTokens(name)
  const fileNames = tokens.type.map((type: string) => `${tokens.component}.${type}.spec.ts`)
  return fileNames
}

export function getTypescriptFile(name: string): string[] {
  const tokens = getNgFilenameTokens(name)
  const fileNames = tokens.type.map((type: string) => `${tokens.component}.${type}.ts`)
  return fileNames
}

export function getStorybookFile(name: string): string[] {
  const tokens = getNgFilenameTokens(name)
  return [`${tokens.component}.${tokens.type}.stories.ts`, `${tokens.component}.stories.ts`]
}
