# Forms in Next.js Made Easy (Headless API Integration & Validation)

Welcome to **Forms in Next.js Made Easy**, a modern and powerful form solution built using Next.js, integrated with a headless API, and featuring robust validation with `zod`. This project is designed to simplify the process of creating forms in your Next.js applications by providing reusable components, seamless API integration, and a modern UI built with `shadcn/ui`.

## Features

- **Headless API Integration**: Easy and flexible integration with any backend or API for form submission.
- **Zod Validation**: Comprehensive form validation using `zod`, providing reliable and maintainable schemas.
- **Modern UI Components**: Beautiful form elements styled with `shadcn/ui`, including:
  - Input
  - Textarea
  - Label
  - Button
  - Card
  - Tabs
- **Optimized for Performance**: Built with Next.js and PNPM for efficient development and performance.

## Technologies Used

- **Next.js**: For server-side rendering and seamless page transitions.
- **PNPM**: A fast, disk-space efficient package manager.
- **shadcn/ui**: For modern and beautiful UI components.
- **Zod**: Schema-based validation for form data.

## UI Components

The form includes various modern components:
- **Input**: For text-based user inputs.
- **Textarea**: To capture multiline inputs.
- **Label**: Semantically meaningful labeling for inputs.
- **Button**: Styled buttons for form submissions or actions.
- **Card**: To structure and visually organize form elements.
- **Tabs**: For creating multiple sections in a single form.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [PNPM](https://pnpm.io/)

### Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Install dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

   This will install all the necessary packages, including:

   - Next.js
   - `@conform-to/react`
   - `@conform-to/zod`
   - `shadcn/ui`
   - `zod`

### PNPM Installation Commands

Here are the specific `pnpm` installation commands for the libraries and UI components used in this project:

```bash
# Install Next.js and React
pnpm add next react react-dom

# Install Zod and Conform (for form validation)
pnpm add zod @conform-to/react @conform-to/zod

# Install UI components from shadcn/ui
pnpm add @shadcn/ui @shadcn/ui-input @shadcn/ui-textarea @shadcn/ui-label @shadcn/ui-button @shadcn/ui-card @shadcn/ui-tabs
```

### Running the Project

Once the dependencies are installed, you can run the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

### Folder Structure

The basic folder structure of the project:

```
/components        # Reusable form components
/pages             # Next.js pages
/public            # Static files
/styles            # Global styles (CSS)
/utils             # Utility functions
```

## Usage

You can use the following components to build forms in the application:

```jsx
import { Input, Textarea, Label, Button, Card, Tabs } from '@shadcn/ui';
import { z } from 'zod';

// Example form component with validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is too short' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

export default function MyForm() {
  return (
    <Card>
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" />

      <Label htmlFor="message">Message</Label>
      <Textarea id="message" name="message" />

      <Button type="submit">Submit</Button>
    </Card>
  );
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
