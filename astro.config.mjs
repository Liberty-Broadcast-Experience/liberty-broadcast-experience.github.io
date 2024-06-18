import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    starlight({
      title: 'Training Portal',
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
          label: 'General',
          autogenerate: {
            directory: 'portal/general/',
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
