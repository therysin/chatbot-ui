export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}
export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_4 = 'gpt-4',
  GPT_4_32K = 'gpt-4o',
  GPT_4_128K = 'gpt-4-turbo',
}
// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;
export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5-turbo',
    maxLength: 48000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4o',
    maxLength: 384000,
    tokenLimit: 128000,
  },
  [OpenAIModelID.GPT_4_128K]: {
    id: OpenAIModelID.GPT_4_128K,
    name: 'GPT-4-turbo',
    maxLength: 384000,
    tokenLimit: 128000,
  },
};
