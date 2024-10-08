This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

// export default function App() {
//   return (
//     <>
//       <div
//         className="!visible transition-opacity duration-150 bg-background text-foreground !opacity-100"
//         id="v0-container"
//         style={{ visibility: 'hidden', opacity: 0 }}
//       >
//         <div className="bg-gray-100 min-h-screen flex items-center justify-center" data-id="1">
//           <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700" data-id="2">
//             <div className="space-y-2 text-center" data-id="3">
//               <h1 className="text-3xl font-bold" data-id="4">Login</h1>
//               <p className="text-zinc-500 dark:text-zinc-400" data-id="5">
//                 By logging in, you accept our
//                 <a data-id="6" className="text-blue-500 hover:text-blue-700" href="#">
//                   terms
//                 </a>
//                 and
//                 <a data-id="7" className="text-blue-500 hover:text-blue-700" href="#">
//                   privacy policy
//                 </a>.
//               </p>
//             </div>
//             <div className="space-y-4" data-id="8">
//               <div className="space-y-2" data-id="9">
//                 <label
//                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                   htmlFor="email"
//                   data-id="10"
//                 >
//                   Email
//                 </label>
//                 <input
//                   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                   id="email"
//                   placeholder="m@example.com"
//                   required
//                   data-id="11"
//                   type="email"
//                 />
//               </div>
//               <div className="flex items-center space-x-2" data-id="12">
//                 <hr className="flex-grow border-zinc-200 dark:border-zinc-700" data-id="13" />
//                 <span className="text-zinc-400 dark:text-zinc-300 text-sm" data-id="14">
//                   OR
//                 </span>
//                 <hr className="flex-grow border-zinc-200 dark:border-zinc-700" data-id="15" />
//               </div>
//               <button
//                 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-[#4285F4] text-white"
//                 data-id="16"
//               >
//                 <div className="flex items-center justify-center" data-id="17">
//                   <svg
//                     data-id="18"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-5 h-5 mr-2"
//                   >
//                     <circle cx="12" cy="12" r="10"></circle>
//                     <circle cx="12" cy="12" r="4"></circle>
//                     <line x1="21.17" x2="12" y1="8" y2="8"></line>
//                     <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
//                     <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
//                   </svg>
//                   Login with Google
//                 </div>
//               </button>
//               <button
//                 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-black text-white"
//                 data-id="19"
//               >
//                 <div className="flex items-center justify-center" data-id="20">
//                   <svg
//                     data-id="21"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-5 h-5 mr-2"
//                   >
//                     <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
//                     <path d="M10 2c1 .5 2 2 2 5"></path>
//                   </svg>
//                   Login with Apple
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
