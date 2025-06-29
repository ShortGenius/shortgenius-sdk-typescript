/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The locale of the video.
 */
export const DraftNewsVideoLocale = {
  AfZA: "af-ZA",
  IDID: "id-ID",
  MsMY: "ms-MY",
  CaES: "ca-ES",
  CsCZ: "cs-CZ",
  DaDK: "da-DK",
  DEDE: "de-DE",
  EnUS: "en-US",
  ESES: "es-ES",
  Es419: "es-419",
  FrCA: "fr-CA",
  FRFR: "fr-FR",
  HRHR: "hr-HR",
  ITIT: "it-IT",
  HUHU: "hu-HU",
  NLNL: "nl-NL",
  NONO: "no-NO",
  PLPL: "pl-PL",
  PtBR: "pt-BR",
  PTPT: "pt-PT",
  RORO: "ro-RO",
  SKSK: "sk-SK",
  FIFI: "fi-FI",
  SvSE: "sv-SE",
  ViVN: "vi-VN",
  TRTR: "tr-TR",
  ElGR: "el-GR",
  RURU: "ru-RU",
  SrSP: "sr-SP",
  UkUA: "uk-UA",
  HyAM: "hy-AM",
  HeIL: "he-IL",
  UrPK: "ur-PK",
  ArSA: "ar-SA",
  HiIN: "hi-IN",
  THTH: "th-TH",
  KoKR: "ko-KR",
  JaJP: "ja-JP",
  ZhCN: "zh-CN",
  ZhTW: "zh-TW",
  Auto: "auto",
} as const;
/**
 * The locale of the video.
 */
export type DraftNewsVideoLocale = ClosedEnum<typeof DraftNewsVideoLocale>;

export type DraftNewsVideoRequestBody = {
  /**
   * The topic you would like the AI to retrieve news about.
   */
  topic: string;
  /**
   * The locale of the video.
   */
  locale?: DraftNewsVideoLocale | undefined;
};

/** @internal */
export const DraftNewsVideoLocale$inboundSchema: z.ZodNativeEnum<
  typeof DraftNewsVideoLocale
> = z.nativeEnum(DraftNewsVideoLocale);

/** @internal */
export const DraftNewsVideoLocale$outboundSchema: z.ZodNativeEnum<
  typeof DraftNewsVideoLocale
> = DraftNewsVideoLocale$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DraftNewsVideoLocale$ {
  /** @deprecated use `DraftNewsVideoLocale$inboundSchema` instead. */
  export const inboundSchema = DraftNewsVideoLocale$inboundSchema;
  /** @deprecated use `DraftNewsVideoLocale$outboundSchema` instead. */
  export const outboundSchema = DraftNewsVideoLocale$outboundSchema;
}

/** @internal */
export const DraftNewsVideoRequestBody$inboundSchema: z.ZodType<
  DraftNewsVideoRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  topic: z.string(),
  locale: DraftNewsVideoLocale$inboundSchema.default("auto"),
});

/** @internal */
export type DraftNewsVideoRequestBody$Outbound = {
  topic: string;
  locale: string;
};

/** @internal */
export const DraftNewsVideoRequestBody$outboundSchema: z.ZodType<
  DraftNewsVideoRequestBody$Outbound,
  z.ZodTypeDef,
  DraftNewsVideoRequestBody
> = z.object({
  topic: z.string(),
  locale: DraftNewsVideoLocale$outboundSchema.default("auto"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DraftNewsVideoRequestBody$ {
  /** @deprecated use `DraftNewsVideoRequestBody$inboundSchema` instead. */
  export const inboundSchema = DraftNewsVideoRequestBody$inboundSchema;
  /** @deprecated use `DraftNewsVideoRequestBody$outboundSchema` instead. */
  export const outboundSchema = DraftNewsVideoRequestBody$outboundSchema;
  /** @deprecated use `DraftNewsVideoRequestBody$Outbound` instead. */
  export type Outbound = DraftNewsVideoRequestBody$Outbound;
}

export function draftNewsVideoRequestBodyToJSON(
  draftNewsVideoRequestBody: DraftNewsVideoRequestBody,
): string {
  return JSON.stringify(
    DraftNewsVideoRequestBody$outboundSchema.parse(draftNewsVideoRequestBody),
  );
}

export function draftNewsVideoRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<DraftNewsVideoRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DraftNewsVideoRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DraftNewsVideoRequestBody' from JSON`,
  );
}
