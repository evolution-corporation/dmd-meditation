import { HOST_URL } from "~api";

export async function getMeditation(paramas: {
  id?: string;
  category?: string;
  count?: number;
}) {
  try {
    let url = `${HOST_URL}`;
    if (paramas.id !== undefined) {
      url += `${paramas.id}`;
    } else {
      url += "?";
      if (paramas.category) {
        url += `type=${paramas.category}&`;
      }
      if (paramas.count) {
        url += `count=${paramas.count}&`;
      }
    }
    if (url[url.length - 1] == "$" || url[url.length - 1] == "?") {
      url = url.slice(0, url.length - 1);
    }
    const request = await fetch(url);
    if (request.ok) {
      const json = await request.json();
      if (paramas.id) {
        return {
          description: json.description,
          id: json.id,
          image: json.image,
          name: json.name,
          type: json.typeMeditation,
        };
      } else {
        return {
          listMeditation: (json.list ?? []).map((item: any) => ({
            description: item.description,
            id: item.id,
            image: item.image,
            name: item.name,
            type: item.typeMeditation,
          })),
          count: json.count ?? undefined,
        };
      }
    } else {
      throw new Error(`API ERROR. CODE: ${request.status}`);
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Function Error`);
  }
}

export async function getCountMeditationInCategory(categoryName: string) {
  return await (
    await getMeditation({ category: categoryName, count: 0 })
  ).count;
}
