import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const existingUsers = await prisma.user.count();
  if (existingUsers > 0) {
    console.log("Database already seeded, skipping.");
    return;
  }

  const passwordHash = bcrypt.hashSync("123456", 10);

  const author1 = await prisma.user.create({
    data: {
      name: "علی نظری",
      email: "ali@example.com",
      passwordHash,
    },
  });

  await prisma.user.create({
    data: {
      name: "امیررضا ریاحی",
      email: "amir@example.com",
      passwordHash,
    },
  });

  const categories = await Promise.all([
    prisma.category.create({ data: { name: "فرانت‌اند", slug: "frontend" } }),
    prisma.category.create({ data: { name: "بک‌اند", slug: "backend" } }),
    prisma.category.create({ data: { name: "ری‌اکت", slug: "react" } }),
    prisma.category.create({ data: { name: "جاوااسکریپت", slug: "javascript" } }),
    prisma.category.create({
      data: { name: "معماری نرم‌افزار", slug: "architecture" },
    }),
    prisma.category.create({ data: { name: "هوش مصنوعی", slug: "ai" } }),
  ]);

  const catBySlug = Object.fromEntries(categories.map((c) => [c.slug, c.id]));

  await prisma.post.createMany({
    data: [
      {
        title: "هرچیزی که باید از use API ری‌اکت بدونیم",
        slug: "react-19-use-api-guide",
        excerpt:
          "در این پست با use API در React 19 آشنا می‌شیم، قابلیتی که بهت اجازه می‌ده مستقیم توی رندر، منابعی مثل Promise یا Context رو بخونی.",
        content: `## use API چیست؟

\`use\` یک API جدید در React 19 است که به شما اجازه می‌دهد Promiseها و Context را مستقیماً در کامپوننت بخوانید.

### مثال ساده

\`\`\`tsx
import { use } from 'react';

function Comments({ commentsPromise }) {
  const comments = use(commentsPromise);
  return comments.map(c => <p key={c.id}>{c.text}</p>);
}
\`\`\`

این رویکرد نیاز به \`useEffect\` و \`useState\` برای fetch کردن داده را کاهش می‌دهد.`,
        categoryId: catBySlug.react,
        authorId: author1.id,
        views: 1240,
      },
      {
        title: "Expensive Style Recalculations چیه؟!",
        slug: "expensive-style-recalculations",
        excerpt:
          "بررسی می‌کنیم که Expensive Style Recalculations چیست و چطور با Chrome DevTools این مشکل Performance را شناسایی و برطرف کنیم.",
        content: `## Style Recalculation

وقتی DOM تغییر می‌کند، مرورگر باید استایل‌ها را دوباره محاسبه کند. اگر این کار زیاد اتفاق بیفتد، Performance افت می‌کند.

### راه‌حل‌ها

- از تغییرات layout-triggering پرهیز کنید
- از \`will-change\` با احتیاط استفاده کنید
- با Performance tab در DevTools bottleneckها را پیدا کنید`,
        categoryId: catBySlug.frontend,
        authorId: author1.id,
        views: 890,
      },
      {
        title: "چه زمانی از SSR و SSG و CSR استفاده کنیم؟",
        slug: "ssg-ssr-csr",
        excerpt:
          "اینکه چه زمانی از SSR و چه زمانی از SSG و همچنین چه زمانی از CSR استفاده کنیم را بررسی می‌کنیم.",
        content: `## SSR vs SSG vs CSR

| روش | مناسب برای |
|-----|-----------|
| SSR | محتوای شخصی‌سازی‌شده |
| SSG | بلاگ، مستندات |
| CSR | داشبورد، SPA |

Next.js هر سه را پشتیبانی می‌کند و می‌توانید per-page انتخاب کنید.`,
        categoryId: catBySlug.frontend,
        authorId: author1.id,
        views: 2100,
      },
      {
        title: "متدهای جدید Set در اکمااسکریپت ۲۰۲۵",
        slug: "new-set-methods-ecmascript-2025",
        excerpt:
          "به مجموعه Set متدهای جدید و پرکاربردی اضافه شده که آن‌ها را بررسی می‌کنیم.",
        content: `## متدهای جدید

- \`Set.prototype.union()\`
- \`Set.prototype.intersection()\`
- \`Set.prototype.difference()\`
- \`Set.prototype.symmetricDifference()\`

این متدها کار با مجموعه‌ها را بسیار ساده‌تر کرده‌اند.`,
        categoryId: catBySlug.javascript,
        authorId: author1.id,
        views: 560,
      },
      {
        title: "Merge: دروازه‌بان IT برای ایجنت‌های هوش مصنوعی",
        slug: "merge-ai-agents-gateway",
        excerpt:
          "Merge یک پلتفرم یکپارچه‌سازی است که به سازمان‌ها کمک می‌کند ایجنت‌های AI را امن و کنترل‌شده deploy کنند.",
        content: `## چرا به Gateway نیاز داریم؟

با افزایش استفاده از AI agents در محیط کار، نیاز به کنترل دسترسی، audit و یکپارچگی با سیستم‌های موجود بیشتر شده است.`,
        categoryId: catBySlug.ai,
        authorId: author1.id,
        views: 3400,
      },
      {
        title: "پیاده‌سازی Debounce در ری‌اکت",
        slug: "react-debounce",
        excerpt:
          "یکی از تکنیک‌های پرکاربرد بهینه‌سازی در برنامه‌های ری‌اکتی یعنی Debounce را پیاده‌سازی می‌کنیم.",
        content: `## Debounce Hook

\`\`\`tsx
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}
\`\`\``,
        categoryId: catBySlug.react,
        authorId: author1.id,
        views: 780,
      },
    ],
  });

  console.log("Seed completed successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
