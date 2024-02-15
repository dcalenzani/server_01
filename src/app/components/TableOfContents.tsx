'use client'

import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkToggle";

interface Heading {
  text: string;
  slug: string;
  level: number;
}

interface HeadingItem {
  heading: Heading;
  sublist: HeadingItem[];
}

const TableOfContents = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const [headings, setHeadings] = useState<Heading[]>([]);
  
  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h1, h2"));
    const headings = headingElements.map((heading) => {
      const text = heading.textContent || '';
      const slug = text.replace(/\s+/g,"-").toLowerCase();
      const level = parseInt(heading.nodeName.replace("H", ""));
      return { text, slug, level };
    });
    setHeadings(headings);
  }, []);

  const [activeHeading, setActiveHeading] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentHeading = '';

      // Reverse the headings array so that we find the last heading at or above the top of the viewport
      [...headings].reverse().forEach((heading) => {
        const headingElement = document.getElementById(heading.slug);
        if (headingElement) {
          const rect = headingElement.getBoundingClientRect();
          // If the bottom of the heading is at or above the top of the viewport and we haven't found an active heading yet
          if (rect.bottom <= 64 && !currentHeading) {
            currentHeading = heading.slug;
          }
        }
      });

      setActiveHeading(currentHeading);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);
  
  const renderHeadings = (headings: Heading[], level: number = 2): HeadingItem[] => {
    let i = 0;
    const list = [];

    while (i < headings.length) {
      const heading = headings[i];

      if (heading.level === level) {
        const sublist = [];

        i++;

        while (i < headings.length && headings[i].level > level) {
          sublist.push(headings[i]);
          i++;
        }

        list.push({
          heading,
          sublist: renderHeadings(sublist, level + 1)
        });
      } else {
        i++;
      }
    }

    return list;
  };

  const headingList = renderHeadings(headings);

  const renderList = (list: HeadingItem[]) => (
    <ul className="space-y-4">
      {list.map((item) => (
        <li key={item.heading.slug}>
          <a
            href={`#${item.heading.slug}`}
            className={item.heading.slug === activeHeading ? 'text-red-500' : ''}
          >
            {item.heading.text}
          </a>
          {item.sublist.length > 0 && renderList(item.sublist)}
        </li>
      ))}
    </ul>
  );

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setScrollPosition(window.scrollY);
    } else {
      window.scrollTo(0, scrollPosition);
    }

    setMenuOpen((prevValue) => !prevValue);
  };
      
  return (
    <>
    <div className="fixed z-50 bottom-0 left-108 flex h-28 w-full items-center justify-center pt-8 bg-gradient-to-t from-white via-white  overflow-hidden dark:from-black dark:via-black">
            <a
                className="flex place-items-center gap-2 p-8 pointer-events-auto"
                href="../../"
                rel="noopener noreferrer"
            >
                By{' '}
                <img
                    src="../../../logo.svg"
                    alt="Personal D.C logo"
                    className="dark:invert"
                    width={100}
                    height={24} />
            </a>

            <a onClick={toggleMenu} className="text-3xl z-50 cursor-pointer mx-2 md:hidden block">
                <p>&#9776;</p>
            </a>

    </div>
    <DarkModeToggle/>
    <div className={`fixed flex flex-col border rounded-md top-0 pt-16 right-0 text-xl text-left space-y-2 w-screen md:w-1/4 md:h-full bg-gray-200 dark:bg-zinc-800 z-20 md:flex md:flex-col border-zinc-800 dark:border-zinc-200 ${isMenuOpen ? 'block' : 'hidden'}`}>
      <div className="flex flex-row border [&>a]:border [&>a]:border-zinc-800 border-zinc-800 dark:[&>a]:border-zinc-200 dark:border-zinc-200 text-center w-full">
        <a href="/" className="w-full h-full py-2">&#8962; Home</a>
        <a href="/projects" className="w-full h-full py-2">All Posts</a>
      </div>

      <nav className="flex justify-start pl-2 py-4">
        {renderList(headingList)}
      </nav>
    </div>
    </>
  );
};

export default TableOfContents;