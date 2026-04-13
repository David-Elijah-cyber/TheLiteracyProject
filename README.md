# The Literacy Project

A nonprofit website empowering immigrant women through free English tutoring.

![The Literacy Project]

## Quick Start

### 1. Open in VS Code

Download this folder and open it in Visual Studio Code.

### 2. Install Dependencies

Open the terminal in VS Code (`Ctrl + ~`) and run:

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The website will open at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

Built files will be in the `dist/` folder.

---

## Deploy to Vercel (Recommended)

### Method 1: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For production deploy**
   ```bash
   vercel --prod
   ```

### Method 2: Using GitHub + Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/the-literacy-project.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Framework Preset: Select "Vite"
   - Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

---

## Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click "New Repository"
3. Name it `the-literacy-project`
4. Make it Public
5. Click "Create Repository"

### Step 2: Push Your Code

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/the-literacy-project.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository → Settings → Pages
2. Source: GitHub Actions
3. Use the Vite workflow

---

## Project Structure

```
the-literacy-project/
├── public/              # Static images
│   ├── team/           # Board member photos
│   └── *.jpg           # Other images
├── src/
│   ├── components/     # UI components
│   ├── contexts/      # Language context
│   ├── i18n/          # Translations
│   ├── sections/      # Page sections
│   ├── App.tsx        # Main app
│   ├── index.css      # Styles
│   └── main.tsx       # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── vercel.json        # Vercel config
```

---

## Language Switching

The website supports 6 languages:
- English (EN)
- Spanish (ES)
- Russian (RU)
- Korean (KO)
- French (FR)
- Uzbek (UZ)

**Note:** Language switching is done client-side (no page reload). This ensures smooth deployment on Vercel and other static hosts.

---

## Customization

### Change Board Members

Edit `src/sections/Tutors.tsx`:

```typescript
const boardMembers = [
  {
    name: 'New Name',
    role: 'Role',
    languages: ['Language1', 'Language2'],
    description: 'Description',
    image: '/team/photo.jpg',
  },
  // ...
];
```

### Change Schedule

Edit `src/sections/Schedule.tsx`:

```typescript
const scheduleData = [
  {
    day: 'Monday',
    time: '6:00 PM PST',
    language: 'Spanish',
    tutor: 'Tutor Name',
    zoomLink: 'https://meet.google.com/...',
  },
  // ...
];
```

---

## Troubleshooting

**Error: `npm install` fails**
- Make sure you have Node.js 18+ installed
- Run `node --version` to check

**Error: `npm run dev` doesn't work**
- Check that port 5173 is not in use
- Try a different port: `npm run dev -- --port 3000`

**Images not showing**
- Make sure images are in the `public/` folder
- Use paths like `/image.jpg` not `../public/image.jpg`

**Build fails on Vercel**
- Make sure `vercel.json` is in the root folder
- Check that `package.json` has the correct build script
- Framework preset should be "Vite"

---

## Contact

- Email: TheLiteracyProject5@gmail.com
- Instagram: @the_literacy_project
- Phone: 951-428-1568
