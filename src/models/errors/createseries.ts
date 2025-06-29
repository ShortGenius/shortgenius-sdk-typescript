/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ShortGeniusError } from "./shortgeniuserror.js";

/**
 * An error response object.
 */
export type CreateSeriesResponseResponseBodyData = {
  /**
   * Error message describing the reason for failure.
   */
  message?: string | null | undefined;
};

/**
 * An error response object.
 */
export class CreateSeriesResponseResponseBody extends ShortGeniusError {
  /** The original data that was passed to this error instance. */
  data$: CreateSeriesResponseResponseBodyData;

  constructor(
    err: CreateSeriesResponseResponseBodyData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;

    this.name = "CreateSeriesResponseResponseBody";
  }
}

/**
 * An error response object.
 */
export type CreateSeriesResponseBodyData = {
  /**
   * Error message describing the reason for failure.
   */
  message?: string | null | undefined;
};

/**
 * An error response object.
 */
export class CreateSeriesResponseBody extends ShortGeniusError {
  /** The original data that was passed to this error instance. */
  data$: CreateSeriesResponseBodyData;

  constructor(
    err: CreateSeriesResponseBodyData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;

    this.name = "CreateSeriesResponseBody";
  }
}

/** @internal */
export const CreateSeriesResponseResponseBody$inboundSchema: z.ZodType<
  CreateSeriesResponseResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.nullable(z.string()).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new CreateSeriesResponseResponseBody(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type CreateSeriesResponseResponseBody$Outbound = {
  message?: string | null | undefined;
};

/** @internal */
export const CreateSeriesResponseResponseBody$outboundSchema: z.ZodType<
  CreateSeriesResponseResponseBody$Outbound,
  z.ZodTypeDef,
  CreateSeriesResponseResponseBody
> = z.instanceof(CreateSeriesResponseResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.nullable(z.string()).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSeriesResponseResponseBody$ {
  /** @deprecated use `CreateSeriesResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateSeriesResponseResponseBody$inboundSchema;
  /** @deprecated use `CreateSeriesResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateSeriesResponseResponseBody$outboundSchema;
  /** @deprecated use `CreateSeriesResponseResponseBody$Outbound` instead. */
  export type Outbound = CreateSeriesResponseResponseBody$Outbound;
}

/** @internal */
export const CreateSeriesResponseBody$inboundSchema: z.ZodType<
  CreateSeriesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.nullable(z.string()).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new CreateSeriesResponseBody(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type CreateSeriesResponseBody$Outbound = {
  message?: string | null | undefined;
};

/** @internal */
export const CreateSeriesResponseBody$outboundSchema: z.ZodType<
  CreateSeriesResponseBody$Outbound,
  z.ZodTypeDef,
  CreateSeriesResponseBody
> = z.instanceof(CreateSeriesResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.nullable(z.string()).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSeriesResponseBody$ {
  /** @deprecated use `CreateSeriesResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateSeriesResponseBody$inboundSchema;
  /** @deprecated use `CreateSeriesResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateSeriesResponseBody$outboundSchema;
  /** @deprecated use `CreateSeriesResponseBody$Outbound` instead. */
  export type Outbound = CreateSeriesResponseBody$Outbound;
}
