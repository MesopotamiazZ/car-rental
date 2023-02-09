// import { IS_H5_ON } from '@/constants/constants';

export function isMobile() {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return true;
  }

  return false;
}

export function isH5FeatureOn() {
  // return isMobile() && IS_H5_ON;
}
