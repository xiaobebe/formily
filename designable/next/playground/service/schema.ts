import { Engine } from '@designable/core'
import { transformToSchema, transformToTreeNode } from '@designable/formily'
import { Message as message } from '@alifd/next'

export const saveSchema = (designer: Engine) => {
  localStorage.setItem(
    'formily-schema',
    JSON.stringify(
      transformToSchema(designer.getCurrentTree(), {
        designableFieldName: 'DesignableField',
        designableFormName: 'Root',
      })
    )
  )
  message.success('Save Success')
}

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem('formily-schema')), {
        designableFieldName: 'DesignableField',
        designableFormName: 'Root',
      })
    )
  } catch {}
}
