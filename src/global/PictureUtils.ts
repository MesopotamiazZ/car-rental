import httpBaseConfig from "@/api/base/httpBaseConfig";

export function Thumbnail(w: string, h: string) {
	return "?imageView2/1/w/" + w + "/h/" + h;
}

export function FullPicUrl(url: string) {
	return `https://power-car-1304469929.cos.ap-beijing.myqcloud.com${url}`;
}
export function alioss(url: string, width: number = 140, height: number = 140) {
	return url + '?x-oss-process=image/resize,w_' + width + ',h_' + height + ',m_fill/auto-orient,1/quality,q_100/format,jpg'
}


// 本地图片
export function localImg(url: string) {
	return httpBaseConfig.imgUrls + '' + url
}