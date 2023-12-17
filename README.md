# Twitter Clone

A Twitter clone project using:

- _Authentication_: GitHub login
- _Database & Auth_: Supabase
- _Styling_: Tailwind CSS
- _Frontend_: Next.js & React
- _Language_: TypeScript

## Setup

1. Clone the repo:

```bash
git clone https://github.com/tomy08/x-clone.git
```

2. Install dependencies:

```bash
cd x-clone
npm install
```

3. Configure environment variables:

Create a .env.local file at the project root and add:

```bash
NEXT_PUBLIC_SUPABASE_URL=YOUR_NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_ACCESS_TOKEN=YOUR_SUPABASE_ACCESS_TOKEN
```

Make sure to obtain GitHub and Supabase keys.

4. Run the app:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).
