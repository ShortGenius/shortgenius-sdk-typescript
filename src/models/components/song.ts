/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Metadata about a music track.
 */
export type Song = {
  /**
   * Unique ID of the track.
   */
  id: string;
  name: string;
  previewUrl: string;
};

/** @internal */
export const Song$inboundSchema: z.ZodType<Song, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
    name: z.string(),
    preview_url: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "preview_url": "previewUrl",
    });
  });

/** @internal */
export type Song$Outbound = {
  id: string;
  name: string;
  preview_url: string;
};

/** @internal */
export const Song$outboundSchema: z.ZodType<Song$Outbound, z.ZodTypeDef, Song> =
  z.object({
    id: z.string(),
    name: z.string(),
    previewUrl: z.string(),
  }).transform((v) => {
    return remap$(v, {
      previewUrl: "preview_url",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Song$ {
  /** @deprecated use `Song$inboundSchema` instead. */
  export const inboundSchema = Song$inboundSchema;
  /** @deprecated use `Song$outboundSchema` instead. */
  export const outboundSchema = Song$outboundSchema;
  /** @deprecated use `Song$Outbound` instead. */
  export type Outbound = Song$Outbound;
}

export function songToJSON(song: Song): string {
  return JSON.stringify(Song$outboundSchema.parse(song));
}

export function songFromJSON(
  jsonString: string,
): SafeParseResult<Song, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Song$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Song' from JSON`,
  );
}
