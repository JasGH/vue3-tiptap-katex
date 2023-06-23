/* These are import statements in JavaScript that import necessary modules and components for creating
a custom node in the Tiptap editor. */
import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import TiptapInteractiveImageUpload from './TiptapInteractiveImageUpload.vue'

/* This code exports a custom node for the Tiptap editor in JavaScript. The node is created using the
`Node.create()` method and has various properties such as `name`, `group`, `atom`, `inline`, and
`draggable`. It also has attributes such as `url`, `width`, `height`, `justify`, `vertical`, and
`horizontal`. The `parseHTML()` method specifies how the node should be parsed from HTML, while the
`renderHTML()` method specifies how it should be rendered as HTML. Finally, the `addNodeView()`
method specifies how the node should be rendered in the editor using a Vue component. */
export default Node.create({
  name: 'TiptapInteractiveImageUploadInline',

  group: 'inline',

  atom: true,
  inline: true,

  draggable: true,

  addAttributes() {
    return {
      url: {
        default: '',
        /* This code is defining the `url` attribute for the custom node in the Tiptap editor. The
        `parseHTML` method is parsing the `src` attribute of an HTML `img` element and returning its
        value as the `url` attribute of the custom node. The `renderHTML` method is returning an
        object with a `src` property set to the value of the `url` attribute passed in as an
        argument. This is used to render the custom node as an `img` element with the `src`
        attribute set to the value of the `url` attribute. */
        parseHTML: (element) => element.getAttribute('src'),
        renderHTML: (attributes) => ({
          src: attributes.url
        })
      },
      width: {
        default: 0
      },
      height: {
        default: 0
      },
      justify: {
        default: 'center',
        renderHTML: () => ({})
      },
      vertical: {
        default: 0,
        /* This code is defining the `parseHTML` method for the custom node in the Tiptap editor.
        Specifically, it is parsing the `data-vertical` attribute of an HTML element and returning
        its value as an integer. If the `data-vertical` attribute is not present or cannot be parsed
        as an integer, it returns 0. This value is then used as the `vertical` attribute of the
        custom node. */
        parseHTML: (element) => {
          const vertical = parseInt(element.getAttribute('data-vertical'), 10)
          if (Number.isNaN(vertical)) {
            return 0
          }
          return vertical
        },
       /* This code is defining the `renderHTML` method for the `vertical` attribute of the custom node
       in the Tiptap editor. Specifically, it is returning an object with two properties:
       `data-vertical` and `style`. The `data-vertical` property is set to the value of the
       `vertical` attribute passed in as an argument. The `style` property is a string that sets the
       `vertical-align` CSS property to a negative value of the `vertical` attribute multiplied by
       -1 and appended with the `px` unit. This is used to vertically align the custom node in the
       editor. */
        renderHTML: (attributes) => ({
          'data-vertical': attributes.vertical,
          style: `vertical-align: ${-1 * attributes.vertical}px`
        })
      },
      horizontal: {
        default: 0,
        renderHTML: () => ({})
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'img'
      }
    ]
  },

/* The `renderHTML()` method is defining how the custom node should be rendered as HTML. In this case,
it is returning an array with the tag name `img` and the `HTMLAttributes` object passed in as an
argument, which contains all the attributes of the custom node. The `mergeAttributes()` function is
used to merge the `HTMLAttributes` object with any additional attributes that may be added later.
This ensures that all attributes are included in the final HTML output. */
  renderHTML({ HTMLAttributes }) {
    return ['img', mergeAttributes(HTMLAttributes)]
  },

 /**
  * This function returns a VueNodeViewRenderer for TiptapInteractiveImageUpload.
  * @returns The `addNodeView()` method is returning a Vue component that is used to render a custom
  * node view for Tiptap editor. The component being returned is
  * `VueNodeViewRenderer(TiptapInteractiveImageUpload)`, which is a higher-order component that takes
  * `TiptapInteractiveImageUpload` as an argument and returns a new component that can be used as a
  * node view in Tiptap
  */
  addNodeView() {
    return VueNodeViewRenderer(TiptapInteractiveImageUpload)
  }
})
