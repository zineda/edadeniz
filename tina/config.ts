import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "55c38569-6a25-4060-9b82-3a9b8d10b997", // Tina.io Dashboard'daki Client ID
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  collections: [
    {
      name: "post",
      label: "Gönderiler",
      path: "content/post",
      fields: [
        { type: "string", name: "title", label: "Başlık" },
        { type: "datetime", name: "date", label: "Tarih" },
        { type: "rich-text", name: "body", label: "İçerik" },
      ],
    },
  ],
});
