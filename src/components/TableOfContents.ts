"use client";

import { useEffect } from "react";

const TableOfContents = () => {
  useEffect(() => {
    const headers = document.querySelectorAll("article.prose h1, article.prose h2");

    const generateTOC = () => {
      const tocContainer = document.getElementById("toc-main");
      if (tocContainer) {
        headers.forEach((header) => {
          const headerText = header.textContent;
          const slug = headerText!.replace(/\s+/g, "-").toLowerCase();
          const listItem = document.createElement("li");
          const link = document.createElement("a");

          listItem.classList.add("toc-item");
          link.textContent = headerText;
          link.href = `#${slug}`;
          link.classList.add("toc-link");
          listItem.appendChild(link);
          tocContainer.appendChild(listItem);
        });
      }
    };

    generateTOC();
  }, []);

  return null;
};

export default TableOfContents;
