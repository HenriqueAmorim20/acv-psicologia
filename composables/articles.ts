export const formatDate = (articleDate: number): string => {
  const date = new Date(null);
  date.setSeconds(articleDate);
  return date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatText = (text: string, length: number): string => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

export const setArticles = async (): Promise<void> => {
  const articles = useArticles();

  try {
    const { data }: any = await useFetch("/api/publicacoes");
    articles.value = data;
  } catch (error) {
    console.log(error);
  }
};
