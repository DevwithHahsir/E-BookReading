export const fetchBooksFromAPI = async () => {
  const randomWords = ['a', 'love', 'science', 'fiction', 'life', 'world', 'adventure'];
  const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

  const baseUrl = import.meta.env.VITE_BOOKS_API_URL;
  const response = await fetch(`${baseUrl}?q=${randomWord}`);
  const data = await response.json();

  if (Array.isArray(data.docs)) {
    return data.docs.map((item) => ({
      title: item.title || "Unknown Title",
      img: item.cover_i
        ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
        : "https://via.placeholder.com/150x220",
      authors: item.author_name || ["Unknown Author"],
      publishYear: item.first_publish_year || "Unknown year",
      editionCount: item.edition_count || 0,
      key: item.key || "",
      hasFullText: item.has_fulltext || false,
      languages: item.language || [],
      subjects: item.subject || [],
      link: `https://openlibrary.org${item.key}`,
    }));
  } else {
    throw new Error("Invalid data format");
  }
};
