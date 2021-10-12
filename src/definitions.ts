export type CallbackID = string;
export type SpeechCallback = (matches: String[]) => void;

declare module "@capacitor/core" {
  interface PluginRegistry {
    SpeechRecognition: SpeechRecognitionPlugin;
  }
}

export interface SpeechRecognitionPlugin {
  available(): Promise<{ available: boolean }>;
  listen(options?: UtteranceOptions, callback?: SpeechCallback): Promise<CallbackID>;
  start(options?: UtteranceOptions): Promise<{ matches: String[] }>;
  stop(): Promise<void>;
  getSupportedLanguages(): Promise<{ languages: any[] }>;
  hasPermission(): Promise<{ permission: boolean }>;
  requestPermission(): Promise<void>;
}

export interface UtteranceOptions {
  language?: string;
  maxResults?: number;
  prompt?: string;
  popup?: boolean;
  partialResults?: boolean;
}
