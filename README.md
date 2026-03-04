# JSON to TOON Converter

A modern web application to convert JSON data into TOON format, with a vintage terminal-style interface.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8?style=flat-square&logo=tailwind-css)

## 📋 Description

JSON to TOON Converter is a web application built with Next.js that allows you to easily convert JSON files into TOON format. The interface is designed with a brutalist/vintage terminal style that combines retro aesthetics with modern functionality.

### Key Features

- ✨ **Terminal Interface**: Brutalist design with square borders, solid shadows, and monospace font
- 🎨 **Light Palette**: Light beige background with sharp black contrasts
- ⚡ **Real-time Conversion**: JSON validation and instant conversion
- 🔍 **Error Handling**: Clear and detailed error messages for invalid JSON
- 📱 **Responsive Design**: Optimized for desktop and mobile devices
- 🎯 **TypeScript**: Static typing for greater code reliability

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/robdgs/JSON-_to_TOON.git
cd json_to_toon
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 How to Use

1. **Enter JSON**: Write or paste your valid JSON in the `INPUT.json` field on the left
2. **Convert**: Click the `[ CONVERT ]` button
3. **View**: The TOON format result will appear in the `OUTPUT.toon` field on the right

### Example

**Input JSON:**

```json
{
  "name": "John Doe",
  "age": 30,
  "skills": ["JavaScript", "TypeScript", "React"]
}
```

**Output TOON:**

```
name: John Doe
age: 30
skills: JavaScript
TypeScript
React
```

## 🛠️ Technologies Used

- **[Next.js 16.1.6](https://nextjs.org/)** - React framework for web applications
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ESLint](https://eslint.org/)** - Linter for JavaScript/TypeScript

## 📁 Project Structure

```
json_to_toon/
├── app/
│   ├── page.tsx          # Main page with conversion logic
│   ├── layout.tsx        # Root application layout
│   ├── globals.css       # Global styles and Tailwind
│   └── favicon.ico       # Favicon
├── public/               # Static assets
├── .next/               # Build output (generated)
├── node_modules/        # Dependencies (generated)
├── package.json         # npm configuration and dependencies
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── next.config.ts       # Next.js configuration
└── README.md           # This file
```

## 🎨 Customization

### Modify Conversion Logic

The conversion function is located in `app/page.tsx`. To customize the TOON format:

```typescript
const convertJsonToToon = (json: any): string => {
  // Implement your custom logic here
  // ...
};
```

### Modify Styling

Styles are managed via Tailwind CSS. To modify colors or appearance:

1. Edit Tailwind classes directly in `app/page.tsx`
2. Customize the configuration in `tailwind.config.ts`
3. Add custom styles in `app/globals.css`

## 🧪 Build and Deploy

### Production Build

```bash
npm run build
npm run start
```

### Deploy on Vercel

The easiest way to deploy your app is to use [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/robdgs/JSON-_to_TOON)

Or via CLI:

```bash
npm install -g vercel
vercel
```

### Manual Deploy

The application can be deployed on any platform that supports Node.js:

- **Netlify**: Set the build command to `npm run build`
- **Railway**: Connect the repository for automatic deployment
- **AWS/Google Cloud/Azure**: Use Docker containers or serverless services

## 📝 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Create an optimized production build
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check the code

## 🐛 Troubleshooting

### Error: "Invalid JSON"

Make sure the JSON you entered is properly formatted. Use tools like [JSONLint](https://jsonlint.com/) to validate it.

### Build Issues

If you encounter errors during build:

```bash
rm -rf .next node_modules
npm install
npm run build
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is distributed under the MIT license. See the `LICENSE` file for more details.

## 👤 Author

**robdgs**

- GitHub: [@robdgs](https://github.com/robdgs)
- Repository: [JSON-\_to_TOON](https://github.com/robdgs/JSON-_to_TOON)

## 🙏 Acknowledgments

- Design inspired by brutalist aesthetics and vintage terminals
- Built with [Next.js](https://nextjs.org/)
- Powered by [Vercel](https://vercel.com/)

---

⭐ If this project was useful to you, consider starring it on GitHub!
