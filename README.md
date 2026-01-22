# Frygood Landing

[cloudflarebutton]

A modern, high-performance landing page template built specifically for the Cloudflare ecosystem. This project leverages Cloudflare Workers, Workflows, and Durable Objects to provide a robust, scalable, and type-safe full-stack foundation with a React-based frontend.

## 🚀 Key Features

-   **Cloudflare Native**: Built to run on the edge with Cloudflare Workers.
-   **TypeScript First**: End-to-end type safety across the frontend and backend.
-   **Modern UI Stack**: Built with React 18, Tailwind CSS, and shadcn/ui.
-   **Integrated Backend**: Includes a Hono-powered API structure ready for extension.
-   **Workflow Ready**: Includes boilerplate for Cloudflare Workflows for long-running tasks.
-   **Dark Mode Support**: Seamless theme switching with persistent storage.
-   **Responsive Design**: Fully optimized for mobile and desktop screens.
-   **Developer Experience**: Fast builds and HMR with Vite.

## 🛠️ Technology Stack

-   **Frontend**: React, Vite, Tailwind CSS, Lucide Icons, shadcn/ui components.
-   **Backend**: Hono (Lightweight web framework for the edge).
-   **Runtime**: Cloudflare Workers.
-   **Deployment**: Wrangler (Cloudflare CLI).
-   **Package Manager**: Bun.
-   **State & Data**: TanStack Query (React Query) for efficient data fetching.

## 📦 Getting Started

### Prerequisites

You will need to have [Bun](https://bun.sh) installed on your machine.

### Installation

1.  **Clone the repository** (if applicable) or use the template.
2.  **Install dependencies**:
    ```bash
    bun install
    ```

### Development

Start the local development server for both the frontend and the worker:

```bash
bun run dev
```

Your app will be available at `http://localhost:3000`.

## 📂 Project Structure

-   `src/`: React frontend application.
    -   `components/`: UI components and layout wrappers.
    -   `pages/`: Application views/pages.
    -   `hooks/`: Shared React hooks.
    -   `lib/`: Utility functions and configuration.
-   `worker/`: Cloudflare Worker source code.
    -   `index.ts`: Entry point for the worker.
    -   `userRoutes.ts`: Define your API endpoints here.
    -   `core-utils.ts`: Internal types and utilities.
-   `shared/`: Shared types and logic between frontend and backend.

## 🌐 API Routes

The backend is built with Hono. All API routes are prefixed with `/api`.
To add new routes, modify `worker/userRoutes.ts`:

```typescript
export function userRoutes(app: Hono<{ Bindings: Env }>) {
    app.get('/api/custom-endpoint', (c) => {
        return c.json({ message: "Hello from the edge!" });
    });
}
```

## 🚀 Deployment

### Cloudflare Deploy Button

[cloudflarebutton]

### Manual Deployment

To deploy your application to Cloudflare Workers and Pages:

1.  **Login to your Cloudflare account**:
    ```bash
    bun x wrangler login
    ```

2.  **Build and Deploy**:
    ```bash
    bun run deploy
    ```

This command builds the frontend assets using Vite and deploys everything as a single worker using Cloudflare's Asset binding.

## 🔧 Configuration

The project configuration is managed through:
-   `wrangler.jsonc`: Cloudflare Worker settings (bindings, compatibility dates, etc.).
-   `tailwind.config.js`: Tailwind CSS theme and plugin configuration.
-   `tsconfig.json`: TypeScript compiler options.

## 📜 License

This project is open-source and available under the MIT License.

---
*Built with ❤️ using Cloudflare Workers and Bun.*