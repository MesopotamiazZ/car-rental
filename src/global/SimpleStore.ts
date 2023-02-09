function isJSON(str:string) {
    if (typeof str == 'string') {
        try {
			var obj=JSON.parse(str);
			return typeof obj == 'object' && obj
        } catch(e) {
            //console.log('error：'+str+'!!!'+e);
            return false;
        }
	}
	// console.log('It is not a string!')
	return false;
    
}


export default {
	/**
	 * Get a one or more value for a key or array of keys from AsyncStorage
	 * @param {String|Array} key A key or array of keys
	 * @return {Promise}
	 */
	get(key:string) {
		//console.log(key)
		const val:string | null = localStorage.getItem(key);
		if(val && isJSON(val)){
			return JSON.parse(val);
		}
		return val;
	},

	/**
	 * Save a key value pair or a series of key value pairs to AsyncStorage.
	 * @param  {String|Array} key The key or an array of key/value pairs
	 * @param  {Any} value The value to save
	 * @return {Promise}
	 */
	save(key:string, value:any) {
		const item =typeof(value)!='string'?JSON.stringify(value):value;
		return localStorage.setItem(key, item);
	},

	delete(key:string) {
		return localStorage.removeItem(key)
	},

};


