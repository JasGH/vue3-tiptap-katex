import { Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import TiptapInteractiveReading from './TiptapInteractiveReading.vue'

/* This code exports a custom Node for use in the Tiptap editor. The Node is named
'TiptapInteractiveReading' and is a block-level element that can contain other block-level elements.
The `parseHTML()` method is used to parse the HTML and create the Node, while the `renderHTML()`
method is used to render the Node as HTML. The `addNodeView()` method is used to add a Vue component
as the Node's view. The Vue component used is `TiptapInteractiveReading`. */
export default Node.create({
  name: 'TiptapInteractiveReading',

  group: 'block',

  content: 'block+',

 /* The `parseHTML()` method is used to parse the HTML and create the Node. In this specific code, it
 returns an array with a single object that describes the HTML element that should be parsed as this
 custom Node. The object specifies that the element should be a `div` with a class of
 `reading-duplicate`. The `getAttrs` function is used to check if the element has the specified
 class and return its attributes as an object if it does. */
  parseHTML() {
    return [
      {
        tag: 'div',
        getAttrs: (element) => element.getAttribute('class') === 'reading-duplicate'
      }
    ]
  },

  /* The `renderHTML()` method is used to define how the Node should be rendered as HTML. In this
  specific code, it returns an array that represents an HTML element. The element is a `div` with a
  class of `reading-duplicate` and no content. This is the HTML representation of the custom Node
  when it is rendered in the editor. */
  renderHTML() {
    return ['div', { class: 'reading-duplicate' }, 0]
  },

 /**
  * This function returns a VueNodeViewRenderer for TiptapInteractiveReading.
  * @returns The `addNodeView()` method is returning a Vue component that renders a
  * TiptapInteractiveReading node view. The `VueNodeViewRenderer` is a helper function provided by
  * Tiptap that creates a Vue component for a node view.
  */
  addNodeView() {
    return VueNodeViewRenderer(TiptapInteractiveReading)
  }
})
