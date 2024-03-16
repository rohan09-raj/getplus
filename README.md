# Plus Gold
## Description
Plus Gold is a clone of the index page of https://plusgold.in/. Made for assignment purposes

The project is deployed on [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) : https://getplus.vercel.app/

## Frameworks Used
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Development Setup
- Clone the repository - https://github.com/rohan09-raj/getplus.git
- Open the repository in VS Code or any similar editor
- Install the required dependencies:title
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
- Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- You can edit the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Comparison with existing website
- The SEO is **10% better** than the current website according to https://searchenginereports.net/website-seo-score-checker

Cloned | Original
:-------------------------:|:-------------------------:
![image](https://github.com/rohan09-raj/getplus/assets/78433013/6e3cf863-7ba3-4a97-aece-d24e77c6b387) | ![image](https://github.com/rohan09-raj/getplus/assets/78433013/b018bf60-9050-4b48-bf5d-ebc1d0ea06ce)
  
- It can be further improved if we deploy it on a custom domain
![image](https://github.com/rohan09-raj/getplus/assets/78433013/81ab41a6-8954-4bd4-b907-6e29ef35d1d5)
- This SEO checker uses GZIP compression technique check as a parameter while the vercel app (clone) uses Brotli which is a better compression technique overall compared to GZIP, reference link - https://vercel.com/docs/edge-network/compression
![image](https://github.com/rohan09-raj/getplus/assets/78433013/3d678872-9792-41f0-91a3-afe7b602c784)
- Generated the lighthouse report for the same and the cloned page performed better

Cloned | Original
:-------------------------:|:-------------------------:
![image](https://github.com/rohan09-raj/getplus/assets/78433013/224e4444-2611-4319-b4e5-d69f3327a0d7) | ![image](https://github.com/rohan09-raj/getplus/assets/78433013/0a8fb02e-e960-48eb-b5f7-ebda4a81fe6d)



