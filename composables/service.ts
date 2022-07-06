export const fetchVideos = async (): Promise<void> => {
  try {
    const data = await $fetch("/api/videos");
    const videos = useVideos();
    videos.value = data;
  } catch (error) {
    console.log(error);
  }
};

export const updateVideo = async (id: string, url: string): Promise<void> => {
  try {
    const result = await $fetch(`/api/videos`, {
      method: "PATCH",
      body: JSON.stringify({ id, url }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchArticles = async (): Promise<any> => {
  try {
    let articlesDefault: any = await $fetch("/api/publicacoes");
    articlesDefault = articlesDefault.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    const categories = [...new Set(articlesDefault.map((a: any) => a.category))].sort();
    const articles = useArticles();
    articles.value = articlesDefault;
    return { articlesDefault, categories };
  } catch (error) {
    console.log(error);
  }
};

export const postArticle = async (publicacao: Object): Promise<void> => {
  try {
    const result = await $fetch(`/api/publicacoes`, {
      method: "POST",
      body: JSON.stringify(publicacao),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateArticle = async (id: string, publicacao: Object): Promise<void> => {
  try {
    const result = await $fetch(`/api/publicacoes`, {
      method: "PATCH",
      body: JSON.stringify({ id, publicacao }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticle = async (id: string): Promise<void> => {
  try {
    const result = await $fetch(`/api/publicacoes`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
