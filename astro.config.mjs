import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    starlight({
      title: 'Training Portal',
      logo: {
        light: './src/assets/light-logo.png',
        dark: './src/assets/dark-logo.png',
        replacesTitle: true,
      },
      favicon: './src/assets/favicon.ico',
      head: [
        // Add a custom meta tag to define the author of all pages.
        {
          tag: 'meta',
          attrs: {
            name: 'og:image',
            content: 'https://raw.githubusercontent.com/Liberty-Broadcast-Experience/img/main/training%20portal%20share.jpg',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'og:title',
            content: 'LBX Training Portal',
          },
        },
      ],
      customCss: ['./src/styles.css'],
      social: {
        instagram: 'https://instagram.com/libertyu_production',
        email: 'mailto:campusproduction@liberty.edu',
      },
      sidebar: [
        {
          label: 'Video',
          // Each item here is one entry in the navigation menu.
          autogenerate: {
            directory: 'portal/video/',
          },
        },
        {
          label: 'Audio',
          autogenerate: {
            directory: 'portal/audio/',
          },
        },
        {
          label: 'Lighting',
          // Each item here is one entry in the navigation menu.
          autogenerate: {
            directory: 'portal/lighting/',
          },
        },
        {
          label: 'Stage',
          // Each item here is one entry in the navigation menu.
          autogenerate: {
            directory: 'portal/stage/',
          },
        },
        {
          label: 'LED',
          // Each item here is one entry in the navigation menu.
          autogenerate: {
            directory: 'portal/led/',
          },
        },
        {
          label: 'General',
          // Each item here is one entry in the navigation menu.
          autogenerate: {
            directory: 'portal/general/',
          },
        },
        {
          label: 'Sports',
          // Each item here is one entry in the navigation menu.
          autogenerate: {
            directory: 'portal/sports/',
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
