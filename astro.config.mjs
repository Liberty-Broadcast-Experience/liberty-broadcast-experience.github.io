import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    starlight({
      title: 'LBX Training',
      logo: {
        light: './src/assets/light-logo.png',
        dark: './src/assets/dark-logo.png',
        replacesTitle: true,
      },
      favicon: 'favicon.ico',
      lastUpdated: false,
      components: {
        // Override the default `SocialIcons` component.
        Hero: './src/components/Hero.astro',
        Card: './src/components/Card.astro',
      },
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
          tag: 'script',
          attrs: {
            src: `https://www.googletagmanager.com/gtag/js?id=G-5LQ11JNNVR`,
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
      
            gtag('config', 'G-5LQ11JNNVR');
          `,
        },
        {
          tag: 'meta',
          attrs: {
            name: 'og:title',
            content: 'LBX Training Portal',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'manifest',
            href: `/manifest.json?v=${new Date().getTime()}`, // Ensures a fresh version
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            sizes: '1024x1024',
            href: '../src/assets/Icons/ios-1024.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            sizes: '512x512',
            href: '../src/assets/Icons/ios-512.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'mobile-web-app-capable',
            content: 'yes',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'apple-mobile-web-app-title',
            content: 'Training',
          },
        },
        // Apple touch startup images
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-2048-2732.jpg',
            media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-2732-2048.jpg',
            media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-1668-2388.jpg',
            media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-2388-1668.jpg',
            media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-1536-2048.jpg',
            media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-2048-1536.jpg',
            media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-1290-2796.jpg',
            media: '(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-2796-1290.jpg',
            media: '(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-1179-2556.jpg',
            media: '(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-2556-1179.jpg',
            media: '(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-1170-2532.jpg',
            media: '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-2532-1170.jpg',
            media: '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-750-1334.jpg',
            media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-1334-750.jpg',
            media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-640-1136.jpg',
            media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-1320-2868.jpg',
            media: '(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-1206-2622.jpg',
            media: 'screen and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-1290-2796.jpg',
            media: '(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-1179-2556.jpg',
            media: '(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-startup-image',
            href: 'pwa/splash/apple-splash-1136-640.jpg',
            media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
          },
        }
      ],
      customCss: ['./src/styles.css'],
      social: {
        instagram: 'https://instagram.com/libertyu_production',
        email: 'mailto:lepatterson1@liberty.edu?cc=dbwalker5@liberty.edu,sedonigan@liberty.edu',
        microsoftTeams: 'https://teams.microsoft.com/l/chat/0/0?users=lepatterson1@liberty.edu',
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
