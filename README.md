# 📝 Post Dashboard

A simple full-stack **Next.js** app with **TypeScript**, **Tailwind CSS**, **React Query**, and **shadcn/ui**. It allows you to **create, read, update, and delete** posts using a fake API. The app includes both a public landing page and a secure admin dashboard.

## 🚀 Features

- ✅ View public landing page at `/`
- ✅ Admin dashboard at `/admin`
- ✅ Full CRUD on posts:
  - Create new posts
  - View all posts
  - Edit existing posts
  - Delete posts
- 🖋️ Rich Text Editor (Tiptap) for post content
- 💬 Toast notifications for actions
- 💄 Beautiful UI with Tailwind and shadcn/ui
- 🔄 React Query for data fetching and caching
- 🔐 Fake API using [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## 🛠️ Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **React Query**
- **Tiptap** (Rich Text Editor)
- **React Hook Form**
- **JSONPlaceholder** (Fake API)

## 📦 Installation

1. **Clone the repo**

```bash
git clone https://github.com/your-username/post-dashboard.git
cd post-dashboard
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start the development server on localhost:3000 with**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 📌 Important Notes

- This project uses **JSONPlaceholder** as a fake REST API - changes won't persist after refresh
- The **Tiptap** rich text editor stores content as HTML
- All data operations are simulated - no real database connection
- Authentication is not implemented (demo purposes only)
- The project is fully typed with TypeScript for easier maintenance
- Can be easily connected to a real backend by modifying `lib/api.ts`

## 🧾 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.  
Free to use, modify, and distribute for personal and commercial purposes.

---

## 👤 Author

**Mohand**  
📧 *mohand27m@gmail.com*  
🔗 [GitHub](https://github.com/mohand-abdelkader)

💡 Feel free to reach out for:

- Feedback
- Collaboration opportunities
- Questions about implementation

_Built with Next.js, TypeScript, and passion._
