export const exerciseOptions   = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a085738dcdmsh3bc1906f94928b0p1f9ed4jsn3515e50abefb',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
	},
};
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'a085738dcdmsh3bc1906f94928b0p1f9ed4jsn3515e50abefb',
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
 