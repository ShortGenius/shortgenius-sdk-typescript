/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ShortGeniusError } from "./shortgeniuserror.js";

/**
 * An error response object.
 */
export type GenerateVideoTopicsResponseResponseBodyData = {
  /**
   * Error message describing the reason for failure.
   */
  message?: string | null | undefined;
};

/**
 * An error response object.
 */
export class GenerateVideoTopicsResponseResponseBody extends ShortGeniusError {
  /** The original data that was passed to this error instance. */
  data$: GenerateVideoTopicsResponseResponseBodyData;

  constructor(
    err: GenerateVideoTopicsResponseResponseBodyData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;

    this.name = "GenerateVideoTopicsResponseResponseBody";
  }
}

/**
 * An error response object.
 */
export type GenerateVideoTopicsResponseBodyData = {
  /**
   * Error message describing the reason for failure.
   */
  message?: string | null | undefined;
};

/**
 * An error response object.
 */
export class GenerateVideoTopicsResponseBody extends ShortGeniusError {
  /** The original data that was passed to this error instance. */
  data$: GenerateVideoTopicsResponseBodyData;

  constructor(
    err: GenerateVideoTopicsResponseBodyData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;

    this.name = "GenerateVideoTopicsResponseBody";
  }
}

/** @internal */
export const GenerateVideoTopicsResponseResponseBody$inboundSchema: z.ZodType<
  GenerateVideoTopicsResponseResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.nullable(z.string()).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new GenerateVideoTopicsResponseResponseBody(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type GenerateVideoTopicsResponseResponseBody$Outbound = {
  message?: string | null | undefined;
};

/** @internal */
export const GenerateVideoTopicsResponseResponseBody$outboundSchema: z.ZodType<
  GenerateVideoTopicsResponseResponseBody$Outbound,
  z.ZodTypeDef,
  GenerateVideoTopicsResponseResponseBody
> = z.instanceof(GenerateVideoTopicsResponseResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.nullable(z.string()).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateVideoTopicsResponseResponseBody$ {
  /** @deprecated use `GenerateVideoTopicsResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GenerateVideoTopicsResponseResponseBody$inboundSchema;
  /** @deprecated use `GenerateVideoTopicsResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GenerateVideoTopicsResponseResponseBody$outboundSchema;
  /** @deprecated use `GenerateVideoTopicsResponseResponseBody$Outbound` instead. */
  export type Outbound = GenerateVideoTopicsResponseResponseBody$Outbound;
}

/** @internal */
export const GenerateVideoTopicsResponseBody$inboundSchema: z.ZodType<
  GenerateVideoTopicsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.nullable(z.string()).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new GenerateVideoTopicsResponseBody(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type GenerateVideoTopicsResponseBody$Outbound = {
  message?: string | null | undefined;
};

/** @internal */
export const GenerateVideoTopicsResponseBody$outboundSchema: z.ZodType<
  GenerateVideoTopicsResponseBody$Outbound,
  z.ZodTypeDef,
  GenerateVideoTopicsResponseBody
> = z.instanceof(GenerateVideoTopicsResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.nullable(z.string()).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateVideoTopicsResponseBody$ {
  /** @deprecated use `GenerateVideoTopicsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GenerateVideoTopicsResponseBody$inboundSchema;
  /** @deprecated use `GenerateVideoTopicsResponseBody$outboundSchema` instead. */
  export const outboundSchema = GenerateVideoTopicsResponseBody$outboundSchema;
  /** @deprecated use `GenerateVideoTopicsResponseBody$Outbound` instead. */
  export type Outbound = GenerateVideoTopicsResponseBody$Outbound;
}
