const sideBarRoutes = [
    {
        text: 'Getting Started',
        items: [
            { text: 'main libraries explained', link: '/gettingStarted/main-libraries.md' },
            { text: 'How does It Work?',
                items: [
                    { text: 'tiptap interactive katex', link: '/gettingStarted/HDIW/mathlive-extention' },
                    { text: 'formula rendering flow', link: '/gettingStarted/HDIW/theFormulaFlow' }
                ]
            }
        ]
    },
    {
        text: 'main package files',
        items: [
            { text: 'Components',
                items: [
                    { text: 'formula',
                        items: [
                            { text: 'TiptapInteractiveKatex', link: '/mainPackage/components/formula/TiptapInteractiveKatex.md' },
                            // { text: 'Getting Started', link: '/mainPackage/components/' }
                        ]
                    },
                    { text: 'ImageUpload',
                        items: [
                            { text: 'TiptapInteractiveImageUpload', link: '/mainPackage/components/ImageUpload/TiptapInteractiveImageUpload.md' },
                            // { text: 'Getting Started', link: '/mainPackage/components/ImageUpload/' }
                        ]
                    },
                    { text: 'poem',
                        items: [
                            { text: 'mesra', link: '/mainPackage/components/poem/mesra.md' },
                            { text: 'TiptapInteractivePoem', link: '/mainPackage/components/poem/TiptapInteractivePoem.md' }
                        ]
                    },
                    { text: 'reading',
                        items: [
                            { text: 'TiptapInteractiveReading', link: '/mainPackage/components/reading/TiptapInteractiveReading.md' },
                            // { text: 'Getting Started', link: '/mainPackage/components/reading' }
                        ]
                    },
                    { text: 'EditTableModal', link: '/mainPackage/components/EditTableModal.md' },
                    { text: 'vue3-tiptap-katex', link: '/mainPackage/components/vue3-tiptap-katex' },
                ]
            }
        ]
    },
    {
        text: 'core package files',
        items: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Getting Started',
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started',
                        items: [
                            { text: 'Introduction', link: '/introduction' },
                            { text: 'Getting Started', link: '/getting-started' }
                        ]
                    }
                ]
            }
        ]
    }
]
export default sideBarRoutes
