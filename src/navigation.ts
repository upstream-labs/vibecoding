import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Project',
      links: [
        {
          text: 'Features',
          href: getPermalink('/#features'),
        },
        {
          text: 'Platforms',
          href: getPermalink('/#platforms'),
        },
        {
          text: 'Technology',
          href: 'https://github.com/project-robius/robrix',
          target: '_blank'
        },
        {
          text: 'Talks & Presentations',
          href: getPermalink('/talks'),
        },
      ],
    },
    {
      text: 'Development',
      links: [
        {
          text: 'Getting Started',
          href: 'https://github.com/project-robius/robrix#building-running-robrix-on-desktop',
          target: '_blank'
        },
        {
          text: 'Contributing',
          href: 'https://github.com/project-robius/robrix/blob/main/CONTRIBUTING.md',
          target: '_blank'
        },
        {
          text: 'Project Tracker',
          href: 'https://github.com/orgs/project-robius/projects/4/',
          target: '_blank'
        },
        {
          text: 'Report Issues',
          href: 'https://github.com/project-robius/robrix/issues',
          target: '_blank'
        },
      ],
    },
    {
      text: 'Community',
      links: [
        {
          text: 'Matrix Room',
          href: 'https://matrix.to/#/#robius-robrix:matrix.org',
          target: '_blank'
        },
        {
          text: 'Project Robius',
          href: 'https://github.com/project-robius',
          target: '_blank'
        },
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
      ],
    },
  ],
  actions: [
    { text: 'View Source', href: 'https://github.com/project-robius/robrix', target: '_blank' },
    { text: 'Download', href: 'https://github.com/project-robius/robrix/releases', target: '_blank', variant: 'primary' }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Project',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Platforms', href: getPermalink('/#platforms') },
        { text: 'GitHub Repository', href: 'https://github.com/project-robius/robrix', target: '_blank' },
        { text: 'Downloads', href: 'https://github.com/project-robius/robrix/releases', target: '_blank' },
      ],
    },
    {
      title: 'Technology',
      links: [
        { text: 'Project Robius', href: 'https://github.com/project-robius', target: '_blank' },
        { text: 'Makepad UI', href: 'https://github.com/makepad/makepad', target: '_blank' },
        { text: 'Rust Language', href: 'https://rust-lang.org', target: '_blank' },
        { text: 'Matrix Protocol', href: 'https://matrix.org', target: '_blank' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Matrix Chat', href: 'https://matrix.to/#/#robius-robrix:matrix.org', target: '_blank' },
        { text: 'Project Tracker', href: 'https://github.com/orgs/project-robius/projects/4/', target: '_blank' },
        { text: 'Report Issues', href: 'https://github.com/project-robius/robrix/issues', target: '_blank' },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Related',
      links: [
        { text: 'Matrix.org', href: 'https://matrix.org', target: '_blank' },
        { text: 'Element X', href: 'https://element.io', target: '_blank' },
        { text: 'GOSIM Conference', href: 'https://gosim.org', target: '_blank' },
        { text: 'Rust Foundation', href: 'https://rustfoundation.org', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'License', href: 'https://github.com/project-robius/robrix/blob/main/LICENSE' },
    { text: 'Code of Conduct', href: 'https://github.com/project-robius/robrix/blob/main/CODE_OF_CONDUCT.md' },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/project-robius/robrix' },
    { ariaLabel: 'Matrix', icon: 'tabler:brand-matrix', href: 'https://matrix.to/#/#robius-robrix:matrix.org' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © 2024 Project Robius. Robrix is open-source software available under permissive licensing.
  `,
};
