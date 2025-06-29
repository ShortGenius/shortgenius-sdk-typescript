/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { getAllSeries } from "../../funcs/getAllSeries.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetAllSeriesRequest$inboundSchema,
};

export const tool$getAllSeries: ToolDefinition<typeof args> = {
  name: "get-all-series",
  description: `List series`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await getAllSeries(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
