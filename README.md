Here's a README for **The Nairobi Hospital Website** project:

---

# The Nairobi Hospital Website
<div align="center">
  <a href="https://github.com/nairobi-hospital/website"><img src="./public/nairobi-hospital-banner.png" width=1024 alt="The Nairobi Hospital Logo"></a>
</div>

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](#tech-stack)
[![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)](#tech-stack)
[![Sanity](https://img.shields.io/badge/sanity-%23f03e2f.svg?style=for-the-badge&logo=sanity&logoColor=white)](#tech-stack)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](#tech-stack)

## Our Mission

The Nairobi Hospital Website aims to create a seamless digital experience for patients, healthcare providers, and visitors. Through advanced design and accessibility, the website provides essential information, appointment scheduling, and resources to support the well-being of our community.

## Our Vision

Our vision is to establish a robust online presence that represents The Nairobi Hospital's dedication to excellence in healthcare. This platform will support digital-first solutions for patient care, communication, and hospital operations, ensuring that our services remain accessible and effective.

## Contributing

For guidelines on contributing to this project, please see the [contributing guidelines](contributing.md) file in the repository.

## Environment Setup

### Step 1: Create the Project

Clone this repository or use the template button on GitHub. Change to the project directory and install the dependencies. Below is an example using `pnpm`.

```bash
# install packages
pnpm install
```

### Step 2: Set Up the Sanity Studio

Follow the [Sanity documentation](https://www.sanity.io/docs/create-a-sanity-project) to set up a new Sanity project.

```bash
# initialize sanity in the project
pnpm create sanity@latest init --env
```

This will guide you through:

1. Selecting or creating a Sanity project and dataset.
2. Generating a `.env` file with essential environment variables.

- `SANITY_PROJECT_ID="xxxxxx"`
- `SANITY_DATASET="production"`

### Step 3: Configure Environment Variables

1. Copy the contents of `.env.example` to a new `.env` file.
2. Update the `.env` file with the Sanity environment variables as follows:

   - Replace `VITE_SANITY_PROJECT_ID="xxxxxx"` with the value of `SANITY_PROJECT_ID`, then delete the original `SANITY_PROJECT_ID` variable.
   - Replace `VITE_SANITY_DATASET="production"` with the `SANITY_DATASET` value, then delete the original `SANITY_DATASET` variable.

### Development

Once your environment is configured, you can start the development server to view the project.

```bash
# start the development server
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev --open
```

### Accessing the Sanity Studio

The Sanity Studio is embedded within the project and accessible at `/studio`. Log in and explore Settings -> Greeting to see the default setup, which you can customize in the Sanity Studio.

To add more schemas, go to `src/lib/sanity/schemas`.

### Building for Production

To build a production version of the app:

```bash
pnpm build
```

To preview the production build locally, run:

```bash
pnpm preview
```

> Note: To deploy the application, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) compatible with your hosting environment.

---

This setup should prepare **The Nairobi Hospital Website** project for a smooth development and deployment experience!