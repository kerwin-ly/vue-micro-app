import { type Composer } from 'vue-i18n';
import { i18n } from '@/locales';

type I18nGlobalTranslation = Composer['t'];
type I18nTranslationRestParameters = [string, SafeAny];

function getKey(namespace: string | undefined, key: string) {
  if (!namespace) {
    return key;
  }
  if (key.startsWith(namespace)) {
    return key;
  }
  return `${namespace}.${key}`;
}

export function useI18n(namespace?: string): {
  t: I18nGlobalTranslation;
} {
  const normalFn = {
    t: (key: string) => {
      return getKey(namespace, key);
    }
  };

  if (!i18n) {
    return normalFn;
  }

  const { t } = i18n.global;

  const tFn: I18nGlobalTranslation = (key: string, ...arg: SafeAny[]) => {
    if (!key) return '';
    if (!key.includes('.') && !namespace) return key;
    return t(getKey(namespace, key), ...(arg as I18nTranslationRestParameters));
  };
  return Object.assign(i18n.global, { t: tFn });
}

/**
 * Convert title in dynamic route
 * @param {string} message message
 * @param isI18n  Default is true，translate the message
 * @returns message
 */
export function transformI18n(message: string, isI18n = true) {
  if (!message) {
    return '';
  }

  // Object format: {zh_CN:"",en_US:""}
  if (typeof message === 'object') {
    return message[i18n.global?.locale];
  }

  if (isI18n && typeof message === 'string') {
    return i18n.global.t(message);
  }
  return message;
}

// This function makes vscode i18nn ally plugin work.
export const t = (key: string) => key;
