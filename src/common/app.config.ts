/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'General-AI',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'General-AI',
  },
  Meta: {
    Description: 'Launch General-AI to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'General-AI | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@davidy00n',
  },
  URIs: {
    Home: 'https://yoon.ai',
    // App: 'https://general.yoon.ai',
    CardImage: 'https://yoon.ai/img/yoongpt.png',
    OpenRepo: 'https://github.com/davidyoondrums/general-ai',
    OpenProject: 'https://github.com/users/enricoros/projects/4',
    SupportInvite: 'https://discord.gg/MkH4qj2Jp9',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: 'https://big-agi.com/privacy',
  },
};