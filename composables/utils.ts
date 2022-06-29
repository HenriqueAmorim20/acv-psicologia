export const formatDate = (articleDate: number): string => {
  const date = new Date(articleDate);
  return date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatText = (text: string, length: number): string => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};
