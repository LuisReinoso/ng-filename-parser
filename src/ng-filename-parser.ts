const COMPONENT_INDEX = 0

export function getNgFilenameTokens(name: string) {
  const tokens = name.split('.')
  if (tokens.length < 3 || tokens.length > 4) {
    throw new Error('Invalid filename')
  }

  const component = tokens.splice(COMPONENT_INDEX, 1).join()
  let type = tokens.splice(COMPONENT_INDEX, 1).join()

  if (type === 'stories') {
    type = 'component'
  }

  return {
    component,
    type,
  }
}

export function getStyleFile(name: string, type: string) {
  const tokens = getNgFilenameTokens(name)
  return `${tokens.component}.${tokens.type}.${type}`
}

export function getHtmlFile(name: string) {
  const tokens = getNgFilenameTokens(name)
  return `${tokens.component}.${tokens.type}.html`
}

export function getSpecFile(name: string) {
  const tokens = getNgFilenameTokens(name)
  return `${tokens.component}.${tokens.type}.spec.ts`
}

export function getTypescriptFile(name: string) {
  const tokens = getNgFilenameTokens(name)
  return `${tokens.component}.${tokens.type}.ts`
}

export function getStorybookFile(name: string) {
  const tokens = getNgFilenameTokens(name)

  if (tokens.type === 'component') {
    return `${tokens.component}.stories.ts`
  }
  return `${tokens.component}.${tokens.type}.stories.ts`
}
