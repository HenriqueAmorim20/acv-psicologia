import { commonDelete, commonGet, commonPatch, commonPost } from "../shared/common-api-methods";

export default (collection: string) =>
  defineEventHandler(async event => {
    const method = event.method as string;
    const methods: Record<string, () => Promise<unknown>> = {
      GET: () => commonGet(collection),
      POST: () => commonPost(event, collection),
      PATCH: () => commonPatch(event, collection),
      DELETE: () => commonDelete(event, collection),
    };

    return await methods[method]();
  });
