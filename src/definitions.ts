export type CallbackID = string;
export type SpeechCallback = (result: { matches: String[] }) => void;

export interface SpeechRecognitionPlugin {
  available(): Promise<{ available: boolean }>;
  start(options?: UtteranceOptions): Promise<{ matches: String[] }>;
  stop(options: { callbackId: string }): Promise<void>;
  getSupportedLanguages(): Promise<{ languages: any[] }>;
  hasPermission(): Promise<{ permission: boolean }>;
  requestPermission(): Promise<void>;
  listen(
    options?: UtteranceOptions,
    callback?: SpeechCallback
  ): Promise<CallbackID>;
}

export interface UtteranceOptions {
  language?: string;
  maxResults?: number;
  prompt?: string;
  popup?: boolean;
  partialResults?: boolean;
}
