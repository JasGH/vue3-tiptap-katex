/* These lines of code are importing necessary dependencies for creating a custom ProseMirror node
called `mesra`. */
import { Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import mesra from './mesra.vue'

export default Node.create({
  name: 'mesra',

  group: 'block',

  /* `content: 'inline*',` is defining the content that can be contained within the `mesra` node. In
  this case, it allows for any number of inline nodes to be contained within the `mesra` node. The
  `*` indicates that the content is optional and can be empty. */
  content: 'inline*',

 /* `parseHTML()` is a method that defines how the node should be parsed from HTML. In this case, it
 returns an array with an object that represents an HTML element `<div>` with a class of "mesra".
 The `getAttrs` function is used to check if the element has a class of "mesra". If it does, it will
 be parsed as a `mesra` node. This method is used by the editor to convert HTML content into a
 ProseMirror document. */
  parseHTML() {
    return [
      {
        tag: 'div',
        getAttrs: (element) => element.getAttribute('class') === 'mesra'
      }
    ]
  },

  /* `renderHTML()` is a method that defines how the node should be rendered as HTML. In this case, it
  returns an array that represents an HTML element `<div>` with a class of "mesra" and no content.
  The `0` at the end represents the position where the content of the node should be inserted. */
  renderHTML() {
    return ['div', { class: 'mesra' }, 0]
  },

 /**
  * The function returns a Vue node view renderer for a given input.
  * @returns A VueNodeViewRenderer component with the parameter "mesra".
  */
  addNodeView() {
    return VueNodeViewRenderer(mesra)
  }
})
