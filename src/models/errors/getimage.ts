/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ShortGeniusError } from "./shortgeniuserror.js";

/**
 * An error response object.
 */
export type GetImageResponseBodyData = {
  /**
   * Error message describing the reason for failure.
   */
  message?: string | null | undefined;
};

/**
 * An error response object.
 */
export class GetImageResponseBody extends ShortGeniusError {
  /** The original data that was passed to this error instance. */
  data$: GetImageResponseBodyData;

  constructor(
    err: GetImageResponseBodyData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;

    this.name = "GetImageResponseBody";
  }
}

/** @internal */
export const GetImageResponseBody$inboundSchema: z.ZodType<
  GetImageResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.nullable(z.string()).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new GetImageResponseBody(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type GetImageResponseBody$Outbound = {
  message?: string | null | undefined;
};

/** @internal */
export const GetImageResponseBody$outboundSchema: z.ZodType<
  GetImageResponseBody$Outbound,
  z.ZodTypeDef,
  GetImageResponseBody
> = z.instanceof(GetImageResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.nullable(z.string()).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetImageResponseBody$ {
  /** @deprecated use `GetImageResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetImageResponseBody$inboundSchema;
  /** @deprecated use `GetImageResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetImageResponseBody$outboundSchema;
  /** @deprecated use `GetImageResponseBody$Outbound` instead. */
  export type Outbound = GetImageResponseBody$Outbound;
}
