/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ShortGeniusError } from "./shortgeniuserror.js";

/**
 * An error response object.
 */
export type DraftVideoFromURLResponseResponseBodyData = {
  /**
   * Error message describing the reason for failure.
   */
  message?: string | null | undefined;
};

/**
 * An error response object.
 */
export class DraftVideoFromURLResponseResponseBody extends ShortGeniusError {
  /** The original data that was passed to this error instance. */
  data$: DraftVideoFromURLResponseResponseBodyData;

  constructor(
    err: DraftVideoFromURLResponseResponseBodyData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;

    this.name = "DraftVideoFromURLResponseResponseBody";
  }
}

/**
 * An error response object.
 */
export type DraftVideoFromURLResponseBodyData = {
  /**
   * Error message describing the reason for failure.
   */
  message?: string | null | undefined;
};

/**
 * An error response object.
 */
export class DraftVideoFromURLResponseBody extends ShortGeniusError {
  /** The original data that was passed to this error instance. */
  data$: DraftVideoFromURLResponseBodyData;

  constructor(
    err: DraftVideoFromURLResponseBodyData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;

    this.name = "DraftVideoFromURLResponseBody";
  }
}

/** @internal */
export const DraftVideoFromURLResponseResponseBody$inboundSchema: z.ZodType<
  DraftVideoFromURLResponseResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.nullable(z.string()).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new DraftVideoFromURLResponseResponseBody(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type DraftVideoFromURLResponseResponseBody$Outbound = {
  message?: string | null | undefined;
};

/** @internal */
export const DraftVideoFromURLResponseResponseBody$outboundSchema: z.ZodType<
  DraftVideoFromURLResponseResponseBody$Outbound,
  z.ZodTypeDef,
  DraftVideoFromURLResponseResponseBody
> = z.instanceof(DraftVideoFromURLResponseResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.nullable(z.string()).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DraftVideoFromURLResponseResponseBody$ {
  /** @deprecated use `DraftVideoFromURLResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DraftVideoFromURLResponseResponseBody$inboundSchema;
  /** @deprecated use `DraftVideoFromURLResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DraftVideoFromURLResponseResponseBody$outboundSchema;
  /** @deprecated use `DraftVideoFromURLResponseResponseBody$Outbound` instead. */
  export type Outbound = DraftVideoFromURLResponseResponseBody$Outbound;
}

/** @internal */
export const DraftVideoFromURLResponseBody$inboundSchema: z.ZodType<
  DraftVideoFromURLResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.nullable(z.string()).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new DraftVideoFromURLResponseBody(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type DraftVideoFromURLResponseBody$Outbound = {
  message?: string | null | undefined;
};

/** @internal */
export const DraftVideoFromURLResponseBody$outboundSchema: z.ZodType<
  DraftVideoFromURLResponseBody$Outbound,
  z.ZodTypeDef,
  DraftVideoFromURLResponseBody
> = z.instanceof(DraftVideoFromURLResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.nullable(z.string()).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DraftVideoFromURLResponseBody$ {
  /** @deprecated use `DraftVideoFromURLResponseBody$inboundSchema` instead. */
  export const inboundSchema = DraftVideoFromURLResponseBody$inboundSchema;
  /** @deprecated use `DraftVideoFromURLResponseBody$outboundSchema` instead. */
  export const outboundSchema = DraftVideoFromURLResponseBody$outboundSchema;
  /** @deprecated use `DraftVideoFromURLResponseBody$Outbound` instead. */
  export type Outbound = DraftVideoFromURLResponseBody$Outbound;
}
