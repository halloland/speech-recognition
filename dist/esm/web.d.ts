import { WebPlugin } from "@capacitor/core";
import { SpeechRecognitionPlugin, UtteranceOptions } from "./definitions";
export declare class SpeechRecognitionWeb extends WebPlugin
  implements SpeechRecognitionPlugin {
  available(): Promise<{
    available: boolean;
  }>;
  start(
    _options?: UtteranceOptions
  ): Promise<{
    matches: String[];
  }>;
  stop(): Promise<void>;
  getSupportedLanguages(): Promise<{
    languages: any[];
  }>;
  hasPermission(): Promise<{
    permission: boolean;
  }>;
  requestPermission(): Promise<void>;
  listen(): Promise<string>;
}
declare const SpeechRecognition: SpeechRecognitionWeb;
export { SpeechRecognition };
