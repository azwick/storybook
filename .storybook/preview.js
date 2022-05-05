export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      tabletPortrait: {
        name: 'Mobile',
        styles: {
          width: '768px',
          height: '990px',
        },
      },
      tabletLandscape: {
        name: 'Tablet',
        styles: {
          width: '1080',
          height: '768px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1930',
          height: '1080',
        },
      },
    },
  },
  layout: 'centered',
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
}