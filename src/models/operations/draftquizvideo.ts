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
export const DraftQuizVideoLocale = {
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
export type DraftQuizVideoLocale = ClosedEnum<typeof DraftQuizVideoLocale>;

export type DraftQuizVideoRequestBody = {
  /**
   * The topic you would like to make a quiz about.
   */
  topic: string;
  /**
   * The locale of the video.
   */
  locale?: DraftQuizVideoLocale | undefined;
};

/** @internal */
export const DraftQuizVideoLocale$inboundSchema: z.ZodNativeEnum<
  typeof DraftQuizVideoLocale
> = z.nativeEnum(DraftQuizVideoLocale);

/** @internal */
export const DraftQuizVideoLocale$outboundSchema: z.ZodNativeEnum<
  typeof DraftQuizVideoLocale
> = DraftQuizVideoLocale$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DraftQuizVideoLocale$ {
  /** @deprecated use `DraftQuizVideoLocale$inboundSchema` instead. */
  export const inboundSchema = DraftQuizVideoLocale$inboundSchema;
  /** @deprecated use `DraftQuizVideoLocale$outboundSchema` instead. */
  export const outboundSchema = DraftQuizVideoLocale$outboundSchema;
}

/** @internal */
export const DraftQuizVideoRequestBody$inboundSchema: z.ZodType<
  DraftQuizVideoRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  topic: z.string(),
  locale: DraftQuizVideoLocale$inboundSchema.default("auto"),
});

/** @internal */
export type DraftQuizVideoRequestBody$Outbound = {
  topic: string;
  locale: string;
};

/** @internal */
export const DraftQuizVideoRequestBody$outboundSchema: z.ZodType<
  DraftQuizVideoRequestBody$Outbound,
  z.ZodTypeDef,
  DraftQuizVideoRequestBody
> = z.object({
  topic: z.string(),
  locale: DraftQuizVideoLocale$outboundSchema.default("auto"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DraftQuizVideoRequestBody$ {
  /** @deprecated use `DraftQuizVideoRequestBody$inboundSchema` instead. */
  export const inboundSchema = DraftQuizVideoRequestBody$inboundSchema;
  /** @deprecated use `DraftQuizVideoRequestBody$outboundSchema` instead. */
  export const outboundSchema = DraftQuizVideoRequestBody$outboundSchema;
  /** @deprecated use `DraftQuizVideoRequestBody$Outbound` instead. */
  export type Outbound = DraftQuizVideoRequestBody$Outbound;
}

export function draftQuizVideoRequestBodyToJSON(
  draftQuizVideoRequestBody: DraftQuizVideoRequestBody,
): string {
  return JSON.stringify(
    DraftQuizVideoRequestBody$outboundSchema.parse(draftQuizVideoRequestBody),
  );
}

export function draftQuizVideoRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<DraftQuizVideoRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DraftQuizVideoRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DraftQuizVideoRequestBody' from JSON`,
  );
}
