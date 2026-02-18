# TOTP Vault

A secure password manager with built-in TOTP (RFC 6238) authenticator functionality. Similar to Authy but integrated with stored credentials.

## Features

- **Zero-Knowledge Architecture**: All encryption/decryption happens client-side. The server never stores plaintext passwords or TOTP secrets.
- **Client-Side Encryption**: Uses WebCrypto AES-GCM for vault data encryption.
- **Secure Key Derivation**: PBKDF2-SHA256 with 310,000 iterations for master password hashing.
- **Master Password Verification**: Server stores a derived verifier to confirm the master password without ever seeing it.
- **TOTP Support**: Full RFC 6238 implementation supporting:
  - Manual Base32 secret entry
  - Parse `otpauth://` URLs
  - SHA1, SHA256, SHA512 algorithms
  - Configurable digits and period
- **Vercel-Ready**: Built with Next.js App Router, serverless-compatible.

## Security Notes

- The vault encryption key is derived from your master password and kept only in memory (React context).
- The key is cleared when you lock the vault or sign out.
- The server stores only:
  - User credentials (for login)
  - KDF parameters (salt, iterations)
  - A verifier (derived value for password check)
  - Encrypted vault items (ciphertext + IV)
- **Never store your master password in plain text or share it.**

## Prerequisites

- Node.js 18+
- PostgreSQL database (local or cloud like Neon/Supabase)

## Setup

### 1. Clone and Install

```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

Required variables:
- `PRISMA_DATABASE_URL`: PostgreSQL connection string (e.g., `postgresql://user:pass@localhost:5432/db`)
- `NEXTAUTH_SECRET`: Generate with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
- `NEXTAUTH_URL`: `http://localhost:3000` (for local dev)

Optional seed user:
- `SEED_EMAIL`: Email for test user
- `SEED_PASSWORD`: Password for test user

### 3. Generate Prisma Client

```bash
npm run prisma:generate
```

### 4. Run Migrations

```bash
npm run prisma:migrate
```

Or for a quick start with SQLite (dev only):
```bash
# Change provider in prisma/schema.prisma to "sqlite"
# Change PRISMA_DATABASE_URL to "file:./dev.db"
npm run prisma:push
```

### 5. Seed Database (Optional)

```bash
npm run prisma:seed
```

### 6. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

### 7. First-Time Setup

1. Sign in with your seeded credentials (or create a user via Prisma Studio)
2. Navigate to `/vault`
3. Enter a master password to initialize your vault
4. Start adding credentials!

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel will automatically detect Next.js and set up the build command.

### Option 2: Git Integration

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables in Vercel dashboard:
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (your Vercel domain)
   - `PRISMA_DATABASE_URL` (use Neon, Supabase, or Vercel Postgres)
4. Deploy!

### Recommended: Neon (Free Tier)

1. Sign up at https://neon.tech
2. Create a new project
3. Copy the connection string
4. Add to Vercel environment variables as `PRISMA_DATABASE_URL`

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/    # NextAuth handlers
│   │   └── vault/
│   │       ├── profile/           # Vault profile API
│   │       └── items/            # Vault items API
│   ├── vault/                     # Protected vault pages
│   └── signin/                    # Login page
├── components/
│   ├── ui/                        # shadcn/ui components
│   ├── TotpWidget.tsx            # TOTP code display
│   └── VaultContext.tsx          # Vault state management
├── lib/
│   ├── auth.ts                   # NextAuth configuration
│   ├── vaultCrypto.ts           # Client-side encryption
│   ├── totp.ts                  # TOTP generation
│   └── prisma.ts                # Prisma client
├── prisma/
│   ├── schema.prisma             # Database schema
│   └── seed.ts                   # Database seeder
└── types/                        # TypeScript types
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Auth**: NextAuth.js v4
- **Database**: PostgreSQL via Prisma
- **Crypto**: WebCrypto API (built-in)
- **TOTP**: @noble/hashes
- **UI**: Tailwind CSS + custom components (shadcn/ui style)
- **Deployment**: Vercel

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/vault/profile` | Get vault profile (salt, iterations) |
| POST | `/api/vault/profile/init` | Initialize vault |
| POST | `/api/vault/profile/verify` | Verify master password |
| GET | `/api/vault/items` | List vault items |
| POST | `/api/vault/items` | Create vault item |
| GET | `/api/vault/items/[id]` | Get vault item |
| PUT | `/api/vault/items/[id]` | Update vault item |
| DELETE | `/api/vault/items/[id]` | Delete vault item |

## License

MIT
