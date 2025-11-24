# CKEditor 5 Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/bf6a9232-55fd-4f61-8b95-3eb8f61b41ee/deploy-status)](https://app.netlify.com/projects/ephemeral-cranachan-d091a0/deploys)

A demonstration project showcasing CKEditor 5 with React, TypeScript, and Vite. This project includes premium features such as real-time collaborative editing, track changes, comments, revision history, and document export capabilities.

## Description

This demo application features a fully configured CKEditor 5 document editor with:

- **Rich text editing** with comprehensive formatting options
- **Real-time collaboration** with presence indicators and live editing
- **Track changes** and revision history
- **Comments and annotations**
- **Document export** to PDF and Word formats
- **Advanced features** including merge fields, templates, format painter, and more

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory with the following environment variables:

```env
VITE_CKEDITOR_LICENSE_KEY=your_license_key_here
VITE_DOCUMENT_ID=your_document_id_here
VITE_CLOUD_SERVICES_TOKEN_URL=your_token_url_here
VITE_CLOUD_SERVICES_WEBSOCKET_URL=your_websocket_url_here
```

3. Configure your CKEditor Cloud Services endpoints for collaboration features to work properly.

## Development

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint the codebase:

```bash
npm run lint
```

## Contact

For questions, issues, or contributions, please refer to the [CKEditor documentation](https://ckeditor.com/docs/ckeditor5/latest/) or open an issue in the repository.
